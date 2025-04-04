<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Publish Thread Post</title>
</head>
<body>
    <h1>Publish a Thread Post</h1>
    <form action="" method="POST">
        <label for="container_id">Media Container ID:</label>
        <input type="text" id="container_id" name="container_id" required><br><br>

        <label for="access_token">Access Token:</label>
        <input type="text" id="access_token" name="access_token" required><br><br>

        <button type="submit">Publish Post</button>
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get data from form
        $access_token = $_POST["access_token"]; // The access token
        $threads_user_id = "9264557966986121"; // Replace with your Threads user ID
        $media_container_id = $_POST["container_id"]; // The container ID from the previous step

        // Threads API endpoint for publishing a thread
        $url = "https://graph.threads.net/me/threads?creation_id=$media_container_id&access_token=$access_token";

        // Initialize cURL
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/x-www-form-urlencoded"]);

        // Execute request
        $response = curl_exec($ch);
        curl_close($ch);

        // Decode response
        $result = json_decode($response, true);

        // Output result for debugging
        echo "<pre>";
        print_r($result);
        echo "</pre>";
    }
    ?>
</body>
</html>
