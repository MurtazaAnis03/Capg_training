import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'John', age: 23},
      {name: 'Monica' , age: 12},
      {name: 'Joe', age: 28}
    ]
  });

  const switchNameHandler = () => {
    setPersonsState( {
      persons: [
        {name: 'Johnson', age: 23},
        {name: 'Monica' , age: 15},
        {name: 'Joseph', age: 28}
      ]
    } );
  };

  return (
    <div className="App">
      <h1>Hiii....this is a react app</h1>
      <button onClick = { switchNameHandler }> Switch Name</button>
      <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
      <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}>My hobbies = Swimming</Person>
      <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
    </div>
  );
}

export default app;