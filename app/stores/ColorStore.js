'use strict';

var ColorAppDispatcher = require('../dispatcher/ColorAppDispatcher');
var ColorAppConstants = require('../constants/ColorAppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = ColorAppConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _color = {
  name: null,
  hex: null
};

var ColorStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.off(CHANGE_EVENT, callback);
  },

  getColor: function() {
    return _color;
  },

});

ColorStore.dispatchToken = ColorAppDispatcher.register(function (action) {
  switch (action.type) {
    case ActionTypes.GET_COLOR_FROM_CLIPBOARD:
      _color = action.color;
      ColorStore.emitChange();
      break;
  }
});

module.exports = ColorStore;
