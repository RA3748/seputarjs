let buttonLogin = document.getElementById("buttonLogin");
let formLogin = document.getElementById("formLogin");
let formDaftar = document.getElementById("formDaftar");


let buttonDaftar = document.getElementById("buttonDaftar");
let usernameDaftarInput = document.getElementById("usernameDaftarInput");
let passwordDaftarInput = document.getElementById("passwordDaftarInput");

let usernameInputField = document.getElementById("usernameInput");
let passwordInputField = document.getElementById("passwordInput");

let acceptReg = document.getElementById("acceptReg");
let textLogin = document.getElementById("textLogin");
let textDaftar = document.getElementById("textDaftar");

let buttonLogout = document.getElementById("buttonLogout");

buttonLogout.style.display = "none";
acceptReg.style.display = "block";
formLogin.style.display = "none";

function onDaftar(){
    let username = usernameDaftarInput.value;
    let password = passwordDaftarInput.value;

    let existingData = localStorage.getItem("daftarPengguna");

    existingData = existingData ? JSON.parse(existingData) : [];

    existingData.push({ username: username, password: password });

    localStorage.setItem("daftarPengguna", JSON.stringify(existingData));

    alert("Pendaftaran berhasil!!")
    formDaftar.style.display = "none"
    formLogin.style.display = "block"

}


function showLogin() {
    formLogin.style.display = "block";
    formDaftar.style.display = "none";
}
function showDaftar() {
    formDaftar.style.display = "block";
    formLogin.style.display = "none";
    
}

textLogin.addEventListener("click", showLogin);
textDaftar.addEventListener("click", showDaftar);

function showAdminDashboard(){

}


function onLogin() {

    buttonLogout.style.display = "block";
    let usernameInput = usernameInputField.value;
    let passwordInput = passwordInputField.value;

    let storedData = localStorage.getItem("daftarPengguna");

    if (storedData) {
        let pengguna = JSON.parse(storedData);

        let userDitemukan = pengguna.find(function(user) {
            return user.username === usernameInput && user.password === passwordInput;
        });

        if (userDitemukan) {
            formLogin.style.display = "none";
            localStorage.setItem("currentUser", usernameInput);
        } else {
            alert("Username atau password salah.");
        }
        if(localStorage.setItem("currentUser") == "admin") {
            showAdminDashboard()
        }
        if(localStorage.setItem("currentUser") == "penjual") {
            showPenjualDashboard()
        } else {
            showUserDashBoard()
        }
    } else {
        alert("Tidak ada data pengguna terdaftar.");
    }
}

if(localStorage.getItem("daftarPengguna")) {
    formDaftar.style.display = "none";
    formLogin.style.display = "block";
}

if(localStorage.getItem("currentUser")) {
    buttonLogout.style.display = "block"
    formDaftar.style.display = "none";
    formLogin.style.display = "none";
}

function onLogout() {
    localStorage.removeItem("currentUser");
    location.reload();
}

