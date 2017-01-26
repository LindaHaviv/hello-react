
var GreeterMessage = React.createClass({
  render: function (){
    var name = this.props.name;
    var message = this.props.message;

    return (
         <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
      e.preventDefault();

      var name = this.refs.name.value;

      if(name.length > 0) {
        this.refs.name.value = '';
        this.props.onNewName(name);
      }
    },
  render: function (){
    return (
         <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="name"/>
            <button>Set Name</button>
          </form>
      );
    }
});

var Greeter = React.createClass({
  getDefaultProps: function () {
      return {
        name: 'React',
        message: 'This is the default message'
        };
  },
  getInitialState: function () {
      return {
        //keeps track of state of name: keeps track if the name gets updated
        name: this.props.name
      };
  },
  handleNewName: function (name) { 
      //only changes the state when the name exists so empty string isn't put in input to avoid blank hello
      this.setState({
        name: name
      });
  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
        <div>

          <GreeterMessage name={name} message={message}/>
          <GreeterForm onNewName={this.handleNewName}/>
          
        </div>
      );
  }
});


var firstName = "Linda";

ReactDOM.render(
  <Greeter name={firstName}/>, 
  document.getElementById('app')

);


// NOTES
//react components are the buildign blocks for your web app's UI
//the only thing that is required in react component is render method
//PROP VS. STATE
///props is the way you pass your data in to your component
//state is internally maintained and updated by the component
//a component shouldn't update its own props, but it si allowed to update its own state
//if you are trying to figure out if something is prop or state ask yourself: Is my component going to be updating the value?
