<?php
$con=mysqli_connect("localhost","root","","women") or die("Couldn't connect".mysqli_error());
session_start();
$name=$_POST["email"];
$pwd=$_POST["pwd"];
$_SESSION["email"]=$name;







$s="insert into users values('$name','$pwd') ";
$result=mysqli_query($con,$s);

if($result)
{
    
    echo "<script>document.location='signin.php';alert('Your have signed up  successfully')</script>";
}
else{


    echo "<script>document.location='signup.php';alert('Signup  failed.Please try again.')</script>";
}


?>

?>