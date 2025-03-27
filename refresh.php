<?php
// TikTok refresh token endpoint
$refresh_url = 'https://open-api.tiktok.com/oauth/refresh_token/';

// Your application's client credentials (replace these with your actual credentials)
$client_key = 'sbaw2jpsjci0psiu0u';  // Replace with your client key
$client_secret = '6dSAnGMApCwmnwv396yMxDBdZo2rQP8k';  // Replace with your client secret
$refresh_token = 'rft.T5eAB0IOGhZAGMT7ckofKpOKVLPIB1zvspx5mQAOHftLV0lA45NusL9KlwgB!6400.u1';  // Replace with your actual refresh token

// Prepare the POST data
$data = [
    'client_key' => $client_key,
    'client_secret' => $client_secret,
    'refresh_token' => $refresh_token
];

// Use cURL to send the POST request
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $refresh_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);

// Execute the cURL request
$response = curl_exec($ch);

// Check for errors
if(curl_errno($ch)) {
    echo 'cURL Error: ' . curl_error($ch);
} else {
    // Parse the response
    $response_data = json_decode($response, true);

    // Check if the refresh was successful
    if (isset($response_data['data'])) {
        // Successful response, new access token
        $new_access_token = $response_data['data']['access_token'];
        $new_refresh_token = $response_data['data']['refresh_token'];
        $expires_in = $response_data['data']['expires_in'];

        echo "New Access Token: " . $new_access_token . "\n";
        echo "New Refresh Token: " . $new_refresh_token . "\n";
        echo "Expires In: " . $expires_in . " seconds\n";
    } else {
        // Handle failure
        echo "Error refreshing token: " . $response_data['error']['message'] . "\n";
    }
}

// Close the cURL session
curl_close($ch);
?>
