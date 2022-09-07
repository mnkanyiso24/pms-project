<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Origin, Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorzation, X-Requested-Width');
include_once 'config.php';
error_reporting(E_ERROR);
$project=[];
$sql = "SELECT * FROM project";
$result = $conn->query($sql);

if($result=mysqli_query($conn,$sql))
{
  $cr=0;
  while($row=mysqli_fetch_assoc($result))
  {
    $sId[$cr]['sId']=$row['sId'];
    $project[$cr]['projectName']=$row['projectName'];
    $project[$cr]['objectives']=$row['objectives'];
    $project[$cr]['goal']=$row['goal'];
    $project[$cr]['sdbipNo']=$row['sdbipNo'];
    $project[$cr]['ProjectId']=$row['ProjectId'];
    $project[$cr]['institution']=$row['institution'];
    $project[$cr]['Annualtarget']=$row['Annualtarget'];
    $project[$cr]['Duedate']=$row['Duedate'];
    $project[$cr]['Strategy']=$row['Strategy'];
    $project[$cr]['Department']=$row['Department'];
    $project[$cr]['budget']=$row['budget'];
    $project[$cr]['Q1']=$row['Q1'];
    $project[$cr]['Q2']=$row['Q2'];
    $project[$cr]['Q3']=$row['Q3'];
    $project[$cr]['Q4']=$row['Q4'];
    $cr++;
  }
  echo json_encode($project);
}else{
  http_response_code(404);
}

