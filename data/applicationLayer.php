<?php
header('Content-type: application/json');
require_once __DIR__ . '/dataLayer.php';
$action = $_POST["action"];

switch($action){
	case "LOGIN" : loginFunction();
	break;
	case "REGISTER" : registerFunction();
	break;
	case "LOGOUT" : logoutFunction(); 
	break;
	case "COMMENT" : commentFunction();
	break;
	#case "ORDER" : orderUp();
	#break;
}
#***********************************************************
function logoutFunction(){
	setcookie("cookieUsername", "", 1);
	echo json_encode("Goodbye");
}
#***********************************************************
function loginFunction(){
	$userName = $_POST["username"];
	$userPassword = $_POST["password"];
	$cookier = $_POST["cookie"];

	$result = attemptLogin($userName);

	if ($result["status"] == "COMPLETE"){
		$decryptedPassword = decryptPassword($result['password']);
		#error_log(print_r($result['password'],true));
		#hasta aqui tengo la encriptada de la DB y la que puse.
		#error_log(print_r($userPassword,true));
		if ($decryptedPassword === $userPassword)
		{	
			$response = array("status" => "COMPLETE");   
			if($_COOKIE["cookieUsername"] != username){
				setcookie("cookieUsername", $userName, time()+(60*60*24*20));
			}	
			echo json_encode($response);
		}else{
			header('HTTP/1.1 306 Wrong credentials');
			die("Wrong credentials");
		}
	}	
}
#***********************************************************
function encryptPassword() {
	$userPassword = $_POST["userPassword"];

	$key = pack('H*', "bcb04b7e103a05afe34763051cef08bc55abe029fdebae5e1d417e2ffb2a00a3");
	$key_size =  strlen($key);

	$plaintext = $userPassword;

	$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
	$iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);

	$ciphertext = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $plaintext, MCRYPT_MODE_CBC, $iv);
	$ciphertext = $iv . $ciphertext;

	$userPassword = base64_encode($ciphertext);

	return $userPassword;
}
#***********************************************************
function decryptPassword($password) {
	$key = pack('H*', "bcb04b7e103a05afe34763051cef08bc55abe029fdebae5e1d417e2ffb2a00a3");

	$iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);

	$ciphertext_dec = base64_decode($password);
	$iv_dec = substr($ciphertext_dec, 0, $iv_size);
	$ciphertext_dec = substr($ciphertext_dec, $iv_size);

	$password = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $ciphertext_dec, MCRYPT_MODE_CBC, $iv_dec);


	$count = 0;
	$length = strlen($password);

	for ($i = $length - 1; $i >= 0; $i --)
	{
		if (ord($password{$i}) === 0)
		{
			$count ++;
		}
	}

	$password = substr($password, 0,  $length - $count); 

	return $password;
}
#***********************************************************
function registerFunction(){
	$userName = $_POST['username'];
	$result = attemptRegister($userName);

	if ($result["status"] == "COMPLETE"){
		$userFirstName = $_POST['userFirstName'];
		$userLastName = $_POST['userLastName'];
		$userEmail = $_POST['userEmail'];

		$userPassword = encryptPassword();

			# Make the insertion of the new user to the Database
		$result = registerNewUser($userName,$userPassword,$userFirstName,$userLastName,$userEmail);
			# Verify that the insertion was successful
		if ($result['status'] == 'COMPLETE')
		{
				# Starting the session
				#startSession($userFirstName, $userLastName, $userName);
			echo json_encode($result);
		}
		else
		{
				# Something went wrong while inserting the new user
			die(json_encode($result));
			header('HTTP/1.1 409 Your action was not completed correctly, please try again later');
			die("Username in use");
		}  
	}	
	else{
		# Username already exists
		header('HTTP/1.1 412 That username already exists');
		die("Username in use");
	}	
}
#***********************************************************
?>