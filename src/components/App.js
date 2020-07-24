import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Registration from './UserForms/Registration';
import MainCalendar from './Calendar/MainCalendar';
import CPopper from './Calendar/CPopper';
import MyTrips from './Trips/TripsList';
import SampleTrip from './Trips/TripPageNew';
import Display from './Display';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SavedDisplay from './SavedDisplay';


function App() {
  return (
    <Router>
      <NavBar />
      {/* <Route path="/" component={Searchbar} /> */}
      <Switch>
        <Route path="/" component={LandingPage} exact/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/results" component={Display} />
        <Route path="/saved" component={SavedDisplay} />
        <Route path="/calendar" component={MainCalendar} />
        <Route path="/trips" component={MyTrips} />
        <Route path="/sampleTrip" component={SampleTrip} />
      </Switch>
      <CPopper />
    </Router>


  );
}

export default App;
