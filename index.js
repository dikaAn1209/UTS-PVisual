const electron = require('electron')
const {
    app,
    BrowserWindow,
    ipcMain
} = electron;

let mainWindow;

app.allowRendererProcessReuse = false;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: 'Konversi Suhu 1.0'
    });

    mainWindow.loadURL(`file://${__dirname}/index.html`);
    mainWindow.on("closed", () => {
        app.quit();
        mainWindow = null;
    });
})
