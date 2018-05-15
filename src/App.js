import React, { Component } from 'react';
import './App.css';
import projects from './projects.json';

class App extends Component {
  render() {
    let breakdowns = projects.projects.sort((a, b) => a.added < b.added).map(e => {
      return (
        <div className='breakdown' key={e.added + e.startDate}>
          <h4>Added {new Date(e.added).toLocaleDateString()} {new Date(e.added).toLocaleTimeString()}</h4>
          <h1>{e.title}</h1>
          <h3>{e.type}</h3>
          <h3>Casting Director</h3> 
          <h3>{e.castingDirector}</h3>
          <h4>Starts {new Date(e.startDate).toLocaleDateString()} {new Date(e.startDate).toLocaleTimeString()}</h4>
          <h4>I'm interested <input id="checkBox" type="checkbox"/> </h4>
        </div>
      );
    })
    return (
      <div className="App">
        <header>
          <h2>Breakdowns</h2>
        </header>
        <div className='breakdownContainer'>
          {breakdowns}
        </div>
      </div>
    );
  }
}

export default App;
