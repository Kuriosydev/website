<?php
// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $access_token = "THAA0HwgTXmatBYlZAYemgxbWVPVFdCWEVuRmYzX3ZANbjEtRlpaejNYa3oxaTRwU3RKcERkQjdSbnNCWVBDVnZAua0dDaHlCQTBQWS1xV3hDSXBJaEJmU0cweFMxZA0M1WW9PdWc4bTNoV1pwdjNvZAFUzZAEVfRTJHQVU5UEJ3ZAnY2TUR0M3hzZA3BtOTRpT3lTY1EZD"; // Replace with your Threads access token
    $threads_user_id = "9264557966986121"; // Replace with your Threads user ID
    $text = $_POST["text"]; // Get caption from form

    // API endpoint
    $url = "https://graph.threads.net/v1.0/$threads_user_id/threads";

    // POST data (no image, only text)
    $data = [
        "media_type" => "TEXT",  // Set media_type to "TEXT"
        "text" => $text,
        "access_token" => $access_token
    ];

    // Initialize cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/x-www-form-urlencoded"]);

    if (curl_errno($ch)) {
        $error = "cURL Error: " . curl_error($ch);
    }
    // Execute request
    $response = curl_exec($ch);
    curl_close($ch);

    // Decode response
    $result = json_decode($response, true);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Post to Threads</title>
</head>
<body>
    <h2>Post to Threads</h2>

    <!-- Display response messages -->
    <?php if (!empty($result)): ?>
        <?php if (isset($result["id"])): ?>
            <h3 style="color: green;">Post Successful!</h3>
            <p>Post ID: <?php echo htmlspecialchars($result["id"]); ?></p>
        <?php else: ?>
            <h3 style="color: red;">Failed to Post!</h3>
            <p>Error: <?php echo htmlspecialchars($response); ?></p>
        <?php endif; ?>
    <?php endif; ?>

    <!-- Threads Post Form -->
    <form method="post">
        <label for="text">Caption:</label>
        <textarea id="text" name="text" required></textarea>
        <br><br>

        <button type="submit">Post to Threads</button>
    </form>
</body>
</html>
