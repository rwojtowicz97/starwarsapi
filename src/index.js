import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PlanetList from './PlanetList';
import Planet from './Planet';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<PlanetList planets={planets} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
