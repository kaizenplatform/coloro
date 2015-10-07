'use strict';

var React = require('react');
var App = require('./components/App');
var AppUtils = require('./utils/AppUtils');

AppUtils.watchClipboard();

React.render(
  React.createElement(App),
  document.body
);
