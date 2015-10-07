'use strict';

var remote = require('remote');
var React = require('react');
var ColorName = require('./ColorName');
var ColorHexCode = require('./ColorHexCode');
var ColorBox = require('./ColorBox');
var Placeholder = require('./Placeholder');
var ColorStore = require('../stores/ColorStore');
var ColorActionCreators = require('../actions/ColorActionCreators.js');

var App = React.createClass({

  getInitialState: function() {
    return ColorStore.getColor();
  },

  componentDidMount: function() {
    ColorStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ColorStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(ColorStore.getColor());
  },

  render: function() {
    var components;
    if (!this.state.name || !this.state.hex) {
      components = <Placeholder />;
    } else {
      components = (
        <div>
          <ColorName name={this.state.name} />
          <ColorHexCode hex={this.state.hex} />
          <ColorBox hex={this.state.hex} />
        </div>
      );
    }
    return (
      <div className="main">
        {components}
      </div>
    );
  }
});

module.exports = App;
