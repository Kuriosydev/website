<?php
// Your access token obtained from OAuth
$access_token = 'THAA0HwgTXmatBYlZAYemgxbWVPVFdCWEVuRmYzX3ZANbjEtRlpaejNYa3oxaTRwU3RKcERkQjdSbnNCWVBDVnZAua0dDaHlCQTBQWS1xV3hDSXBJaEJmU0cweFMxZA0M1WW9PdWc4bTNoV1pwdjNvZAFUzZAEVfRTJHQVU5UEJ3ZAnY2TUR0M3hzZA3BtOTRpT3lTY1EZD';

// Instagram Graph API endpoint to get user details
$url = "https://graph.threads.net/v1.0/me?fields=id,username,name,threads_profile_picture_url,threads_biography&access_token=$access_token";

// Initialize cURL
$ch = curl_init();

// Set cURL options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

// Execute cURL request
$response = curl_exec($ch);

// Close cURL session
curl_close($ch);

// Decode JSON response
$user_info = json_decode($response, true);

// Display user info
print_r($user_info);
?>
