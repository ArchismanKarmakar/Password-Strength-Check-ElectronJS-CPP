const path = require('node:path')
// const {passStrengthCheck} = require("./built/Password-Strength-Checker.node");
// const {passStrengthCheck} = require("../../backend/build/Release/Password-Strength-Checker-CPP-Addon-Node.node");
// const {passStrengthCheck} = require("./backend/build/Release/Password-Strength-Checker-CPP-Addon-Node.node");



function strength() {
    var entr = document.getElementById("entropy").innerHTML;
    var progressBarParent = document.getElementById("progress-parent");
    var progressBar = document.getElementById("progress-percent-set");
    if (parseFloat(entr) > 120) {
        progressBarParent.setAttribute("aria-valuenow", 80);
        progressBar.style.width = 80 + '%';
        progressBar.classList.remove('bg-danger');
        progressBar.classList.add('bg-info');
    } else if (parseFloat(entr) > 150) {
        progressBarParent.setAttribute("aria-valuenow", 100);
        progressBar.style.width = 100 + '%';
        progressBar.classList.remove('bg-info');
        progressBar.classList.add('bg-success');
    }
    // var strength = passStrengthCheck(pass);
    // progressBar.setAttribute("style", "width: 100%;");
}

// TO BE IMPLEMENTED LATER

// function logChangeTime(){
//     let gps = document.getElementById('timetocrack').value;
//     let entr = document.getElementById('entropy').innerHTML;
//     let timecrck = document.getElementById('time-to-crack');
//     if(gps.length === 0 || entr.length === 0){
//         timecrck.innerText = "0 seconds";
//     }
//     else{
//         let numEntr = parseFloat(entr);
//         // console.log(entr);
//         // console.log(gps);
//         let ttc = 2;
//         let ttc1 = ttc.toExponential(120);
//         let ttc2 = ttc1 / gps;
//         console.log(ttc);
//         console.log(ttc2);
//         timecrck.innerText = ttc2;
//     }
// }

function logChange() {
    var pass = document.getElementById("primary-password").value;
    var length = pass.length;
    // let entropy = passStrengthCheck(pass, "void");
    // console.log(entropy);
    document.getElementById("total-characters").innerText = length;
    var lwcase = 0, upcase = 0, num = 0, special = 0;
    for (let i = 0; i < length; i++) {
        let ascii = pass.charCodeAt(i);
        if (ascii >= 97 && ascii <= 122) {
            lwcase++;
        } else if (ascii >= 65 && ascii <= 90) {
            upcase++;
        } else if (ascii >= 48 && ascii <= 57) {
            num++;
        } else {
            special++;
        }
    }
    if (lwcase > 0) {
        document.getElementById("lwtxt").style.color = "green";
    } else {
        document.getElementById("lwtxt").style.color = "black";
    }
    if (upcase > 0) {
        document.getElementById("uptxt").style.color = "green";
    }
    else {
        document.getElementById("uptxt").style.color = "black";
    }
    if (num > 0) {
        document.getElementById("numstxt").style.color = "green";
    }
    else {
        document.getElementById("numstxt").style.color = "black";
    }
    if (special > 0) {
        document.getElementById("spctxt").style.color = "green";
    }
    else {
        document.getElementById("spctxt").style.color = "black";
    }
    document.getElementById("lw-case").innerText = lwcase;
    document.getElementById("up-case").innerText = upcase;
    document.getElementById("nums").innerText = num;
    document.getElementById("specialchars").innerText = special;
    // strength();

    var entr = document.getElementById("entropy").innerHTML;
    var progressBarParent = document.getElementById("progress-parent");
    var progressBar = document.getElementById("progress-percent-set");

    if (parseFloat(entr) >= 25 && parseFloat(entr) <= 120) {
        let val = (75 / 100) * parseFloat(entr);
        progressBarParent.setAttribute("aria-valuenow", val);
        progressBar.style.width = val + '%';
        if (val < 25) {
            progressBar.classList.remove('bg-warning', 'bg-info', 'bg-success');
            progressBar.classList.add('bg-danger');
        }
        if (val >= 25 && val < 50) {
            progressBar.classList.remove('bg-danger', 'bg-info', 'bg-success');
            progressBar.classList.add('bg-warning');
        }
        if (val >= 50) {
            progressBar.classList.remove('bg-danger', 'bg-warning', 'bg-success');
            progressBar.classList.add('bg-info');
        }
    }

    if (parseFloat(entr) < 25) {
        progressBarParent.setAttribute("aria-valuenow", 2);
        progressBar.style.width = 2 + '%';
        progressBar.classList.remove('bg-warning', 'bg-info', 'bg-success');
        progressBar.classList.add('bg-danger');
    }
    // if (parseFloat(entr) > 35) {
    //     progressBarParent.setAttribute("aria-valuenow", 20);
    //     progressBar.style.width = 25 + '%';
    //     progressBar.classList.remove('bg-warning', 'bg-info', 'bg-success');
    //     progressBar.classList.add('bg-danger');
    // }
    // if (parseFloat(entr) > 50) {
    //     progressBarParent.setAttribute("aria-valuenow", 40);
    //     progressBar.style.width = 40 + '%';
    //     progressBar.classList.remove('bg-danger', 'bg-info', 'bg-success');
    //     progressBar.classList.add('bg-warning');
    // }
    // if (parseFloat(entr) > 75) {
    //     progressBarParent.setAttribute("aria-valuenow", 50);
    //     progressBar.style.width = 50 + '%';
    //     progressBar.classList.remove('bg-danger', 'bg-info', 'bg-success');
    //     progressBar.classList.add('bg-warning');
    // }
    // if (parseFloat(entr) > 100) {
    //     progressBarParent.setAttribute("aria-valuenow", 70);
    //     progressBar.style.width = 70 + '%';
    //     progressBar.classList.remove('bg-danger', 'bg-warning', 'bg-success');
    //     progressBar.classList.add('bg-info');
    // }
    // if (parseFloat(entr) > 120) {
    //     progressBarParent.setAttribute("aria-valuenow", 80);
    //     progressBar.style.width = 80 + '%';
    //     progressBar.classList.remove('bg-danger', 'bg-info', 'bg-warning');
    //     progressBar.classList.add('bg-success');
    // }
    if (parseFloat(entr) >= 120 && ((special >= 1 || num >= 1 && upcase >= 1) || (special >= 1 && num >= 1 || upcase >= 1))) {
        progressBarParent.setAttribute("aria-valuenow", 75);
        progressBar.style.width = 90 + '%';
        progressBar.classList.remove('bg-info', 'bg-danger', 'bg-warning');
        progressBar.classList.add('bg-success');
    }
    if (parseFloat(entr) >= 120 && ((special >= 1 || num >= 2) && upcase >= 1) || (special >= 1 && num >= 2 || upcase >= 1)) {
        progressBarParent.setAttribute("aria-valuenow", 80);
        progressBar.style.width = 90 + '%';
        progressBar.classList.remove('bg-info', 'bg-danger', 'bg-warning');
        progressBar.classList.add('bg-success');
    }
    if (parseFloat(entr) >= 130 && (((special >= 1) && (num >= 2 || upcase >= 2)) || (special >= 2 || num >= 2 || upcase >= 2))) {
        progressBarParent.setAttribute("aria-valuenow", 85);
        progressBar.style.width = 90 + '%';
        progressBar.classList.remove('bg-info', 'bg-danger', 'bg-warning');
        progressBar.classList.add('bg-success');
    }
    if (parseFloat(entr) >= 130 && ((special >= 2) && ((num >= 2) || (upcase >= 2))) || ((special >= 2) || (num >= 2) && (upcase >= 2))) {
        progressBarParent.setAttribute("aria-valuenow", 90);
        progressBar.style.width = 90 + '%';
        progressBar.classList.remove('bg-info', 'bg-danger', 'bg-warning');
        progressBar.classList.add('bg-success');
    }
    if (parseFloat(entr) > 140 && special >= 2 && num >= 3 && upcase >= 3) {
        progressBarParent.setAttribute("aria-valuenow", 95);
        progressBar.style.width = 90 + '%';
        progressBar.classList.remove('bg-info', 'bg-danger', 'bg-warning');
        progressBar.classList.add('bg-success');
    }
    if (parseFloat(entr) >= 150 && special >= 3 && num >= 4 && upcase >= 3) {
        progressBarParent.setAttribute("aria-valuenow", 100);
        progressBar.style.width = 100 + '%';
        progressBar.classList.remove('bg-info');
        progressBar.classList.add('bg-success');
    }
}

function passChkBoxToggle() {
    var pwdBtnImg = document.getElementById("show-hide-password-icio");
    var pwdInputTxt = document.getElementById("primary-password");
    if (pwdInputTxt.type === "password") {
        pwdInputTxt.setAttribute("type", "text");
        pwdBtnImg.setAttribute("src", "assets/icon/hide-pwd.png");
    }
    else if (pwdInputTxt.type === "text") {
        pwdInputTxt.setAttribute("type", "password");
        pwdBtnImg.setAttribute("src", "assets/icon/show-pwd.png");

    }
}


async function copyToClipboard() {
    var copyText = document.getElementById("primary-password").value;
    try {
        await navigator.clipboard.writeText(copyText);
        console.log('Content copied to clipboard');
        /* Resolved - text copied to clipboard successfully */
    } catch (err) {
        console.error('Failed to copy: ', err);
        /* Rejected - text failed to copy to the clipboard */
    }
}




// const hasUpperCase = (str) => {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[i].toUpperCase()) {
//             return false;
//         }
//     }
//     return true;
// };