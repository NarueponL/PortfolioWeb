window.onload = pageLoad;

function pageLoad(){
    alert("hello")
	var form = document.getElementById("registerFormID");
    form.onsubmit = validateForm;
}

function validateForm(){
    var PassWord = document.forms["registerFormID"]["password"].value ;
    var RetypePassWord = document.forms["registerFormID"]["retypePassword"].value;
if(PassWord != RetypePassWord){        
        document.getElementById("errormsg").innerHTML = "incorrect password";
        return false;
    }
    else{
        alert("you can login now");
    }
    
}







