import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Game from './Components/Game'
import App from './Components/App'
import './Styles/index.css'


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Game />,
  document.getElementById('root2')
);
