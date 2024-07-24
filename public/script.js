let login = document.getElementById("login");
let signup = document.getElementById("signup");
let profile = document.getElementById('profile');
let profileLogo = document.getElementById('profileLogo');
let walletSwitch = document.getElementById('wallet-switch');
let bankSwitch = document.getElementById('bank-switch');
let wallet = document.getElementById('wallet-transfer-container');
let bank = document.getElementById('bank-transfer-container');

// Reseting the browser storage value
let proceedFromHomeButtonOnly = false;
sessionStorage.setItem('proceedFromHomeButtonOnly', proceedFromHomeButtonOnly);

let faceVerified = false;
sessionStorage.setItem('faceVerified', faceVerified);

let payFromFacePageOnly = false;
sessionStorage.setItem('payFromFacePageOnly', payFromFacePageOnly);



const mob = document.getElementById('mob');
// const submit = document.getElementById('home-next-btn');


function isEmptyOrSpaces(str) {
    return str == null || str.match(/^ *$/) != null;
}



function validation() {
    if (isEmptyOrSpaces(mob.value)) {
        Swal.fire("", "You cannot leave any field empty!", "warning");
        return false;
    }
    return true;
}





const clickHomeNextBtn = () => {
    if (!validation()) {
        swal("", "sdgsdgsdfhgsmpty!", "warning");
        return;
    };

    proceedFromHomeButtonOnly = true;
    sessionStorage.setItem('proceedFromHomeButtonOnly', proceedFromHomeButtonOnly);
    window.location.href = './src/face-verification.html';
}

const clickLogoImg = () => {
    window.location.href = './index.html';
}
 
login.onclick = () => {
    window.location.href = './src/login.html';
}

signup.onclick = () => {
    window.location.href = './src/signup.html';
}

profile.onclick = () => {
    window.location.href = './src/profile.html';
}

// Switching of wallet and bank section
walletSwitch.onclick = () => {
    wallet.classList.replace('hide', 'unhide');
    bank.classList.replace('unhide', 'hide');
}

bankSwitch.onclick = () => {
    wallet.classList.replace('unhide', 'hide');
    bank.classList.replace('hide', 'unhide');
}

// Setting the profile picture based on user login or not
let currentUser = null;
let keepLoggedIn = localStorage.getItem("keepLoggedIn"); 
function getUserName() {
    if (keepLoggedIn == "yes") {
        currentUser = JSON.parse(localStorage.getItem('user'));
    } else {
        currentUser = JSON.parse(sessionStorage.getItem('user'));
    }
}
getUserName();
if (currentUser && currentUser.profileImgURL != "null") {
    let photoURL = currentUser.profileImgURL;
    profileLogo.setAttribute('src', photoURL);
} else {
    profileLogo.setAttribute('src', "./images/profileM.jpg");
}

document.addEventListener('DOMContentLoaded', (event) => {
    const spans = document.querySelectorAll('.transaction-type span');

    spans.forEach(span => {
        span.addEventListener('click', () => {
            // Remove the 'selected' class from all spans
            spans.forEach(s => s.classList.remove('selected'));
            
            // Add the 'selected' class to the clicked span
            span.classList.add('selected');
        });
    });
});