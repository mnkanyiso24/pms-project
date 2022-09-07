<?php


include_once 'config.php';
if(isset($_POST['submit']))
{    
   $projectName = $_POST['projectName'];
   $objectives = $_POST['objectives'];
   $goal = $_POST['goal'];
   $sdbipNo = $_POST['sdbipNo'];
   $ProjectId = $_POST['ProjectId'];
   $institution = $_POST['institution'];
   $Annualtarget = $_POST['Annualtarget'];
   $Duedate = $_POST['Duedate'];
   $Strategy = $_POST['Strategy'];
   $Department = $_POST['Department'];
   $budget = $_POST['budget'];
   $Q1 = $_POST['Q1'];
   $Q2 = $_POST['Q2'];
   $Q3 = $_POST['Q3'];
   $Q4 = $_POST['Q4'];
     

   $sql = "INSERT INTO project(projectName,objectives,goal,sdbipNo,ProjectId,institution,
   Annualtarget,Duedate,Strategy,Department,budget,Q1,Q2,Q3,Q4) VALUES
    ('$projectName','$objectives','$goal','$sdbipNo','$ProjectId','$institution',
    '$Annualtarget','$Duedate','$Strategy','$Department','$budget','$Q1','$Q2','$Q3','$Q4')";


     if (mysqli_query($conn, $sql)) {
        echo "New record has been added successfully !";
     } else {
        echo "Error: " . $sql . ":-" . mysqli_error($conn);
     }
     mysqli_close($conn);
}
?>