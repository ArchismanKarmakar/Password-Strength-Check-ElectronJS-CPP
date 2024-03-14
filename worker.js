// A web worker is a JavaScript running in the background, without affecting the performance of the page.
// Address of native addon
const {passStrengthChk} = require('./backend/build/Release/passStrengthChk.node');

// Calling functions of native addon
var result = passStrengthChk("gfg@123","void");

// Communicating with main process of Electron App
postMessage(result);