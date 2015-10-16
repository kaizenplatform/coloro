'use strict';

var React = require('react');
var clipboard = require('clipboard');

var ColorHexCode = React.createClass({
  handleClick: function(e) {
    var target = e.target;
    setTimeout(function() {
      clipboard.writeText(target.textContent);
    }, 0);
  },

  render: function () {
    var value = this.props.hex;
    return (
      <div className="color-hex-code" onClick={this.handleClick}>
        {value}
      </div>
    )
  }
});

module.exports = ColorHexCode;
