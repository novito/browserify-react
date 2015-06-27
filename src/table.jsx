var React = require('react'),
    TableHeading = require('./table_heading.jsx'),
    TableBody = require('./table_body.jsx');

var Table = React.createClass({
  render: function() {
    return (
      <div>
        <TableHeading values={this.props.heading}/>
        <TableBody rows={this.props.rows} />
      </div>
    );
  }
});

module.exports = Table;
