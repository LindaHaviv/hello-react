
var React = require('react');
var GreeterMessage = require('./GreeterMessage');
var GreeterForm = require('./GreeterForm');

var Greeter = React.createClass({
  getDefaultProps: function () {
      return {
        name: 'React',
        message: 'This is the default message!'
        };
  },
  getInitialState: function () {
    //keeps track of state of name/message: keeps track if the name/message gets updated
      return {
        name: this.props.name,
        message: this.props.message
      };
  },
  handleNewData: function (updates) { 
      //only changes the state when the name exists so empty string isn't put in input to avoid blank hello
      this.setState(updates);
  },
  render: function () {
    var name = this.state.name;
    var message = this.state.message;

    return (
        <div>

          <GreeterMessage name={name} message={message}/>
          <GreeterForm onNewData={this.handleNewData}/>
          
        </div>
      );
  }
});

module.exports = Greeter;
