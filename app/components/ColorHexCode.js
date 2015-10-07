'use strict';

var React = require('react');

var ColorHexCode = React.createClass({
  render: function () {
    return (
      <div className="color-hex-code">
        {this.props.hex}
      </div>
    )
  }
});

module.exports = ColorHexCode;
