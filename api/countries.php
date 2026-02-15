<?php
/**
 * GET /api/countries.php
 * Returns list of countries with localized names and emoji flags.
 */
require_once __DIR__ . '/_db.php';

$sql = "SELECT `ID`, `name`, `emoji` FROM `countries` ORDER BY `ID`";
$result = $dataConn->query($sql);

if (!$result) {
    jsonError('Failed to query countries', 500);
}

$countries = [];
while ($row = $result->fetch_assoc()) {
    $countries[] = [
        'id'    => $row['ID'],
        'name'  => localizedName($row['name'], $lang),
        'emoji' => $row['emoji'] ?? '',
    ];
}

// Sort by localized name
usort($countries, fn($a, $b) => strcasecmp($a['name'], $b['name']));

jsonResponse($countries);
