
var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');

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
