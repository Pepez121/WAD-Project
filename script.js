$(document).ready(function() {
	event.preventDefault();
	var bobbert=false;
	$("#indexDiv").show();
	$("#contactoDiv").hide();
	$("#loginForm").hide();
	$("#acercaDiv").hide();
	$("#catalogoDiv").hide();
	$("#divprodInfo").hide();
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
		event.preventDefault();
		$("#indexDiv").show();
		$("#contactoDiv").hide();
		$("#loginForm").hide();
		$("#acercaDiv").hide();
		$("#orderDiv").hide();
		$("#carritoDiv").hide();
		$("#registerForm").hide();
		$("#catalogoDiv").hide();
		$("#divprodInfo").hide(); 
	});
	$("#ulCatalogo").click(function(){
		event.preventDefault();
		$("#indexDiv").hide();
		$("#contactoDiv").hide();
		$("#loginForm").hide();
		$("#acercaDiv").hide();
		$("#orderDiv").hide();
		$("#carritoDiv").hide();
		$("#registerForm").hide();
		$("#catalogoDiv").show();
		$("#divprodInfo").show();
		var datalist = $("#textar").val();
		$("#updater").click(function(){
			var datalist = $("#textar").val();
			console.log(datalist);
			if(datalist=="Todos"||datalist=="TODOS"||datalist=="todos"){
				event.preventDefault();
				$("#ropa1").show();
				$("#ropa2").show();
				$("#ropa3").show();
				$("#ropa4").show();
				$("#juguete1").show();
				$("#juguete2").show();
				$("#juguete3").show();
				$("#juguete4").show();
				$("#juguete5").show();
				$("#juguete6").show();
				$("#juguete7").show();
				$("#juguete8").show();
				$("#comida1").show();
				$("#comida2").show();
				$("#comida3").show();
				$("#comida4").show();
				$("#comida5").show();
				$("#comida6").show();
				$("#comida7").show();
				$("#comida8").show();				
			}else if(datalist=="Ropa"||datalist=="ROPA"||datalist=="ropa"){
				event.preventDefault();				
				$("#ropa1").show();
				$("#ropa2").show();
				$("#ropa3").show();
				$("#ropa4").show();
				$("#juguete1").hide();
				$("#juguete2").hide();
				$("#juguete3").hide();
				$("#juguete4").hide();
				$("#juguete5").hide();
				$("#juguete6").hide();
				$("#juguete7").hide();
				$("#juguete8").hide();
				$("#comida1").hide();
				$("#comida2").hide();
				$("#comida3").hide();
				$("#comida4").hide();
				$("#comida5").hide();
				$("#comida6").hide();
				$("#comida7").hide();
				$("#comida8").hide();
			}else if(datalist=="Juguetes"||datalist=="JUGUETES"||datalist=="juguetes"){
				event.preventDefault();
				$("#ropa1").hide();
				$("#ropa2").hide();
				$("#ropa3").hide();
				$("#ropa4").hide();
				$("#juguete1").show();
				$("#juguete2").show();
				$("#juguete3").show();
				$("#juguete4").show();
				$("#juguete5").show();
				$("#juguete6").show();
				$("#juguete7").show();
				$("#juguete8").show();
				$("#comida1").hide();
				$("#comida2").hide();
				$("#comida3").hide();
				$("#comida4").hide();
				$("#comida5").hide();
				$("#comida6").hide();
				$("#comida7").hide();
				$("#comida8").hide();
			}else if(datalist=="Comida"||datalist=="COMIDA"||datalist=="comida"){
				event.preventDefault();
				$("#ropa1").hide();
				$("#ropa2").hide();
				$("#ropa3").hide();
				$("#ropa4").hide();
				$("#juguete1").hide();
				$("#juguete2").hide();
				$("#juguete3").hide();
				$("#juguete4").hide();
				$("#juguete5").hide();
				$("#juguete6").hide();
				$("#juguete7").hide();
				$("#juguete8").hide();
				$("#comida1").show();
				$("#comida2").show();
				$("#comida3").show();
				$("#comida4").show();
				$("#comida5").show();
				$("#comida6").show();
				$("#comida7").show();
				$("#comida8").show();
			} else{
				event.preventDefault();
				$("#ropa1").hide();
				$("#ropa2").hide();
				$("#ropa3").hide();
				$("#ropa4").hide();
				$("#juguete1").hide();
				$("#juguete2").hide();
				$("#juguete3").hide();
				$("#juguete4").hide();
				$("#juguete5").hide();
				$("#juguete6").hide();
				$("#juguete7").hide();
				$("#juguete8").hide();
				$("#comida1").hide();
				$("#comida2").hide();
				$("#comida3").hide();
				$("#comida4").hide();
				$("#comida5").hide();
				$("#comida6").hide();
				$("#comida7").hide();
				$("#comida8").hide();
			}
		});
		var boberto=false;
		var bobertor;
		$("#addtoCartr1").click(function(){
			event.preventDefault();
			bobertor=1;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartr2").click(function(){
			event.preventDefault();
			bobertor=2
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartr3").click(function(){
			event.preventDefault();
			bobertor=3;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartr4").click(function(){
			event.preventDefault();
			bobertor=4;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartj1").click(function(){
			event.preventDefault();
			bobertor=5;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartj2").click(function(){
			event.preventDefault();
			bobertor=6;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartj3").click(function(){
			event.preventDefault();
			bobertor=7;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartj4").click(function(){
			event.preventDefault();
			bobertor=8;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartj5").click(function(){
			event.preventDefault();
			bobertor=9;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartj6").click(function(){
			event.preventDefault();
			bobertor=10;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartj7").click(function(){
			event.preventDefault();
			bobertor=11;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartj8").click(function(){
			event.preventDefault();
			bobertor=12;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartc1").click(function(){
			event.preventDefault();
			bobertor=13;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartc2").click(function(){
			event.preventDefault();
			bobertor=14;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartc3").click(function(){
			event.preventDefault();
			bobertor=15;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartc4").click(function(){
			event.preventDefault();
			bobertor=16;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartc5").click(function(){
			event.preventDefault();
			bobertor=17;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartc6").click(function(){
			event.preventDefault();
			bobertor=18;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartc7").click(function(){
			event.preventDefault();
			bobertor=19;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
		$("#addtoCartc8").click(function(){
			event.preventDefault();
			bobertor=20;
			var jsonData={
				"action" : "AGREGAR",
				"valor" : bobertor
			};
			console.log(jsonData);
			$.ajax({
				type: "POST",
				url: "data/applicationLayer.php",
				data : jsonData,
				dataType : "html",
				contentType : "application/x-www-form-urlencoded",
				success: function(response) {
					alertify.success("¡Artículo agregado!");
					//$("#carritoDiv").append()
					$("#textual").append('<p><h2> Producto: '+response+'</h2></p>'); 
				},
				error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); // ajax
		});
	});
	//*******************************************************	
	//Si le pica a Contacto
	$("#ulContacto").click(function(){
		$("#indexDiv").hide();
		$("#catalogoDiv").hide();
		$("#contactoDiv").show();
		$("#acercaDiv").hide();
		$("#loginForm").hide();
		$("#carritoDiv").hide();
		$("#orderDiv").hide();
		$("#registerForm").hide();
		$("#divprodInfo").hide();
	});
	$("#ulAcerca").click(function(){
		$("#indexDiv").hide();
		$("#catalogoDiv").hide();
		$("#contactoDiv").hide();
		$("#loginForm").hide();
		$("#acercaDiv").show();
		$("#carritoDiv").hide();
		$("#orderDiv").hide();
		$("#registerForm").hide();
		$("#divprodInfo").hide();
	});
	$("#ulOrders").click(function(){
		$("#indexDiv").hide();
		$("#catalogoDiv").hide();
		$("#contactoDiv").hide();
		$("#loginForm").hide();
		$("#acercaDiv").hide();
		$("#carritoDiv").hide();
		$("#orderDiv").show();
		$("#registerForm").hide();
		$("#divprodInfo").hide();
		$.ajax({
			type: "GET",
			url: "data/loadOrders.php",
			dataType : "html",
			contentType : "application/x-www-form-urlencoded",
			success: function(response){   
				$("#orderDiv").append(response);
			}
		});
	});
//*******************************************************	
$("#registerButton").click(function(){
	$("#indexDiv").hide();
	$("#loginForm").hide();
	$("#orderDiv").hide();
	$("#catalogoDiv").hide();
	$("#contactoDiv").hide();
	$("#acercaDiv").hide();
	$("#carritoDiv").hide();
	$("#registerForm").show();
	$("#divprodInfo").hide();
			//Abrir y cerrar divs
			$("#registerButtonDiv").on("click", function(){
				console.log("pico");
				var bobbert=false;
				$('#ema').filter(function(){
					var emil=$('#ema').val();
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					if( !emailReg.test( emil ) ) {
						
					} else {
						bobbert=true;
					}
				});
				if($("#user").val()!="" && $("#pass").val()!="" && $("#first").val()!="" && $("#last").val()!="" && bobbert==true && $("#ema").val()!=""){
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
							alertify.success("Registered");   
						},
						error: function(errorMsg){
							alertify.error(errorMsg.statusText);
						}
					}); // ajax
				} else{
					console.log("jaja")
					alertify.alert("Llena todos los campos o checa que el correo esté bien escrito.");
				}
			});
	});// Cierra funcion de registrar
//*******************************************************	
$("#loginButton").click(function(){
	$("#indexDiv").hide();
	$("#loginForm").show();
	$("#catalogoDiv").hide();
	$("#contactoDiv").hide();
	$("#acercaDiv").hide();
	$("#carritoDiv").hide();
	$("#orderDiv").hide();
	$("#registerForm").hide();
	$("#divprodInfo").hide();
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
			console.log("david123");
			alertify.alert("Bienvenido!!");
			document.location.reload(true);
			
					//Alerta de welcome
					//Poner true una variable que se creo la cookie
				}, error: function(errorMsg){
					alertify.error(errorMsg.statusText);
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
		alertify.alert("¡Bienvenido!");
		document.location.reload(true);
		
					//Alerta de welcome
					//Poner false una variable que no se creo la cookie
				}, error: function(errorMsg){
					alertify.error(errorMsg.statusText);
				}
			}); 
}
console.log($_COOKIE);
   	});//cierra on click
}); // cierra login
//*******************************************************
$("#logoutButton").click(function(){
	$("#indexDiv").hide();
	$("#loginForm").hide();
	$("#catalogoDiv").show();
	$("#contactoDiv").hide();
	$("#acercaDiv").hide();
	$("#divprodInfo").hide();
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
			console.log("algo");
			alertify.alert("¡Hasta pronto!");
		}, error: function(errorMsg){
			alertify.error(errorMsg.statusText);
		}
	}); 
	document.location.reload(true);
});
//*******************************************************
$("#cartButton").click(function(){
	event.preventDefault();
	$("#indexDiv").hide();
	$("#loginForm").hide();
	$("#catalogoDiv").hide();
	$("#contactoDiv").hide();
	$("#acercaDiv").hide();
	$("#divprodInfo").hide();
	$("#orderDiv").hide();
	$("#carritoDiv").show();
	$("#registerForm").hide();
	$("#orderino").click(function(){
		event.preventDefault();
		var jsonObject = {
			"action" : "ORDER",
			"texto" : $("#textual").html()
		};
		$.ajax({
			type: "POST",
			url: "data/applicationLayer.php",
			data : jsonObject,
			dataType : "json",
			contentType : "application/x-www-form-urlencoded",
			success: function(jsonData) {
				alertify.success("¡Orden agregada!");          
			},
			error: function(errorMsg){
				alertify.error(rorMsg.statusText);
			}
		});
	});
});

// Mandar email
$('#formContacto').submit(function(e) {
	var name    = document.getElementById("nombreContacto");
	var bobbert=false;
	var email   = document.getElementById("emailContacto");
	var message = document.getElementById("comentarioContacto");
	$('#emailContacto').filter(function(){
		var emil=$('#emailContacto').val();
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if( !emailReg.test( emailContacto ) ) {
		} else {
			bobbert=true;
		}
	});

	if (!name.value || !email.value || !message.value || bobbert==true) {
		alertify.error("Por favor llena todos los campos o checa el email.");
		return false;
	} else {
		$.ajax({
			method: 'POST',
			url: '//formspree.io/david324567@gmail.com',
			data: $('#formContacto').serialize(),
			datatype: 'json'
		});
		e.preventDefault();
		$(this).get(0).reset();
		alertify.success("Gracias por tus comentarios.");
	} 
	

});
});
