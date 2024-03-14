const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')
const {passStrengthCheck} = require("./backend/build/Release/passStrengthChk.node");

function createWindow() {
    const win = new BrowserWindow({
        width: 1600,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            contextIsolation: false,
        },
        icon: path.join(__dirname, '/assets/icon/password.png'),
    })
    win.loadFile('index.html')
    const {ipcMain} = require('electron')

    ipcMain.on('asynchronous-message', (event, arg) => {

      event.sender.send('asynchronous-reply', arg);
  
      });
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

// function createWindow () {
//     // Create the browser window.
//     const mainWindow = new BrowserWindow({
//       width: 800,
//       height: 600,
//       webPreferences: {
//         preload: path.join(__dirname, 'preload.js'),
//         nodeIntegration: true, // enable node processes in electron app
//         nodeIntegrationInWorker: true, // enable node processes in web workers
//         contextIsolation: false // separate context btw internal logic and website in webContents (make 'require' work)
//       }
//     })
  
//     // and load the index.html of the app.
//     mainWindow.loadFile('index.html')

//     mainWindow.webContents.openDevTools()
  
//     const {ipcMain} = require('electron')

//     ipcMain.on('asynchronous-message', (event, arg) => {

//       event.sender.send('asynchronous-reply', arg);
  
//       });
//   }
//   app.whenReady().then(() => {
//     createWindow()
    
//     app.on('activate', function () {
//       if (BrowserWindow.getAllWindows().length === 0) createWindow()
//     })
//   })
  
//   app.on('window-all-closed', function () {
//     if (process.platform !== 'darwin') app.quit()
//   })

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})