import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Registration from './UserForms/Registration';
import MainCalendar from './Calendar/MainCalendar';
import CPopper from './Calendar/CPopper';
import Searchbar from './Searchbar';
// import SaveColumn from './SaveColumn/SaveColumn';
import Display from './Display';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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
        <Route path="/calendar" component={MainCalendar} />
      </Switch>
      <CPopper />
    </Router>


  );
}

export default App;
