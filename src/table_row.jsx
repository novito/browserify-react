var React = require('react');

var TableRow = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.value}
      </div>
    );
  }
});

module.exports = TableRow;
