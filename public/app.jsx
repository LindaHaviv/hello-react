


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
  onButtonClick: function (e) {
    e.preventDefault();

    var nameRef = this.refs.name;
    var name = nameRef.value;
    nameRef.value = '';

    //only changes the state when the name exists so empty string isn't put in input to avoid blank hello
    if (typeof name === 'string' && name.length > 0) {
      this.setState({
        name: name
      });
    }
  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;

    return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>

          <form onSubmit={this.onButtonClick}>
            <input type="text" ref="name"/>
            <button>Set Name</button>
          </form>
        </div>
      );
  }
});


var firstName = "Linda";

ReactDOM.render(
  <Greeter name={firstName} message='Message from prop'/>, 
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
