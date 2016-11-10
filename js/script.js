$(document).ready(function() {
	$("#contactoDiv").hide();
	$("#loginForm").hide();
	$("#acercaDiv").hide();
	$("#orderDiv").hide();
	$("#carritoDiv").hide();
	$("#registerForm").hide();
	//$("#loggedAs").hide();
	//*******************************************************	
	//Usuario mostrar
	$.ajax({
		url : "data/cookieService.php",
		type : "GET",
		dataType : "json",
		success : function(jsonResponse){
			$("#cookieshow").append(jsonResponse.cookieUsername);
		},
		error : function(errorMessage){
			//alert(errorMessage.responseText);
		}
	});
	//*******************************************************	
	$("#ulInicio").click(function(){
		window.location = 'index.html'; 
	});
	$("#ulCatalogo").click(function(){
		$("#catalogoDiv").show();
		$("#contactoDiv").hide();
		$("#loginForm").hide();
		$("#acercaDiv").hide();
		$("#orderDiv").hide();
		$("#carritoDiv").hide();
		$("#registerForm").hide();
	});
	//Si le pica a Contacto
	$("#ulContacto").click(function(){
		$("#catalogoDiv").hide();
		$("#contactoDiv").show();
		$("#acercaDiv").hide();
		$("#loginForm").hide();
		$("#carritoDiv").hide();
		$("#orderDiv").hide();
		$("#registerForm").hide();
	});
	$("#ulAcerca").click(function(){
		$("#catalogoDiv").hide();
		$("#contactoDiv").hide();
		$("#loginForm").hide();
		$("#acercaDiv").show();
		$("#carritoDiv").hide();
		$("#orderDiv").hide();
		$("#registerForm").hide();
	});
	$("#ulOrders").click(function(){
		$("#catalogoDiv").hide();
		$("#contactoDiv").hide();
		$("#loginForm").hide();
		$("#acercaDiv").hide();
		$("#carritoDiv").hide();
		$("#orderDiv").show();
		$("#registerForm").hide();

	});
//*******************************************************	
$("#registerButton").click(function(){
	$("#loginForm").hide();
	$("#catalogoDiv").hide();
	$("#contactoDiv").hide();
	$("#acercaDiv").hide();
	$("#carritoDiv").hide();
	$("#registerForm").show();
			//Abrir y cerrar divs
			$("#registerButtonDiv").on("click", function(){
				console.log("pico");
				var jsonObject = {
					"action" : "REGISTER",
					"username" : $("#user").val(),
					"userPassword" : $("#pass").val(),
					"userFirstName" : $("#first").val(),
					"userLastName" : $("#last").val(),
					"userEmail" : $("#ema").val()
				};
				$.ajax({
					type: "POST",
					url: "data/applicationLayer.php",
					data : jsonObject,
					dataType : "json",
					contentType : "application/x-www-form-urlencoded",
					success: function(jsonData) {
						alert("Registered");   
					},
					error: function(errorMsg){
						alert(errorMsg.statusText);
					}
				});
			});
	});// Cierra funcion de registrar
//*******************************************************	
$("#loginButton").click(function(){
	$("#loginForm").show();
	$("#catalogoDiv").hide();
	$("#contactoDiv").hide();
	$("#acercaDiv").hide();
	$("#carritoDiv").hide();
	$("#registerForm").hide();
	$("#loginphpButton").on("click",function(){
//Crear variable de json
var jsonData={
	"action" : "LOGIN",
	"username" : $("#usar").val(),
	"password" : $("#puss").val(),
	"cookie" : $("#remember").is(":checked")
};
//*******************************************************
//Mandar datos, tomando en cuenta cookie siendo true
if(($("#remember").is(':checked'))==true){
	$.ajax({
		type:"POST",
		url:"data/applicationLayer.php",
		data:jsonData,
		dataType:"json",
		contentType:"application/x-www-form-urlencoded",
		success: function(jsonResponse){
			alert("Welcome");
			document.location.reload(true);
			
					//Alerta de welcome
					//Poner true una variable que se creo la cookie
				}, error: function(errorMsg){
					alert(errorMsg.statusText);
					//Alerta no se pudo conectar ( Wrong Credentials )
				}
			}); 
} else{
//Manda datos pero con cookie siendo falsa		
var jsonDatas={
	"action" : "LOGIN",
	"username" : $("#usar").val(),
	"password" : $("#puss").val(),
	"cookie" : $("#remember").is(":checked")
};
$.ajax({
	type:"POST",
	url:"data/applicationLayer.php",
	data:jsonDatas,
	dataType:"json",
	contentType:"application/x-www-form-urlencoded",
	success: function(jsonResponse){
		alert("Welcome");
		document.location.reload(true);
		
					//Alerta de welcome
					//Poner false una variable que no se creo la cookie
				}, error: function(errorMsg){
					alert(errorMsg.statusText);
				}
			}); 
}
console.log($_COOKIE);
   	});//cierra on click
}); // cierra login
//*******************************************************
$("#logoutButton").click(function(){
	$("#loginForm").hide();
	$("#catalogoDiv").show();
	$("#contactoDiv").hide();
	$("#acercaDiv").hide();
	$("#carritoDiv").hide();
	$("#registerForm").hide();
	var jsonData={
		"action" : "LOGOUT"
	}
	$.ajax({
		type:"POST",
		url:"data/applicationLayer.php",
		data:jsonData,
		dataType:"json",
		contentType:"application/x-www-form-urlencoded",
		success: function(jsonResponse){
			alert("Goodbye");
					//Alerta de welcome
					//Poner false una variable que no se creo la cookie
				}, error: function(errorMsg){
					alert(errorMsg.statusText);
				}
			}); 
	document.location.reload(true);
});
//*******************************************************
$("#cartButton").click(function(){
	$("#loginForm").hide();
	$("#catalogoDiv").hide();
	$("#contactoDiv").hide();
	$("#acercaDiv").hide();
	$("#carritoDiv").show();
	$("#registerForm").hide();
});

});
