import React from 'react';
import './App.css';
import { Login } from './Login';
import MainCalendar from './Calendar/MainCalendar';
import CPopper from './Calendar/CPopper';
import Display from './Display';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SavedDisplay from './SavedDisplay';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={Login} />
        <Route path="/results" component={Display} />
        <Route path="/saved" component={SavedDisplay} />
        <Route path="/calendar" component={MainCalendar} />
        <Route path="/profile" component={Profile} />
        <Route path="/logout"
          component={() => {
            fetch('http://localhost:9000/auth/logout',
              { 
                  method: 'GET',
              }
          )
            return null;
          }}
        />
      </Switch>
      <CPopper />
    </Router>


  );
}

export default App;
