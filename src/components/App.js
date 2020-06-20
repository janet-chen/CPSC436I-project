import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Registration from './UserForms/Registration';
import MyCalendar from './Calendar';
import Searchbar from './Searchbar.js';
import SaveColumn from './SaveColumn/SaveColumn';
import Display from './Display';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Calendar from 'react-calendar';


function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" component={Searchbar} />
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/results" component={Display} />
        <Route path="/calendar" component={Calendar} />
      </Switch>

    </Router>


  );
}

export default App;
