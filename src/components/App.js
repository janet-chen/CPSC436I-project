import React from 'react';
import './App.css';
import Login from './Login';
import MainCalendar from './Calendar/MainCalendar';
import CPopper from './Calendar/CPopper';
import Display from './Display';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SavedDisplay from './SavedDisplay';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/login" component={Login} />
        <Route path="/results" component={Display} />
        <Route path="/saved" component={SavedDisplay} />
        <Route path="/calendar" component={MainCalendar} />
      </Switch>
      <CPopper />
    </Router>


  );
}

export default App;
