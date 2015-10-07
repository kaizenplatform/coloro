'use strict';

var clipboard = require('clipboard');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var ActionTypes = AppConstants.ActionTypes;

module.exports = {
  getColorFromClipboard: function() {
    var copied = clipboard.readText();
    var AppUtils = require('../utils/AppUtils');
    var kaizenColor = AppUtils.findKaizenColors(copied);

    AppDispatcher.dispatch({
      type: ActionTypes.GET_COLOR_FROM_CLIPBOARD,
      color: {name: kaizenColor.name, hex: kaizenColor.hex}
    });
  }
};
