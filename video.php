<?php

// Your TikTok access token
$access_token = 'act.qtDVCe68t7BDw9xtD2GtY8e1FiVJMSWpX1o0PezoihPdxOiIW2jhNhgLSI4d!6371.u1'; 

$url = 'https://open.tiktokapis.com/v2/video/list/?fields=cover_image_url,id,title';

$data = array(
    'max_count' => 20
);


$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data)); 
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Authorization: Bearer ' . $access_token, 
    'Content-Type: application/json' 
));


$response = curl_exec($ch);


if (curl_errno($ch)) {
    echo 'Error: ' . curl_error($ch);
} else {
    
    $response_data = json_decode($response, true);

    if (isset($response_data['data'])) {
        echo "Video List Retrieved Successfully!\n";
        print_r($response_data['data']);  // Display the list of videos
    } else {
        echo "Error: " . $response_data['error']['message'] . "\n";
    }
}

curl_close($ch);

?>
