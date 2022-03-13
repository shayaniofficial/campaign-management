<?php
$con=mysqli_connect("localhost","root","","women") or die("Couldn't connect".mysqli_error());
session_start();
$name=$_POST["email"];
$pwd=$_POST["pwd"];
$_SESSION["email"]=$name;







$s="select * from users";
$result=mysqli_query($con,$s);

while($row=mysqli_fetch_array($result,MYSQLI_ASSOC))
{
if($row["email"]==$name && $row["pwd"]==$pwd)
{
    header('Location:dashboard.html');
}
}


    echo "<script>document.location='signin.php';alert('Wrong password or email id .Please try again.')</script>";



?>