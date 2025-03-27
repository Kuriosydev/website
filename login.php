<?php
// login.php

$clientKey = 'sbaw2jpsjci0psiu0u';
$redirectUri = 'https://50b1-2405-201-a408-6833-a078-bf73-5914-87bc.ngrok-free.app/tiktok/callback.php';  // Your redirect URI
$scope = 'user.info.basic'; 
$authUrl = "https://www.tiktok.com/v2/auth/authorize/?client_key={$clientKey}&response_type=code&scope={$scope}&redirect_uri={$redirectUri}";

header('Location: ' . $authUrl);
exit;
