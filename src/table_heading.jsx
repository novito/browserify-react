var React = require('react');

var TableHeading = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.values.map(function(heading) {
          return <div>{heading}</div>;
        })}
      </div>
    );
  }
});

module.exports = TableHeading;
