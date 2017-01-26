
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

      var updates = {};
      var name = this.refs.name.value;
      var message = this.refs.message.value;

      if(name.length > 0) {
        this.refs.name.value = '';
        updates.name = name;
      }

      if(message.length > 0) {
        this.refs.message.value = '';
        updates.message = message;
      }

      this.props.onNewData(updates);
  },
  render: function (){
    return (
         <form onSubmit={this.onFormSubmit}>
             <div>
                <input type="text" ref="name" placeholder="Enter Name"/>
             </div>
             <div>
                <textarea ref="message" placeholder="Enter Message"></textarea>
             </div>
             <div>
                <button>Submit</button>
             </div>
         </form>
      );
    }
});

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
