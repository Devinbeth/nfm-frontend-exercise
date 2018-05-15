import React, { Component } from 'react';
import './App.css';
import projects from './projects.json';

class App extends Component {
  render() {
    let breakdowns = projects.projects.sort((a, b) => a.added < b.added).map(e => {
      return (
        <div className='breakdown' key={e.added + e.startDate}>
          <h5>Added {new Date(e.added).toLocaleDateString()} {new Date(e.added).toLocaleTimeString()}</h5>
          <h2>{e.title}</h2>
          <h3>{e.type}</h3>
          <h3>Casting Director {e.castingDirector}</h3>
          <h4>Starts {new Date(e.startDate).toLocaleDateString()} {new Date(e.startDate).toLocaleTimeString()}</h4>
        </div>
      );
    })
    return (
      <div className="App">
        {breakdowns}
      </div>
    );
  }
}

export default App;
