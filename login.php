<?php
// login.php - Redirect users to TikTok OAuth

$clientKey = 'sbaw2jpsjci0psiu0u';
$redirectUri = 'https://d579-2405-201-a408-6833-b8b8-fc30-465-375a.ngrok-free.app/tiktok/callback.php';  
$scope = 'user.info.basic,video.list'; 

$authUrl = "https://www.tiktok.com/v2/auth/authorize/?client_key={$clientKey}&response_type=code&scope={$scope}&redirect_uri={$redirectUri}";

header('Location: ' . $authUrl);
exit;
