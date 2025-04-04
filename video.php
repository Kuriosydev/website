<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $access_token = 'act.jeiaPvtDoShM54fSMADo7M6m7llFI2bzO7zZ1w2FjSgZHXv1N0SGPVSYJgH1!4860.e1';

    $url = 'https://open.tiktokapis.com/v2/video/list/?fields=cover_image_url,id,title,create_time';

    $data = json_encode([
        'max_count' => 20
    ]);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $access_token,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        $error_message = 'cURL Error: ' . curl_error($ch);
    } else {
        $response_data = json_decode($response, true);

        // Get the timestamp for one week ago (7 days ago) in UTC
        $one_week_ago = strtotime("-1 month");

        // Filter videos uploaded within the last week
        $filtered_videos = [];
        foreach ($response_data['data']['videos'] as $video) {  // Accessing videos array properly
            $create_time = $video['create_time'];  // TikTok's create_time is already a Unix timestamp
            if ($create_time >= $one_week_ago) {
                $filtered_videos[] = $video;
            }
        }

        // Display the filtered videos
        if (count($filtered_videos) > 0) {
            $result = "<h3>Videos Uploaded in the Last Week:</h3><ul>";
            foreach ($filtered_videos as $video) {
                $result .= "<li><strong>" . htmlspecialchars($video['title'] ?: 'Untitled') . "</strong><br><img src='" . htmlspecialchars($video['cover_image_url']) . "' alt='" . htmlspecialchars($video['title']) . "'><br><a href='https://www.tiktok.com/@user/video/" . htmlspecialchars($video['id']) . "' target='_blank'>Watch Video</a><br></li>";
            }
            $result .= "</ul>";
        } else {
            $result = "<p>No videos uploaded in the last week.</p>";
        }
    }

    curl_close($ch);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fetch TikTok Videos</title>
</head>
<body>
    <h2>Fetch TikTok Videos</h2>
    <form method="post">
        <button type="submit">Fetch Videos</button>
    </form>

    <?php
    if (isset($error_message)) {
        echo "<p style='color:red;'>❌ $error_message</p>";
    }

    if (isset($result)) {
        echo $result;
    }
    ?>
</body>
</html>
