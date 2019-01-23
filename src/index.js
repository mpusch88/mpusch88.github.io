const electron = require('electron');
const isDev = require('electron-is-dev');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
	mainWindow = new BrowserWindow({ icon: __dirname + '/build/resources/Logo.ico', show: false });

	if (isDev) {
		mainWindow.loadURL(`file://${__dirname}/index.html`);
	} else {
		mainWindow.loadURL(`file://${__dirname}/production.html`);
	}

	mainWindow.webContents.openDevTools();
	mainWindow.setMenuBarVisibility(false);
	mainWindow.setTitle('Goodlawyer Desktop');
	mainWindow.maximize();

	mainWindow.once('ready-to-show', () => {
		mainWindow.show();
	});
});

app.on('window-all-closed', () => {
	if (process.platform != 'darwin')
		app.quit();
});
