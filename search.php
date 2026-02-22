<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search - Lawbrary</title>
    <?php
        // Language detection
        $domain = $_SERVER['HTTP_HOST'];
        $subdomain = explode('.l', $domain)[0];
        $lang = (strlen($subdomain) === 2) ? $subdomain : 'en';
        $basedomain = 'l' . (explode('.l', $domain)[1] ?? $domain);

        // Get translations
        $dataConn = new mysqli('localhost', 'ug0iy8zo9nryq', 'T_1&x+$|*N6F', 'dbupm726ysc0bg');
        $dataConn->set_charset('utf8');

        $translations = [];
        $stmt = $dataConn->prepare('SELECT * FROM `translations` WHERE `ID` = ?');
        $stmt->bind_param('s', $lang);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $translations = array_slice($result->fetch_assoc(), 1);
        }
        $stmt->close();
        $dataConn->close();
    ?>
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico"/>
    <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/literata"/>
    <script>
        window.__LAWBRARY_CONFIG__ = {
            lang: <?php echo json_encode($lang); ?>,
            translations: <?php echo json_encode($translations, JSON_UNESCAPED_UNICODE); ?>,
            baseDomain: <?php echo json_encode($basedomain); ?>
        };
    </script>
</head>
<body>
    <div id="search-root"></div>
    <script type="module" src="/search-app/dist/search.js"></script>
</body>
</html>
