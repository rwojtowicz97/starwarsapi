import React, { Component } from 'react';
import './App.css';
import PlanetList from './PlanetList.js'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      planets: []
    }
  }

  componetDidMount() {
    fetch('https://swapi.co/api/planets/?format=json')
    .then(response => response.json())
    .then(planety => this.setState ({planets: planety}))
  }

  render() {
    const { planets } = this.state;
    return (
      <div className='tc'>
        <h1>Star Wars</h1>
          <div className="container">
          <PlanetList planets={ planets } />
          </div>
      </div>

    );
  }
}

export default App;
// <div>
//   <h1>Star Wars</h1>
//     <div className="container">
//       <div className="zone planets"><h3>Planets</h3><ul></ul></div>
//       <div className="zone ships"><h3>Ships</h3><ul></ul></div>
//       <div className="zone characters"><h3>Characters</h3><ul></ul></div>
//     </div>
// </div>