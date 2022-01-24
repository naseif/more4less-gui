"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var AppBase_1 = require("./structure/AppBase");
var app_base = new AppBase_1.AppBaseT();
if (require("electron-squirrel-startup")) {
    // eslint-disable-line global-require
    electron_1.app.quit();
}
var mainWindow;
var createWindow = function () {
    mainWindow = new electron_1.BrowserWindow({
        height: 1080,
        width: 1920,
        webPreferences: {
            preload: path.join(__dirname, "../dist/preload.js"),
            nodeIntegration: true,
            webSecurity: false,
            contextIsolation: true
        }
    });
    mainWindow.loadFile(path.join(__dirname, "../src/index.html"));
    // mainWindow.webContents.openDevTools();
};
// Some APIs can only be used after this event occurs.
electron_1.app.on("ready", function () {
    createWindow();
});
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
//# sourceMappingURL=index.js.map