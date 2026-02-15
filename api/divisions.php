<?php
/**
 * GET /api/divisions.php?country=XX
 * Returns divisions, optionally filtered by country.
 */
require_once __DIR__ . '/_db.php';

$country = $_GET['country'] ?? null;

if ($country) {
    // Filter by country: divisions whose ID starts with the country code
    $stmt = $dataConn->prepare(
        "SELECT `ID`, `name` FROM `divisions` WHERE `ID` LIKE CONCAT(?, '-%') ORDER BY `ID`"
    );
    $countryUpper = strtoupper($country);
    $stmt->bind_param('s', $countryUpper);
    $stmt->execute();
    $result = $stmt->get_result();
} else {
    $result = $dataConn->query("SELECT `ID`, `name` FROM `divisions` ORDER BY `ID`");
}

if (!$result) {
    jsonError('Failed to query divisions', 500);
}

$divisions = [];
while ($row = $result->fetch_assoc()) {
    $divisions[] = [
        'id'   => $row['ID'],
        'name' => localizedName($row['name'], $lang),
    ];
}

usort($divisions, fn($a, $b) => strcasecmp($a['name'], $b['name']));

jsonResponse($divisions);
