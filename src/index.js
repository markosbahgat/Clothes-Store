import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/mdb-react-ui-kit/dist/css/mdb.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/Icons/fontawesome-free/css/all.css';
import App from './App';
import { BrowserRouter as Router, Route, NavLink, BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
  
);
