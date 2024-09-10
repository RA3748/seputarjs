
//VARIABEL RK
let toggleRK = document.getElementById("toggleRK")

let toggle1 = document.getElementById("toggle1")
let toggle2 = document.getElementById("toggle2")
let toggle3 = document.getElementById("toggle3")

let lampu1 = document.getElementById("lampu1")
let lampu2 = document.getElementById("lampu2")
let lampu3 = document.getElementById("lampu3")
//VARIABEL RK END

//VARIABEL RM
let lampuRM = document.getElementById("lampuRM")
let toggleRM = document.getElementById("toggleRM")
//VARIABEL RM END

//VARIABEL RTD
let lampuRTD1 = document.getElementById("lampuRTD1")
let lampuRTD2 = document.getElementById("lampuRTD2")
let toggleRTD = document.getElementById("toggleRTD")
let toggleRTD1 = document.getElementById("toggleRTD1")
let toggleRTD2 = document.getElementById("toggleRTD2")

//VARIABEL RT
let lampuRT1 = document.getElementById("lampuRT1")
let lampuRT2 = document.getElementById("lampuRT2")
let lampuRT3 = document.getElementById("lampuRT3")
let lampuRT4 = document.getElementById("lampuRT4")

function saklar(id){

    if(toggle1.checked) {
             lampu1.src = "assets/image/on.gif"
    }else {
            lampu1.src = "assets/image/off.gif"
    }

    if(toggle2.checked) {
             lampu2.src = "assets/image/on.gif"
    }else {
            lampu2.src = "assets/image/off.gif"
    }

    if(toggle3.checked) {
             lampu3.src = "assets/image/on.gif"
    }else {
            lampu3.src = "assets/image/off.gif"
    }

    if(toggleRTD1.checked) {
             lampuRTD1.src = "assets/image/on.gif"
    }else {
            lampuRTD1.src = "assets/image/off.gif"
    }
    if(toggleRTD2.checked) {
             lampuRTD2.src = "assets/image/on.gif"
    }else {
            lampuRTD2.src = "assets/image/off.gif"
    }

    if(toggleRT1.checked) {
        lampuRT1.src = "assets/image/on.gif"
    }else {
        lampuRT1.src = "assets/image/off.gif"
    }

    if(toggleRT2.checked) {
            lampuRT2.src = "assets/image/on.gif"
    }else {
        lampuRT2.src = "assets/image/off.gif"
    }

    if(toggleRT3.checked) {
            lampuRT3.src = "assets/image/on.gif"
    }else {
        lampuRT3.src = "assets/image/off.gif"
    }
    if(toggleRT4.checked) {
            lampuRT4.src = "assets/image/on.gif"
    }else {
        lampuRT4.src = "assets/image/off.gif"
    }


}

function saklarRK() {

    if(toggleRK.checked) {
        lampu1.src = "assets/image/on.gif"
        lampu2.src = "assets/image/on.gif"
        lampu3.src = "assets/image/on.gif"
    } else {
       lampu1.src = "assets/image/off.gif"
       lampu2.src = "assets/image/off.gif"
       lampu3.src = "assets/image/off.gif"
    }
}

function saklarRTD() {

    if(toggleRTD.checked) {
        lampuRTD1.src = "assets/image/on.gif"
        lampuRTD2.src = "assets/image/on.gif"
    } else {
       lampuRTD1.src = "assets/image/off.gif"
       lampuRTD2.src = "assets/image/off.gif"

    }
}   

function saklarRM() {
    if(toggleRM.checked) {
        lampuRM.src = "assets/image/on.gif"
    }else {
        lampuRM.src = "assets/image/off.gif"
    }
}

function saklarRT(){
    if(toggleRT.checked) {
        lampuRT1.src = "assets/image/on.gif"
        lampuRT2.src = "assets/image/on.gif"
        lampuRT3.src = "assets/image/on.gif"
        lampuRT4.src = "assets/image/on.gif"
    }else {
        lampuRT1.src = "assets/image/off.gif"
        lampuRT2.src = "assets/image/off.gif"
        lampuRT3.src = "assets/image/off.gif"
        lampuRT4.src = "assets/image/off.gif"
    }
}