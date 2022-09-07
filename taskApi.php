

<?php
require 'config.php';


$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
$request=json_decode($postdata);



$projectName= mysqli_real_escape_string($con, trim($request->projectName));
$taskId= mysqli_real_escape_string($con, $request->taskId);
$taskName= mysqli_real_escape_string($con, trim($request->taskName));
$taskDescription= mysqli_real_escape_string($con, trim($request->taskDescription));
$taskDueDate= mysqli_real_escape_string($con, trim($request->taskDueDate));
$whoDoTask= mysqli_real_escape_string($con, trim($request->whoDoTask));


//Store

$sql="INSERT INTO `task`(`projectName`,`taskId`, `taskName`,`taskDescription`,`taskDueDate`, `whoDoTask`
          )VALUES(
'{$projectName}','{$taskId}','{$taskName}','{$taskDescription}','{$taskDueDate}','{$whoDoTask}'
)";

if(mysqli_query($con,$sql))
{
http_response_code(201);
echo " success ";
}
else
{
http_response_code(422);
}
}


?>