import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Persons/Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'a1', name: 'John', age: 23},
      {id: 'a2', name: 'Monica' , age: 12},
      {id: 'a3', name: 'Joe', age: 28}
    ],
    showPersons = false
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(per => {
        return per.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } );
  }

  deletePersonHandler = (personIndex) => {
    //const persons = [...this.state.persons];
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});    
  }

  togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

  render() {

    const style = {
        backgroundColor: "green",
        color: "white",
        font: 'inherit',
        border: '1px solid grey',
        padding: '8px',
        cursor: 'pointer',
        '.hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }
    };
    
    let persons = null;
    if(this.state.showPersons){
        persons = (
        <div>
            {this.state.persons.map((person, index) => {
                return <Person
                    click = {() => this.deletePersonHandler(index)}
                    name = {person.name}
                    age = {person.age}
                    key = {person.id}
                    changed = {(event) => this.nameChangedHandler(event, person.id)}/>
            })}  
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
          backgroundColor: 'salmon',
          color: 'black'
      };
    }

    const cssClasses = [];
    if(this.state.persons <= 2){
        cssClasses.push(classes.red);         //cssClasses = ['red']
    }
    if(this.state.persons <= 1){
        cssClasses.push(classes.bold);        //cssClasses = ['red', 'bold']
    }

  return (
    <StyleRoot>
        <div className="App">
            <h1>Hiii....this is a react app</h1>
            <p className = {cssClasses.join(' ')}>Practicing React</p>
            <button
                style = {style}
                onClick = {this.togglePersonsHandler }> Toggle Name
            </button>
            {persons}
        </div>
    </StyleRoot>
  );
  }
};

export default Radium(App);