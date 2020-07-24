import React from 'react';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar
} from '@material-ui/core';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import DeleteIcon from '@material-ui/icons/Delete';

export default function TripsListItem(trip) {
  return (
    <div>
    <ListItem>
    <Link to="/sampleTrip">
      <ListItemAvatar>
        <Avatar>
          <FlightTakeoffIcon />
        </Avatar>
      </ListItemAvatar>
      </Link>
      <ListItemText
        primary={trip.title}
      />
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
    </div>
  );
}
