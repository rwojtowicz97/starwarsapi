import React, { Component } from 'react';
import './App.css';
import PlanetList from '../Components/Planet/PlanetList.js'
import PeopleList from '../Components/People/PeopleList.js'
import StarshipList from '../Components/Starship/StarshipList.js'


class App extends Component {
  constructor() {
    super()
    this.state = { 
      planets: [],
      people: [],
      starships: []
    }
  }

  componentDidMount() {

    Promise.all([
        fetch('https://swapi.co/api/planets/'),
        fetch('https://swapi.co/api/people/'),
        fetch('https://swapi.co/api/starships/')
      ])
      .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
      .then(([data1, data2, data3]) => this.setState({
        planets: data1.results,
        people: data2.results,
        starships: data3.results
      }))

      

  }

 
  render() {
    const { planets, people, starships } = this.state;
    return (
      <div>
          <div className="container">
           <div className="zone planets"><PlanetList planets={planets} /></div>
           <div className="zone people"><PeopleList people={people} /></div>
           <div className="zone starships"><StarshipList starships={starships} /></div>
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
