'use strict';

var React = require('react');
var clipboard = require('clipboard');

var ColorName = React.createClass({
  handleClick: function(e) {
    var target = e.target;
    setTimeout(function() {
      clipboard.writeText(target.textContent);
    }, 0);
  },

  render: function () {
    var value = '$' + this.props.name;
    return (
      <div className="color-name" onClick={this.handleClick}>
        {value}
      </div>
    )
  }
});

module.exports = ColorName;
