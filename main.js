'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

var windowConfig = {
  width: 300,
  height: 38,
  frame: false,
  resizable: false,
  "always-on-top": true
}

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow(windowConfig);
  mainWindow.loadUrl('file://' + __dirname + '/app/app.html');
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
