import React from 'react';
import './App.css';
import Login from './UserForms/Login';
import Registration from './UserForms/Registration';
import MainCalendar from './Calendar/MainCalendar';
import CPopper from './Calendar/CPopper';
import Searchbar from './Searchbar';
import SaveColumn from './SaveColumn/SaveColumn';
import Display from './Display/Display';
import Media from './Media/Media'
function App() {
  return (
    <div>
      <MainCalendar />
      <CPopper />
    </div>
  );
}

export default App;
