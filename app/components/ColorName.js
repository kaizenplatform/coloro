'use strict';

var React = require('react');

var ColorName = React.createClass({
  render: function () {
    return (
      <div className="color-name">
        {this.props.name}
      </div>
    )
  }
});

module.exports = ColorName;
