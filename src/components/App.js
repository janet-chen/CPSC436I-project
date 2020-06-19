import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Registration from './UserForms/Registration';
import MyCalendar from './Calendar';
import Searchbar from './Searchbar.js';
import SaveColumn from './SaveColumn/SaveColumn';
import Display from './Display/Display';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar />
      <Searchbar />
      <Switch>
        <Route path="/" component={null} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/results" component={Display} />
      </Switch>

    </Router>


  );
}

export default App;
