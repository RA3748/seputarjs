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

acceptReg.style.display = "block";
formLogin.style.display = "none";

// Fungsi untuk pendaftaran
function onDaftar() {
    let username = usernameDaftarInput.value;
    let password = passwordDaftarInput.value;

    let existingData = localStorage.getItem("daftarPengguna");

    existingData = existingData ? JSON.parse(existingData) : [];

    existingData.push({ username: username, password: password });

    localStorage.setItem("daftarPengguna", JSON.stringify(existingData));

    alert("Pendaftaran berhasil!");
}

// Fungsi untuk menampilkan form login
function showLogin() {
    formLogin.style.display = "block";
    formDaftar.style.display = "none";
}

// Fungsi untuk menampilkan form daftar
function showDaftar() {
    formDaftar.style.display = "block";
    formLogin.style.display = "none";
}

// Event listener untuk mengganti tampilan antara login dan daftar
textLogin.addEventListener("click", showLogin);
textDaftar.addEventListener("click", showDaftar);

// Fungsi untuk login
function onLogin() {
    // Ambil nilai username dan password dari input field
    let usernameInput = usernameInputField.value;
    let passwordInput = passwordInputField.value;

    // Ambil data yang sudah disimpan di localStorage
    let storedData = localStorage.getItem("daftarPengguna");

    // Jika data ada, parse menjadi array of objects
    if (storedData) {
        let pengguna = JSON.parse(storedData);

        // Cari apakah ada pengguna dengan username dan password yang cocok
        let userDitemukan = pengguna.find(function(user) {
            return user.username === usernameInput && user.password === passwordInput;
        });

        // Jika ditemukan, login berhasil
        if (userDitemukan) {
            alert("Login berhasil!");
            formLogin.style.display = "none";
            // Simpan status login
            localStorage.setItem("currentUser", usernameInput);
        } else {
            alert("Username atau password salah.");
        }
    } else {
        alert("Tidak ada data pengguna terdaftar.");
    }
}

// Fungsi untuk logout
function onLogout() {
    localStorage.clear();
    location.reload();
}
