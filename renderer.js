// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

// Example 1 - IPC
// const pwdInputTxt = document.getElementById('primary-password')
// pwdInputTxt.addEventListener("input", calcEntr); 

window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('primary-password');
    if (el) {
      el.addEventListener('input', calcEntr);
    }
});

window.onload = (event) => {
    const pwdInputTxt = document.getElementById('primary-password')
pwdInputTxt.addEventListener("input", calcEntr); 
};

function calcEntr(){
   
  let input1 = document.getElementById("primary-password").value;
  let input2 = document.getElementById("entropy");
  let input3 = "void";

  const {ipcRenderer} = require('electron')

  // send username to main.js 
  ipcRenderer.send('asynchronous-message', { 'input1':input1, 'input2':input3} );

  // receive message from main.js
  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    // Address of native addon
    const {passStrengthChk} = require('./backend/build/Release/passStrengthChk.node');

    // Calling functions of native addon
    let result = passStrengthChk((arg['input1']),(arg['input2']));
    console.log(result);
    document.getElementById('entropy').innerText = result;
  })

  };

// Example 2 - Worker JS
// calls worker.js script inside a web worker
// var worker = new Worker('./worker.js')

// // receive any message from web worker
// worker.onmessage = function(event) {
//     // Print result on console and <h1> tag
//     console.log("Worker : ", event.data);
//     document.getElementById('tag_result').innerHTML = 
//         "C++ Native addon add() result (Worker): " + event.data;

//         // Terminate WebWorker
//         worker.terminate();

//         // Set it to undefined
//         worker = undefined;
// };

// // catches any error from web worker
// worker.onerror = function (event) {
//     console.log(event.message, event);
// };