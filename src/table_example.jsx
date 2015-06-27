var React = require('react'),
    Table = require('./table.jsx');

var tableData = {
  heading: ['Name', 'Age'],
  rows: [
    ['Joan', 28],
    ['Emily', 30]
  ]
};

var TableExample = React.createClass({
  render: function() {
    return (
      <div>
        <h1> My table </h1>
        <Table heading={tableData.heading} rows={tableData.rows} />
      </div>
    );
  }
});


React.render(
  <TableExample />,
  document.getElementById('main')
);
