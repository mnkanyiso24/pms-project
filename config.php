
<?php
//db credentials
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorzation, X-Requested-Width');

define ('DB_HOST', '127.0.0.1');
define ('DB_USER', 'root');
define ('DB_PASS','');
define ('DB_NAME','pms-db');

//connect with the database.
function connect()
{
$connect = mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME);

if(mysqli_connect_errno()){
die("Failed to connect:".mysqli_connect_errno());

}

mysqli_set_charset($connect,"utf8");
return $connect;
}
$con=connect();
?>
