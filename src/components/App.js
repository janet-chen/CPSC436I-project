import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Registration from './UserForms/Registration';
import SaveColumn from './SaveColumn/SaveColumn';
import Display from './Display/Display';

function App() {
  return (
    <div>
      <Login />
      <Registration />
      <Display />
      <SaveColumn />
    </div>
  );
}

export default App;
