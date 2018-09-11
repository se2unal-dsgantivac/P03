import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Game from './Components/Game'
import './Styles/index.css'

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
