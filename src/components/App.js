import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Registration from './UserForms/Registration';
import MyCalendar from './Calendar';
import Searchbar from './Searchbar.js';
import SaveColumn from './SaveColumn/SaveColumn';
import Display from './Display/Display';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar />
      <Searchbar />
      {/* <Link to="/" >
        <h3>Home</h3>
      </Link>
      <Link to="/login" >
        <h3>Login</h3>
      </Link>
      <Link to="/register" >
        <h3>Register</h3>
      </Link> */}

      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
      </Switch>

    </Router>


  );
}

export default App;
