<?php
	header('Content-type: application/json');
	if (isset($_COOKIE['cookieUsername']))
	{
		echo json_encode(array('cookieUsername' => $_COOKIE['cookieUsername']));   	    
	}
	else
	{
		#header('HTTP/1.1 406 Cookie not set yet.');
	    #die("It is the first time you enter this application.");
	}
?>
