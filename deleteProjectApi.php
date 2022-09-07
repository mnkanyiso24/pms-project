<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorzation, X-Requested-Width');
require 'config.php';
$sId=$_GET['sId']

$sql ="DELETE FROM 'project' WHERE 'sId'= '{sId}' LIMIT 1";

if(mysqli_query($conn, $sql))
{
    http_response_code(204);
}
else{
    return http_response_code(422);
}

?>