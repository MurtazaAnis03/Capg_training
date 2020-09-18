import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

  render() {
  return (
    <div className="App">
      <h1>Hiii....this is a react app</h1>
      <button onClick = {() => this.switchNameHandler('Maxmillian') }> Switch Name</button>
      <Person 
        name = {this.state.persons[0].name} 
        age = {this.state.persons[0].age}/>
      <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this, 'Max')}>
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