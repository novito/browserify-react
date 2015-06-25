var React = require('react');

var ContentToggler = React.createClass({

  getInitialState: function() {
    return {
      showDetails: false
    };
  },

  handleClick: function(event) {
    this.setState({
      showDetails: !this.state.showDetails
    });
  },

  render: function() {
    var details;

    if (this.state.showDetails) {
      details = this.props.children;
    }

    return (
      <div className="ContentToggler">
        <div
          tabIndex="0"
          onClick={this.handleClick}
          >
          {this.props.summary}
        </div>
        <div ref="details" tabIndex="-1" className="ContentToggle__Details">
          {details}
        </div>
      </div>
    );
  }
});

module.exports = ContentToggler;
