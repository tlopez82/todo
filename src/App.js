import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {ToDoBanner} from './ToDoBannerFile';
import 'bootstrap/dist/css/bootstrap.css';

//Alt+shift+f to align

// The App class below is the default component for our TODO app
export default class App extends Component {
  //  Above we have created a class called App the extends the functionality of the Component class

  //  The export keyword above makes the class available for use outside of the JS file where it is created

  // The constructor method below will run by default when App component loads

  constructor() {
    super();  // super method is a built in react method that is generally needed to pass data

    //  React components have a special property called "state".  The "state" is used to define the state of data (props)
    this.state = {
      userName: "Tim",
      todoItems: [
        { action: "Move burn pile", done: false},
        { action: "Sweep Garage", done: false},
        { action: "Spread chai-leaves", done: false},
        { action: "Get car to shop", done: true},
        { action: "Rake Leaves", done: false},
      ]
    }

  }//end of constructor

  render = () =>
  <div>
    {/*Banner Features*/}
    {/*Below is referred to as a reat stub*/}

  <ToDoBanner     
    userName = {this.state.userName}
    todoItems = {this.state.todoItems}
  />

  </div>

}//end of App Component

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
