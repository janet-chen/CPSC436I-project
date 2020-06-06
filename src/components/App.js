import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Registration from './UserForms/Registration';
import MyCalendar from './Calendar';
import Searchbar from './Searchbar';

function App() {
  return (
    <div>
      <Login />
      <Registration />
      <Searchbar />
      <MyCalendar />
    </div>
  );
}

export default App;
