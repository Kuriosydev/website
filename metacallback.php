<?php
if (isset($_GET['code'])) {
    // Instagram authorization code received
    $code = $_GET['code'];
    echo $code; die();

    // Your client ID and secret from Facebook Developer portal
    $client_id = '655288670564165';
    $client_secret = '0d012b7d70ba6c489024e1aedf745727';
    $redirect_uri = 'https://d579-2405-201-a408-6833-b8b8-fc30-465-375a.ngrok-free.app//tiktok/metacallback.php';

    // Instagram access token URL
    $url = 'https://threads.net/oauth/access_token';

    // Data to be sent in the POST request to exchange the code for an access token
    $post_data = [
        'client_id' => $client_id,
        'client_secret' => $client_secret,
        'redirect_uri' => $redirect_uri,
        'code' => $code,
        'grant_type' => 'authorization_code'
    ];

    // Initialize cURL
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_data));

    // Execute cURL request and get response
    $response = curl_exec($ch);
    curl_close($ch);

    // Decode the response
    $response_data = json_decode($response, true);

    if (isset($response_data['access_token'])) {
        $access_token = $response_data['access_token'];

        // Now you can use the access token to fetch user data
        $user_url = "https://graph.instagram.com/me?fields=id,username&access_token=$access_token";
        $user_data = json_decode(file_get_contents($user_url), true);

        // Display user data
        echo 'User ID: ' . $user_data['id'] . '<br>';
        echo 'Username: ' . $user_data['username'] . '<br>';
    } else {
        echo 'Error: ' . $response_data['error_message'];
    }
} else {
    echo 'No authorization code received.';
}
?>
