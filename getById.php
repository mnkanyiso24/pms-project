<?php
require 'config.php';
$sId=$_GET['sId'];

$sql ="SELECT * FROM `project` WHERE `sId` ='{$sId}' LIMIT 1";
$result =mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
echo $json=json_encode($row);
exit;


?>