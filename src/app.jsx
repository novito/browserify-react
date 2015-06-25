var React = require('react');

var ContentToggler = require('./contentToggler.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>ContentToggle</h1>
        <ContentToggler summary="Stuff">
          <p>Good stuff</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </ContentToggler>
      </div>
    );
  }
});


React.render(
  <App />,
  document.getElementById('main')
);
