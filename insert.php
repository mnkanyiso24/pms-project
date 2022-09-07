
<?php
require 'config.php';


$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
$request=json_decode($postdata);



$fName= mysqli_real_escape_string($con, trim($request->fName));
$email= mysqli_real_escape_string($con, $request->email);
$phones= mysqli_real_escape_string($con, trim($request->phones));
$pass= mysqli_real_escape_string($con, trim($request->pass));
$lName= mysqli_real_escape_string($con, trim($request->lName));
$cpass= mysqli_real_escape_string($con, trim($request->cpass));
$address= mysqli_real_escape_string($con, trim($request->address));
$idNo= mysqli_real_escape_string($con, trim($request->idNo));
$role= mysqli_real_escape_string($con, $request->role);
$gender= mysqli_real_escape_string($con, trim($request->gender));

//Store

$sql="INSERT INTO `users`(
        `fName`,
       
        `email`,
         `phones`,
         
           `pass`,
            `lName`,
            `role`,
           `cpass`,
             `address`,
              `gender`,
           `idNo`

        )VALUES
('{$fName}',

'{$email}',
'{$phones}',
'{$pass}',
'{$lName}',
'{$role}',
'{$cpass}',
'{$address}',
'{$gender}',
'{$idNo}')


";
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