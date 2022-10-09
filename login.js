window.onload = loginLoad;

function loginLoad(){
	alert("welcome to login page");
	var loginForm = document.getElementById("myLoginID");
	loginForm.onsubmit = checkLogin;


}

function checkLogin(){
	const queryString = window.location.search;
	const urlParam = new URLSearchParams(queryString);

	const registerUserName = urlParam.get('username');
	const registerPassword = urlParam.get('password')

	var loginUserName = document.forms["myLoginID"]["username"].value;
	var loginPassword = document.forms["myLoginID"]["password"].value;


	if(registerUserName == loginUserName){
		if(registerPassword == loginPassword){
			alert("complete");
		}
		else{
			document.getElementById("errorMsg").innerHTML = "wrong password pls try again";
			return false
		}
	}
	else{
		document.getElementById("errorMsg").innerHTML = "username not found"
		return false;
	}
}


			