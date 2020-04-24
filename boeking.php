<?php
// Create connection
$con=mysqli_connect("localhost","robinyd430_robin","robin6971","robinyd430_Project"); 

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?> 