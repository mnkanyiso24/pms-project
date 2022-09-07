<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
include_once 'config.php';
error_reporting(E_ERROR);
$task=[];
$sql = "SELECT * FROM task";
$result = $conn->query($sql);

if($result=mysqli_query($conn,$sql))
{
  $cr=0;
  while($row=mysqli_fetch_assoc($result))
  {
    $task[$cr]['projectName']=$row['projectName'];
    $task[$cr]['taskId']=$row['taskId'];
    $task[$cr]['taskName']=$row['taskName'];
    $task[$cr]['taskDescription']=$row['taskDescription'];
    $task[$cr]['taskDueDate']=$row['taskDueDate'];
    $task[$cr]['whoDoTask']=$row['whoDoTask'];
    
    $cr++;
  }
  echo json_encode($task);
}else{
  http_response_code(404);
}

