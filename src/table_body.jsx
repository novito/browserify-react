var React = require('react'),
    TableRow = require('./table_row.jsx');

var TableBody = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.rows.map(function(row) {
          return <TableRow value={row} />;
        })}
      </div>
    );
  }
});

module.exports = TableBody;
