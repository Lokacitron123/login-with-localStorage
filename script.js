//Account info

let secretCode = "12345";
let userName = "fredrik";

// Variabler
const logoContainer = document.querySelector(".logo-container h1");
const inputItem = document.querySelector(".input-item");
const inputUser = document.querySelector(".inputUser");
const inputPassword = document.querySelector(".inputPassword");
 
const loginBtn = document.querySelector(".loginBtn");
const logoutBtn = document.querySelector(".logoutBtn");

// Eventlisteners

loginBtn.addEventListener("click", checkCode);
logoutBtn.addEventListener("click", logout);

// Function to check if the userName and secretCode are correct

function inIt () {
    if (localStorage.getItem("userName")) {
        rendersuccesfulUI();
    }
};

inIt();

function checkCode(){
    if (inputUser.value === userName && inputPassword.value === secretCode) {
        localStorage.setItem("userName", userName)
        rendersuccesfulUI();
    } else {
        renderFailUI();
    }
}

// Sucessful login

function rendersuccesfulUI() {
    inputUser.style.display = "none";
    inputPassword.style.display ="none";
    loginBtn.style.display ="none";
    logoutBtn.style.display = "inline-block";
    logoContainer.innerText = "Welcome Fredrik, the login was sucessful!";
    input.value = "";
}

// Unsucessful login

function renderFailUI() {
    logoContainer.innerText = "Wrong code, try again!";
    input.value = "";
}

// Logout function

function logout() {
    localStorage.clear();
    inputUser.style.display = "inline";
    inputPassword.style.display ="inline";
    loginBtn.style.display = "inline";
    logoutBtn.style.display = "none";
    logoContainer.innerText = "Hejsan, logga in så ändras jag";
    input.value = "";
}