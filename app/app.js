'use strict';

var React = require('react');
var ColorApp = require('./components/ColorApp');
var ColorAppUtils = require('./utils/ColorAppUtils');

ColorAppUtils.watchClipboard();

React.render(
  React.createElement(ColorApp),
  document.getElementById('react-root')
);
