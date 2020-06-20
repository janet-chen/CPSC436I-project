import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
} from '@devexpress/dx-react-scheduler-material-ui';

const currentDate = '2020-06-20';
const appointments = [
  { startDate: '2020-06-19T09:45', endDate: "2020-06-19T14:45", title: 'Meeting' },
  { startDate: '2020-06-20T12:00', endDate: "2020-06-20T15:45", title: 'Go to a gym' },
];

export default class MiniCalendar extends Component {
  render() {
    return (
      <Paper>
      <Scheduler
        data={appointments}
        height={200}
      >
      <ViewState
        currentDate={currentDate}
      />
      <WeekView
        startDayHour={9}
        endDayHour={14}
      />
      <Appointments />
      </Scheduler>
      </Paper>
    );
  }
}
