let buttonLogin = document.getElementById("buttonLogin");
let buttonLogout = document.getElementById("buttonLogout");
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");

let admin = document.getElementById("admin");
let basic = document.getElementById("basic");

admin.style.display = "none";
basic.style.display = "none";
buttonLogout.style.display = "none";

function onLogin(){
    localStorage.setItem("username", usernameInput.value)
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    buttonLogin.style.display = "none";
    buttonLogout.style.display = "block";

    if(usernameInput.value == "admin" && passwordInput.value == "admin123") {
        admin.style.display = "block";
        basic.style.display = "none";
        localStorage.setItem("role", "admin")
    }else {
        localStorage.setItem("role", "basic")
        basic.style.display = "block";
        admin.style.display = "none";
    }
}

if(localStorage.getItem("username")) {
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    buttonLogin.style.display = "none";
    buttonLogout.style.display = "block";
    if(localStorage.getItem("role") == "admin"){
        admin.style.display = "block";
        basic.style.display = "none";
    }else {
        basic.style.display = "block";
        admin.style.display = "none";
    }
}

function onLogout() {
    localStorage.clear();
    location.reload();
}