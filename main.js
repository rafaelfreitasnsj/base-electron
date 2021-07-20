const { app, BrowserWindow, ipcMain }  = require('electron');

app.on('ready', () => {
    console.log('Aplicacão iniciada');
    let mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`);

});

app.on('window-all-closed', () => {
    app.quit();
});
