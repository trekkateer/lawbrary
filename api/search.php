<?php
/**
 * GET /api/search.php
 *
 * Parameters:
 *   q        - search query text
 *   country  - filter by country code (e.g., "US")
 *   division - filter by division ID (e.g., "US-CA")
 *   type     - filter by type: "country", "division", "organization", "law", or empty for all
 *   yearFrom - minimum enactment year
 *   yearTo   - maximum enactment year
 *   sort     - sort field: "name", "enactDate" (default: "enactDate")
 *   order    - sort order: "asc" or "desc" (default: "desc")
 *   page     - page number (default: 1)
 *   limit    - results per page (default: 50, max: 100)
 */
require_once __DIR__ . '/_db.php';

// --- Parse parameters ---
$q        = trim($_GET['q'] ?? '');
$country  = trim($_GET['country'] ?? '');
$division = trim($_GET['division'] ?? '');
$type     = trim($_GET['type'] ?? '');
$yearFrom = (int)($_GET['yearFrom'] ?? 0);
$yearTo   = (int)($_GET['yearTo'] ?? 0);
$sort     = in_array($_GET['sort'] ?? '', ['name', 'enactDate']) ? $_GET['sort'] : 'enactDate';
$order    = strtolower($_GET['order'] ?? '') === 'asc' ? 'ASC' : 'DESC';
$page     = max(1, (int)($_GET['page'] ?? 1));
$limit    = min(100, max(1, (int)($_GET['limit'] ?? 50)));
$offset   = ($page - 1) * $limit;

$response = [
    'query'         => $q,
    'countries'     => [],
    'divisions'     => [],
    'organizations' => [],
    'laws'          => [],
    'lawsTotal'     => 0,
    'page'          => $page,
    'limit'         => $limit,
];

// --- Search entities (countries, divisions, organizations) ---
// Only search entities on page 1 and when there's a text query
if ($q && $page === 1) {
    $likeParam = '%' . $q . '%';

    // Countries
    if (!$type || $type === 'country') {
        $stmt = $dataConn->prepare(
            "SELECT `ID`, `name`, `emoji` FROM `countries`
             WHERE JSON_UNQUOTE(JSON_EXTRACT(`name`, ?)) LIKE ?
                OR JSON_UNQUOTE(JSON_EXTRACT(`name`, '$.en')) LIKE ?
                OR `ID` = ?
             LIMIT 20"
        );
        $jsonPath = '$.' . $lang;
        $qUpper = strtoupper($q);
        $stmt->bind_param('ssss', $jsonPath, $likeParam, $likeParam, $qUpper);
        $stmt->execute();
        $result = $stmt->get_result();
        while ($row = $result->fetch_assoc()) {
            $response['countries'][] = [
                'id'    => $row['ID'],
                'name'  => localizedName($row['name'], $lang),
                'emoji' => $row['emoji'] ?? '',
            ];
        }
        $stmt->close();
    }

    // Divisions
    if (!$type || $type === 'division') {
        $stmt = $dataConn->prepare(
            "SELECT `ID`, `name` FROM `divisions`
             WHERE JSON_UNQUOTE(JSON_EXTRACT(`name`, ?)) LIKE ?
                OR JSON_UNQUOTE(JSON_EXTRACT(`name`, '$.en')) LIKE ?
                OR `ID` = ?
             LIMIT 20"
        );
        $jsonPath = '$.' . $lang;
        $qUpper = strtoupper($q);
        $stmt->bind_param('ssss', $jsonPath, $likeParam, $likeParam, $qUpper);
        $stmt->execute();
        $result = $stmt->get_result();
        while ($row = $result->fetch_assoc()) {
            $response['divisions'][] = [
                'id'   => $row['ID'],
                'name' => localizedName($row['name'], $lang),
            ];
        }
        $stmt->close();
    }

    // Organizations
    if (!$type || $type === 'organization') {
        $stmt = $dataConn->prepare(
            "SELECT `ID`, `name` FROM `organizations`
             WHERE JSON_UNQUOTE(JSON_EXTRACT(`name`, ?)) LIKE ?
                OR JSON_UNQUOTE(JSON_EXTRACT(`name`, '$.en')) LIKE ?
                OR `ID` = ?
             LIMIT 20"
        );
        $jsonPath = '$.' . $lang;
        $qUpper = strtoupper($q);
        $stmt->bind_param('ssss', $jsonPath, $likeParam, $likeParam, $qUpper);
        $stmt->execute();
        $result = $stmt->get_result();
        while ($row = $result->fetch_assoc()) {
            $response['organizations'][] = [
                'id'   => $row['ID'],
                'name' => localizedName($row['name'], $lang),
            ];
        }
        $stmt->close();
    }
}

// --- Search laws ---
if (!$type || $type === 'law') {
    // Determine which tables to search
    $tablesToSearch = [];

    if ($country) {
        $tableName = safeTableName($country);
        if ($tableName) {
            $tablesToSearch[] = $tableName;
        }
    } else {
        // Search all country tables
        $tablesToSearch = getCountryTables($lawConn);
    }

    if (!empty($tablesToSearch)) {
        // Build the query based on whether we have a text search or just browsing
        $unionParts = [];
        $params = [];
        $paramTypes = '';

        foreach ($tablesToSearch as $table) {
            // Verify table name is safe (already validated by safeTableName or SHOW TABLES)
            $escapedTable = $lawConn->real_escape_string($table);

            $where = '1=1';
            $tableParams = [];
            $tableTypes = '';

            if ($q) {
                $where .= " AND (JSON_UNQUOTE(JSON_EXTRACT(`name`, ?)) LIKE ? OR JSON_UNQUOTE(JSON_EXTRACT(`name`, '$.en')) LIKE ?)";
                $jsonPath = '$.' . $lang;
                $likeParam = '%' . $q . '%';
                $tableParams[] = $jsonPath;
                $tableParams[] = $likeParam;
                $tableParams[] = $likeParam;
                $tableTypes .= 'sss';
            }

            if ($division) {
                $where .= " AND `ID` LIKE ?";
                $tableParams[] = strtoupper($division) . ':%';
                $tableTypes .= 's';
            }

            if ($yearFrom > 0) {
                $where .= " AND YEAR(`enactDate`) >= ?";
                $tableParams[] = $yearFrom;
                $tableTypes .= 'i';
            }

            if ($yearTo > 0) {
                $where .= " AND YEAR(`enactDate`) <= ?";
                $tableParams[] = $yearTo;
                $tableTypes .= 'i';
            }

            $unionParts[] = [
                'sql' => "SELECT `ID`, `name`, `enactDate`, `source` FROM `$escapedTable` WHERE $where",
                'params' => $tableParams,
                'types' => $tableTypes,
            ];
        }

        if (!empty($unionParts)) {
            // For a single table, use a simple query; for multiple, use UNION ALL
            if (count($unionParts) === 1) {
                $part = $unionParts[0];
                // Count query
                $countSql = "SELECT COUNT(*) as cnt FROM (" . $part['sql'] . ") AS sub";
                $mainSql = $part['sql'] . " ORDER BY `$sort` $order LIMIT ? OFFSET ?";

                if ($part['types']) {
                    // Count
                    $stmt = $lawConn->prepare($countSql);
                    $stmt->bind_param($part['types'], ...$part['params']);
                    $stmt->execute();
                    $response['lawsTotal'] = $stmt->get_result()->fetch_assoc()['cnt'];
                    $stmt->close();

                    // Results
                    $stmt = $lawConn->prepare($mainSql);
                    $allParams = array_merge($part['params'], [$limit, $offset]);
                    $stmt->bind_param($part['types'] . 'ii', ...$allParams);
                    $stmt->execute();
                    $result = $stmt->get_result();
                } else {
                    // No params needed — just browse
                    $stmt = $lawConn->prepare($countSql);
                    $stmt->execute();
                    $response['lawsTotal'] = $stmt->get_result()->fetch_assoc()['cnt'];
                    $stmt->close();

                    $stmt = $lawConn->prepare($mainSql);
                    $stmt->bind_param('ii', $limit, $offset);
                    $stmt->execute();
                    $result = $stmt->get_result();
                }

                while ($row = $result->fetch_assoc()) {
                    $response['laws'][] = [
                        'id'        => $row['ID'],
                        'name'      => localizedName($row['name'], $lang),
                        'enactDate' => $row['enactDate'],
                        'country'   => strtoupper(explode(':', $row['ID'])[0] ?? ''),
                    ];
                }
                $stmt->close();
            } else {
                // Multiple tables — UNION ALL approach
                // For performance, we limit each sub-query and post-process
                // This avoids extremely large UNION queries
                $allLaws = [];

                foreach ($unionParts as $part) {
                    $sql = $part['sql'] . " ORDER BY `$sort` $order LIMIT 200";
                    if ($part['types']) {
                        $stmt = $lawConn->prepare($sql);
                        $stmt->bind_param($part['types'], ...$part['params']);
                        $stmt->execute();
                        $result = $stmt->get_result();
                    } else {
                        $result = $lawConn->query($sql);
                    }

                    if ($result) {
                        while ($row = $result->fetch_assoc()) {
                            $allLaws[] = [
                                'id'        => $row['ID'],
                                'name'      => localizedName($row['name'], $lang),
                                'enactDate' => $row['enactDate'],
                                'country'   => strtoupper(explode(':', $row['ID'])[0] ?? ''),
                            ];
                        }
                    }
                    if (isset($stmt)) { $stmt->close(); unset($stmt); }
                }

                // Sort all results
                usort($allLaws, function ($a, $b) use ($sort, $order) {
                    $field = $sort === 'name' ? 'name' : 'enactDate';
                    $cmp = strcasecmp($a[$field] ?? '', $b[$field] ?? '');
                    return $order === 'ASC' ? $cmp : -$cmp;
                });

                $response['lawsTotal'] = count($allLaws);
                $response['laws'] = array_slice($allLaws, $offset, $limit);
            }
        }
    }
}

jsonResponse($response);
