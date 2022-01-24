import { app, BrowserWindow } from "electron";
import * as path from "path";

if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

let mainWindow: BrowserWindow;
const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    height: 1080,
    width: 1920,
    webPreferences: {
      preload: path.join(__dirname, "../dist/preload.js"),
      nodeIntegration: true,
      webSecurity: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "../src/index.html"));
  // mainWindow.webContents.openDevTools();
};

// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
