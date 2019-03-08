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

 async componentDidMount() {

      const urls = [
          'https://swapi.co/api/planets/',
          'https://swapi.co/api/people/',
          'https://swapi.co/api/starships/'
        ]
  
      const [planets, people, starships] = await Promise.all(urls.map(async function (url){
              const response = await fetch(url);
              return response.json();
              }));

      this.setState({
        planets: planets.results,
        people: people.results,
        starships: starships.results
      })
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
