'use strict';

var clipboard = require('clipboard');
var ColorAppDispatcher = require('../dispatcher/ColorAppDispatcher');
var ColorAppConstants = require('../constants/ColorAppConstants');

var ActionTypes = ColorAppConstants.ActionTypes;

module.exports = {
  getColorFromClipboard: () => {
    var copied = clipboard.readText();
    var ColorAppUtils = require('../utils/ColorAppUtils');
    var kaizenColor = ColorAppUtils.findKaizenColors(copied);

    ColorAppDispatcher.dispatch({
      type: ActionTypes.GET_COLOR_FROM_CLIPBOARD,
      color: {name: kaizenColor.name, hex: kaizenColor.hex}
    });
  }
};
