'use strict';

var ColorActionCreators = require('../actions/ColorActionCreators');
var kaizenColors = require('kaizen-ui-colors');

console.log(kaizenColors);
module.exports = {
  watchClipboard: function(delay = 1000) {
    window.setInterval(function() {
      ColorActionCreators.getColorFromClipboard();
    }, delay);
  },

  findKaizenColors: function(key) {
    var varName, hexCode;

    if (key.match(/^#?[\w\d]{6}$/)) {
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
