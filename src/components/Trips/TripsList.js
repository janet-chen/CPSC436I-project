import React from 'react';
import TripsListItem from './TripsListItem';
import { connect } from 'react-redux';
import {
  List
} from '@material-ui/core';
import NewTripModal from './NewTripModal';

const tempTrips = [
  {
    title: "Greece Honeymoon",
    days: 3
  },
  {
    title: "Japan Grad",
    days: 4
  },
  {
    title: "Mexico Christmas",
    days: 7
  }
];

class TripsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <NewTripModal/>
      <List>
      {tempTrips.map((trip, index) => TripsListItem(trip))}
      </List>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { trips: state.trips };
}
export default connect(mapStateToProps, {})(TripsList);
