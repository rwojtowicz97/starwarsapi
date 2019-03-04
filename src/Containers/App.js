import React, { Component } from 'react';
import './App.css';
import PlanetList from '../Components/Planet/PlanetList.js'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      planets: []
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(planety => this.setState ({planets: planety.results}))
  }

 
  render() {
    const { planets } = this.state;
    return (
      <div>
        <h1>Star Wars</h1>
          <div className="container">
           <div className="zone planets"><PlanetList planets={planets} /></div>
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