import React, { createContext, useState } from 'react';
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
import PrivateRoute from './Component/Home/PrivateRoute/PrivateRoute';
import Login from './Component/Login/Login';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

    <Router>
      <Switch>
        <Route path = "/login">
          <Login></Login>
        </Route>
        <Route path = "/admin">
          <Admin></Admin>
        </Route>
        <PrivateRoute path = "/order">
          <Order></Order>
        </PrivateRoute>
        <Route path = "/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
