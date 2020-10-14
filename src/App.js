import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Admin from './Component/Admin/Admin/Admin';
import Order from './Component/Customer/Order/Order';
import Home from './Component/Home/Home/Home';
import Login from './Component/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/login">
          <Login></Login>
        </Route>
        <Route path = "/admin">
          <Admin></Admin>
        </Route>
        <Route path = "/order">
          <Order></Order>
        </Route>
        <Route path = "/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
