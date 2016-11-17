<?php

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "tienda";

	// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
if ($conn->connect_error) 
{
	header('HTTP/1.1 500 Bad connection to Database');
	die("The server is down, we couldn't establish the DB connection");
}
else
{
	$userName = $_COOKIE["cookieUsername"];
	$sql = "SELECT * FROM ordernormal where username='$userName'";
	$result = $conn->query($sql);
	while($renglon = $result->fetch_row())
	{
		echo "<h3>$renglon[0].- ......... Usuario: $renglon[1]</h3> $renglon[2] ";
	}
} 

?>
