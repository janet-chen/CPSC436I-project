import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Registration from './UserForms/Registration';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Replace this with nav */}
      <Link to="/" >
        <h3>Home</h3>
      </Link>
      <Link to="/login" >
        <h3>Login</h3>
      </Link>
      <Link to="/register" >
        <h3>Register</h3>
      </Link>

      <Switch>
        <Route path="/" component={null} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
      </Switch>

    </Router>
  );
}

export default App;
