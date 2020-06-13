import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Registration from './UserForms/Registration';
import MyCalendar from './Calendar';
import SearchbarContainer from './Searchbar';
import SaveColumn from './SaveColumn/SaveColumn';
import DisplayContainer from './Display/Display';
import Media from './Media/Media';

function App() {
  return (
    <div>
      <Login />
      <Registration />
      <SearchbarContainer />
      <DisplayContainer />
      <SaveColumn />
      <MyCalendar />
      <Media />
    </div>
  );
}

export default App;
