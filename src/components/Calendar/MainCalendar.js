import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import './Calendar.css';
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AppointmentTooltip,
  Toolbar,
  ViewSwitcher,
  DateNavigator,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2020-06-20';
const appointments = [
  { startDate: '2020-06-19T09:45', endDate: "2020-06-19T14:45", title: 'Meeting' },
  { startDate: '2020-06-20T12:00', endDate: "2020-06-20T15:45", title: 'Go to a gym' },
];

export default class MainCalendar extends Component {
  render() {
    return (
      <div id='CalParent'>
      <Paper  id='MainCalendar'>
      <Scheduler
        data={appointments}
        height={'auto'}
      >
      <ViewState
        defaultCurrentDate={currentDate}
        defaultCurrentViewName="Week"
      />
      <DayView
        startDayHour={9}
        endDayHour={18}
      />
      <WeekView
        startDayHour={9}
        endDayHour={18}
      />
      <MonthView />
      <Appointments />
      <AppointmentTooltip />
      <Toolbar />
      <ViewSwitcher />
      <DateNavigator />
      <TodayButton />
      </Scheduler>
      </Paper>
      </div>
    );
  }
}
