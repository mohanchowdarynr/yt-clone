import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { UserProvider } from './Context/UserContext';

ReactDOM.render(
  <React.StrictMode>
  <UserProvider>
  <Router>
    <App />
    </Router>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

