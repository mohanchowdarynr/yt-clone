import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import Home from './Components/Home';
import Login from './Components/Login';
import Error from './Components/Error';

function App() {
  const [details,setDetails] = useState([]);
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
        <Login details={details} setDetails={setDetails}/>
        </Route>
        <Route path="/Error"><Error /></Route>
        <PrivateRoute exact path="/Home" >
          <Home />
        </PrivateRoute>
      </Switch>
    </div>
  )}

export default App;
