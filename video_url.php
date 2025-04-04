<?php

$curl = curl_init();

// TikTok video share URL (encoded in URL format)
$video_url = urlencode('https://www.tiktok.com/@user/video/7484023146907962657'); // Replace with your desired TikTok video URL

curl_setopt_array($curl, [
    CURLOPT_URL => "https://tiktok-download-without-watermark.p.rapidapi.com/analysis?url=$video_url&hd=0", // API call with URL parameter
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => [
        "x-rapidapi-host: tiktok-download-without-watermark.p.rapidapi.com",
        "x-rapidapi-key: fa936fe7d1mshdcbda403858d5c8p15e939jsn8797850eddf6" // Replace with your actual RapidAPI key
    ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
    echo "cURL Error #:" . $err;
} else {
    // Decode the response to extract the video download link
    $response_data = json_decode($response, true);
    if (isset($response_data['video']['url'])) {
        echo "Download URL: " . $response_data['video']['url']; // Video download link
    } else {
        echo "Error: Video URL not found.";
    }
}
?>
