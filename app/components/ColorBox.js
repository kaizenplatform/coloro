'use strict';

var React = require('react');

var ColorBox = React.createClass({
  render: function () {
    var divStyle = {backgroundColor: this.props.hex};
    return (
      <div className="color-box" style={divStyle}></div>
    )
  }
});

module.exports = ColorBox;
