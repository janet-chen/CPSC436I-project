import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Registration from './UserForms/Registration';
import MyCalendar from './Calendar';
import Searchbar from './Searchbar';
import SaveColumn from './SaveColumn/SaveColumn';
import Display from './Display/Display';


function App() {
  return (
    <div>
      <Login />
      <Registration />
      <Searchbar />
      <Display />
      <SaveColumn />
      <MyCalendar />
    </div>
  );
}

export default App;
