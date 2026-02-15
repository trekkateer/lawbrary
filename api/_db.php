<?php
/**
 * Shared database connections, language detection, and JSON helpers for the API layer.
 */

// Prevent direct browser access to this file
if (basename($_SERVER['SCRIPT_FILENAME']) === '_db.php') {
    http_response_code(403);
    exit;
}

// --- Language Detection ---
$domain = $_SERVER['HTTP_HOST'];
$subdomain = explode('.l', $domain)[0];
$lang = (strlen($subdomain) === 2) ? $subdomain : 'en';

// --- Database Connections ---

// Content database (countries, divisions, organizations, translations)
$dataConn = new mysqli(
    'localhost',
    'ug0iy8zo9nryq',
    'T_1&x+$|*N6F',
    'dbupm726ysc0bg'
);
if ($dataConn->connect_error) {
    jsonError('Content database connection failed', 500);
}
$dataConn->set_charset('utf8');

// Law database (per-country tables)
$lawConn = new mysqli(
    'localhost',
    'u9vdpg8vw9h2e',
    'f1x.A1pgN[BwX4[t',
    'dbpsjng5amkbcj'
);
if ($lawConn->connect_error) {
    jsonError('Law database connection failed', 500);
}
$lawConn->set_charset('utf8');

// --- Helper Functions ---

/**
 * Send a JSON response and exit.
 */
function jsonResponse($data, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Send a JSON error response and exit.
 */
function jsonError(string $message, int $status = 400): void {
    jsonResponse(['error' => $message], $status);
}

/**
 * Extract a localized name from a JSON name string.
 */
function localizedName(string $jsonStr, string $lang): string {
    $names = json_decode($jsonStr, true);
    if (!$names) return '';
    return $names[$lang] ?? $names['en'] ?? reset($names) ?: '';
}

/**
 * Get a safe table name (only lowercase letters and hyphens, for country IDs).
 */
function safeTableName(string $input): ?string {
    $clean = strtolower(trim($input));
    if (preg_match('/^[a-z][a-z0-9\-]*$/', $clean)) {
        return $clean;
    }
    return null;
}

/**
 * Get list of all country table names from the law database.
 */
function getCountryTables(mysqli $lawConn): array {
    $tables = [];
    $result = $lawConn->query("SHOW TABLES");
    while ($row = $result->fetch_row()) {
        $tables[] = $row[0];
    }
    return $tables;
}
