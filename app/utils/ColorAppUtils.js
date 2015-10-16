'use strict';

var ColorActionCreators = require('../actions/ColorActionCreators');
var kaizenColors = require('kaizen-ui-colors');

module.exports = {
  watchClipboard: (delay = 1000) => {
    window.setInterval(() => {
      ColorActionCreators.getColorFromClipboard();
    }, delay);
  },

  findKaizenColors: (key) => {
    var varName, hexCode;
    key = key.toLowerCase()

    if (key.match(/^#?[0-9A-F]{6}$/i)) {
      hexCode = key;
      if (!key.match(/^#/)) {
        hexCode = '#' + key;
      }
    } else {
      varName = key;
      if (key.match(/^\$([\w-]+)/)) {
        varName = RegExp.$1;
      }
      if (!varName.match(/^color-/)) {
        varName = 'color-' + varName;
      }
    }

    if (kaizenColors.hexToName[hexCode] != undefined) {
      varName = kaizenColors.hexToName[hexCode];
    } else if (kaizenColors.nameToHex[varName] != undefined) {
      hexCode = kaizenColors.nameToHex[varName];
    } else {
      varName = hexCode = undefined;
    }

    return {name: varName, hex: hexCode}
  }
}
