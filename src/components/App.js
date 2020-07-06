import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import RegistrationMUI from './UserForms/Registration-MUI';
import MainCalendar from './Calendar/MainCalendar';
import CPopper from './Calendar/CPopper';
import Searchbar from './Searchbar';
import SaveColumn from './SaveColumn/SaveColumn';
import Display from './Display';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Searchbar} exact/>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={RegistrationMUI} />
        <Route path="/results" component={Display} />
        <Route path="/calendar" component={MainCalendar} />
      </Switch>
      <CPopper />
    </Router>


  );
}

export default App;
