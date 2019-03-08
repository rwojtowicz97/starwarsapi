import React, { Component } from 'react';
import './App.css';
import PlanetList from '../Components/Planet/PlanetList.js'
import PeopleList from '../Components/People/PeopleList.js'


class App extends Component {
  constructor() {
    super()
    this.state = { 
      planets: [],
      people: []
    }
  }

  componentDidMount() {
    // fetch('https://swapi.co/api/planets/')
    // .then(response => response.json())
    // .then(data => this.setState ({planets: data.results}));

    // fetch('https://swapi.co/api/people/')
    // .then(response1 => response1.json())
    // .then(data1 => this.setState ({people: data1.results}));
    Promise.all([
        fetch('https://swapi.co/api/planets/'),
        fetch('https://swapi.co/api/people/')
      ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([data1, data2]) => this.setState({
        planets: data1.results,
        people: data2.results
      }))

  }

 
  render() {
    const { planets, people } = this.state;
    return (
      <div>
          <div className="container">
           <div className="zone planets"><PlanetList planets={planets} /></div>
           <div className="zone people"><PeopleList people={people} /></div>
          
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
