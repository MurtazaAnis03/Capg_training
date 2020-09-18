import React, { Component } from 'react';
import './App.css';
import Person from './Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'John', age: 23},
      {name: 'Monica' , age: 12},
      {name: 'Joe', age: 28}
    ]
  };

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        {name: newName, age: 23},
        {name: 'Monica' , age: 15},
        {name: 'Joseph', age: 28}
      ]
    } )
  }

  nameChangedHandler = (event) => {
    this.setState( {
        persons: [
          {name: 'John', age: 23},
          {name: event.target.value , age: 15},
          {name: 'Joseph', age: 28}
        ]
      } )
  }

  render() {

    const style = {
        backgroundColor: "white",
        font: 'inherit',
        border: '1px solid grey',
        padding: '8px',
        cursor: 'pointer'
      }

  return (
    <div className="App">
      <h1>Hiii....this is a react app</h1>
      <button
        style = {style}
        onClick = {() => this.switchNameHandler('Maxmillian') }> Switch Name
      </button>
      <Person 
        name = {this.state.persons[0].name} 
        age = {this.state.persons[0].age}/>
      <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this, 'Maxx')}
        changed = {this.nameChangedHandler}>
        My hobbies = Swimming
      </Person>
      <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age}/>
    </div>
  );
  }
}

export default App;