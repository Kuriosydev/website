<?php
// Your client ID from Facebook Developer portal
$client_id = '2562538347471505';

// Your redirect URI set up in the Facebook Developer app
$redirect_uri = 'https://50b1-2405-201-a408-6833-a078-bf73-5914-87bc.ngrok-free.app/tiktok/metacallback.php';

// The scope of permissions you are requesting (for example: access to user profile and media)
$scope = 'user_profile,user_media';

// Optional state parameter for security
$state = bin2hex(random_bytes(16)); // Secure random state parameter

// Authorization URL
$auth_url = "https://threads.net/oauth/authorize?client_id=$client_id&redirect_uri=$redirect_uri&scope=$scope&response_type=code&state=$state";


// Redirect user to Instagram OAuth
header("Location: $auth_url");
exit();
?>
