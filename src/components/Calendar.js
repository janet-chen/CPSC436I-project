import React, { Component } from 'react'
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';


export default class MyCalendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
    }
  }
  

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}
