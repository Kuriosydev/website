<?php
$access_token = "THAAkanXPsopFBYlVMRGZApQjRnOUd2c3BpMnFVZAWxSNUxmdmRCRUhlU2tlT1R1U1ByVUNKUTA0R2kydThRS1hiZAUdHcVdsUF95OHoyaHpLU0xnWFhwam1fWEZApUk8zcy1ERzlUNzVWMFNRTU94ZAzJZARjhWZA2YtZAEVhTHAtRnVrUVdYYTVmZAnBITFZASVXhTcDQZD"; // Replace with your actual access token
$post_id = "18043636439126897"; // Your Threads Post ID

$url = "https://graph.threads.net/v1.0/$post_id?access_token=$access_token";

// Initialize cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Execute request
$response = curl_exec($ch);
curl_close($ch);

// Decode JSON response
$post_details = json_decode($response, true);

// Output result
echo "<pre>";
print_r($post_details);
echo "</pre>";
?>
