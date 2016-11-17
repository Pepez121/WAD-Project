<?php
function connectionToDataBase(){
	$servername = "localhost";
	$username = "root";
	$password = "root";
	$dbname = "tienda";

	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error){
		return null;
	}
	else{
		return $conn;
	}
}
#***********************************************************
function attemptLogin($userName){

	$conn = connectionToDataBase();

	if ($conn != null){
		$sql = "SELECT * FROM customers WHERE username='$userName'";
		
		$result = $conn->query($sql);

		if ($result->num_rows > 0)
		{
			while($row = $result->fetch_assoc()) 
			{
				$conn->close();
				return array("status" => "COMPLETE", "fName" => $row['firstName'], "lName" => $row['lastName'], "password" => $row['password']);
			}
		}else{
			$conn -> close();
			return array("status" => "ERROR");
		}
	}else{
		$conn -> close();
		return array("status" => "DB_ERROR");
	}
}
#***********************************************************
function attemptRegister($userName){
	$conn=connectionToDataBase();
	if($conn !=null){
		$sql = "SELECT username FROM customers WHERE username = '$userName'";
		$result = $conn->query($sql);
		if($result->num_rows > 0){
			$conn -> close();
			return array("status" => "ERROR");
		}else{
			$conn -> close();
			return array("status" => "COMPLETE");
		}
	}
}
#***********************************************************
function registerNewUser($userName,$userPassword,$userFirstName,$userLastName,$userEmail){
    	# Open and validate the Database connection
	$conn = connectionToDataBase();

	if ($conn != null)
	{
		$sql = "INSERT INTO customers (username, password, firstName, lastName, email) VALUES ('$userName', '$userPassword', '$userFirstName', '$userLastName','$userEmail')";	
		if (mysqli_query($conn, $sql)) 
		{
	    		# User registered correctly
			$conn->close();
			return array("status" => "COMPLETE");
		} 
		else 
		{
				# Something went wrong when inserting the user
			$conn->close();
			return array("status" => "ERROR");
		}
	}
	else
	{
        	# Connection to Database was not successful
		$conn->close();
		return array("status" => "ERROR");
	}
}
#***********************************************************
function attemptAdd($producto){
	$conn = connectionToDataBase();
	if($conn != null){
		$sql = "SELECT * FROM product WHERE productid = '$producto' ";
		$result = $conn->query($sql);
		error_log(print_r($result,true));
		while($row = $result->fetch_assoc()){
			return array("status" => "COMPLETE", "producto" => $row['productname'], "Price" => $row['uniprice']);
		}
	}else{
		$conn->close();
	}
}
#***********************************************************
function insertOrder($userName,$texto){
	$conn=connectionToDataBase();
	if($conn !=null){
		$sql = "INSERT INTO ordernormal (username, texto) VALUES ('$userName','$texto')";
		$result = $conn->query($sql);
		error_log(print_r($sql,true));
		$conn -> close();
		return array("status" => "SUCCESS");
	}
	else{
		$conn -> close();
		return array("status" => "CONNECTION WITH DB WENT WRONG");
	}
}
?>