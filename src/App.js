import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { ToDoBanner } from './ToDoBannerFile';
import { ToDoRow } from './ToDoRowFile';
import { VisibilityControl } from './VisibilityControlFile';
import {ToDoCreator} from './ToDoCreatorFile';
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
        { action: "Move burn pile", done: false },
        { action: "Sweep Garage", done: false },
        { action: "Spread chai-leaves", done: false },
        { action: "Get car to shop", done: true },
        { action: "Rake Leaves", done: false },
      ],
      showCompleted: true
    }

  }//end of constructor

  // Table function
  //If the todo items "done" property experiences a change event (i.e. checking the Mark As Complete box in the UI)then we toggle the todo item
  todoTableRowsFunction = (statusOfTask) =>
    this.state.todoItems.filter(x => x.done == statusOfTask).map(y =>
      <ToDoRow
        key={y.action}
        oneMappedItem={y}
        callback={this.toggleToDoFunction}
      />
    );

  // toggleToDoFunction is the callback function of the <ToDoRow> component
  // this function receives the value or object that is passed into the callback property of <ToDoRow>. This passed data is being called "myToggledItem"

  //  When setState is invoked, React will make a new object with the changes.  Under the hood React will compare the new object with the DOM version of the object.  If there is a difference between those 2 objects then the DOM will get re-drawn (NOT a reload) and then we see the changes.


  toggleToDoFunction = (myToggledItem) => this.setState({
    todoItems: this.state.todoItems.map(
      x => x.action == myToggledItem.action ? { ...x, done: !x.done } : x
    )
  }, () => localStorage.setItem("storedTodos", JSON.stringify(this.state)));

  //  The createNewTodoCallback method below is the callback for the ToDoCreator component
  //  The "newToDo" parameter passed into the createNewTodoCallback method below comes from where the callback it initiated from- which is in the createNewTodo method of the ToDoCreator Component

  createNewToDoCallback = (newToDo) => {
//  The if block below checks if the newly created todo item is NOT already in the list of todos.  If it is NOT already in the list then it adds it as below.  If it is in the list already there is no else block so nothing happens - this is not to user friendly but.... :)
    if (!this.state.todoItems.find(x => x.action == this.state.newToDoItem)){
      this.setState({
        todoItems: [
          ...this.state.todoItems, {action: newToDo, done: false}
        ]
        // By default every new todo should not be done- in other words it's done property should have a value of false.
      }, () => localStorage.setItem("storedTodos", JSON.stringify(this.state))
      ); //End of SetState
    } // End of If Block
  } 

  //  The componentDidMount method below is a built in react method to handle logic for when the app "mounts" or "loads"
  //  The localStorage object is a React built in object that allows persistent local storage much like how cookies work
  //  localStorage reference: https://programmingwithmosh.com/react/localstorage-react/

  componentDidMount = () => {
    let storedData = localStorage.getItem("storedTodos");
    this.setState(
      storedData != null ? JSON.parse(storedData) : {
        userName: "Joe",
        todoItems: [
        { action: "Sweep Garage", done: false }
        ],
        showCompleted: true
      }
    );
  }

  render = () =>
    <div>
      {/*Banner Features*/}
      {/*Below is referred to as a react stub*/}

      <ToDoBanner
        userName={this.state.userName}
        todoItems={this.state.todoItems}
      />

      {/* Add Features*/}
      <ToDoCreator 
        callback = {this.createNewToDoCallback}
      />

      {/*Table Features*/}
      {/* Top table is only for items with "done" property is false*/}
      <table className="table table-striped table-border">
        <thead>
          <th>Description</th>
          <th>Incomplete</th>
        </thead>
        <tbody>
          {this.todoTableRowsFunction(false)}
        </tbody>
      </table>

      <div className="bg-secondary text-white text-center p-2">
        {/* Hide and show features*/}
        <VisibilityControl

          toggleVisibility="Completed Tasks"
          isChecked={this.state.showCompleted}
          callback={x => this.setState({
            showCompleted: x
          })}

        />

      </div>
      {/* Bottom table is only for items with "done" property is true*/}

      {this.state.showCompleted &&
        <table className="table table-striped table-border">
          <thead>
            <th>Description</th>
            <th>Complete</th>
          </thead>
          <tbody>
            {this.todoTableRowsFunction(true)}
          </tbody>
        </table>
      }
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
