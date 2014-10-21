"use strict";
function validateLogin(){
	var username = "testuser";
	var password = "test12";
	var isloginSuccess = false;
	var inUserName = document.getElementById("uName").value;
	var inPwd = document.getElementById("pWord").value;
	if(inUserName.length == 0 || inPwd.length==0){
		alert("Username / Password can't be empty!");
	} else if(inUserName.length > 8){
		alert("Username must contain maximum of 8 characters.");
	} else if (inPwd.length < 6){
		alert("Password must contain minimum of 6 characters.");
	} else {
		if(username === inUserName && password === inPwd) {
			isloginSuccess = true;
		} else {
			alert("Invalid Username/Password!");
		}
	}
	
	if (!isloginSuccess) {
		document.getElementById("uName").value = "";
		document.getElementById("pWord").value = "";
	}
	return isloginSuccess;
}