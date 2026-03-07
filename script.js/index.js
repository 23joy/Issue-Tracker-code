document.getElementById("login-btn").addEventListener("click",function(){
    const usernameInput=document.getElementById("Username-input")
    const  User=usernameInput.value
    

    const passwordInput=document.getElementById("password-input")
    const password=passwordInput.value
   
    if(User=='admin'&&password=='admin123'){
        window.location.assign("/main.html")
    }
    else{
        alert("sorry");
        return;
    }
});