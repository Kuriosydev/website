<?php

// Your TikTok access token
$access_token = 'act.qtDVCe68t7BDw9xtD2GtY8e1FiVJMSWpX1o0PezoihPdxOiIW2jhNhgLSI4d!6371.u1';  // Replace with your actual access token

// The API URL for retrieving user info with query parameters
$url = 'https://open.tiktokapis.com/v2/user/info/?fields=open_id,union_id,avatar_url';

// Initialize cURL session
$ch = curl_init();

// Set the cURL options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Set the Authorization header with the Bearer token
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $access_token
));

// Execute the cURL request and get the response
$response = curl_exec($ch);

// Check for cURL errors
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else {
    // Decode the response
    $response_data = json_decode($response, true);

    // Check if the API call was successful
    if (isset($response_data['data'])) {
        echo "User Info Retrieved Successfully!\n";
        print_r($response_data['data']);  // Display the user info
    } else {
        echo "Error: " . $response_data['error']['message'] . "\n";
    }
}

// Close the cURL session
curl_close($ch);

?>
