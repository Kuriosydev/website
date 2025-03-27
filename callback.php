<?php
// callback.php

$clientKey = 'sbaw2jpsjci0psiu0u';
$clientSecret = '6dSAnGMApCwmnwv396yMxDBdZo2rQP8k';
$redirectUri = 'https://50b1-2405-201-a408-6833-a078-bf73-5914-87bc.ngrok-free.app/tiktok/callback.php';

if (isset($_GET['code'])) {
    $code = $_GET['code'];

    $data = [
        'client_key'    => $clientKey,
        'client_secret' => $clientSecret,
        'code'          => $code,
        'grant_type'    => 'authorization_code',
        'redirect_uri'  => $redirectUri,
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://open.tiktokapis.com/v2/oauth/token/');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);

    $response = curl_exec($ch);
    curl_close($ch);

    $responseData = json_decode($response, true);

    echo "<pre>";
    print_r($responseData);
    echo "</pre>";

    if (isset($responseData['access_token'])) {
        echo "✅ Access Token: " . $responseData['access_token'];
        echo "<br>🔄 Expires in: " . $responseData['expires_in'] . " seconds";
        echo "<br>🆔 Open ID: " . $responseData['open_id'];
        echo "<br>🔄 Refresh Token: " . $responseData['refresh_token'];
    }

    // Only show error if it exists
    if (isset($responseData['error'])) {
        echo "❌ Error: " . ($responseData['error']['message'] ?? "Unknown error occurred.");
    }
} else {
    echo "❌ Error: No authorization code received.";
}
?>
