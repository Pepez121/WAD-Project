$("#commentForm").validate({ // call the validate method

rules:{ // rules object that we pass as a property to the method
			username:"required",
			email: {required:true, email:true},
			password:{ required:true, minlength:5},
			confirmPassword:{required:true, minlength:5, equalTo: "#password"}
		},
		messages:{
			username:"Please enter your name",
			password:{required:"Please provide a password", minlength:"Your password must have 5 letters"},
			confirmPassword:{required:"Please provide a password", minlength:"Your password must have 5 letters", equalTo:"Please enter the same password"}

		}
	}); 