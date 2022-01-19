import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const { v4: uuidv4 } = require('uuid');
uuidv4();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
