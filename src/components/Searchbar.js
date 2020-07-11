import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {Redirect} from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchMedia, fetchVideos } from '../redux/'

const styles = theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 12,
  },
});


class Searchbar extends Component {    

  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      toResults: false
    };
  }
  
  handleSubmit = (event) => {
    this.props.fetchMedia(this.state.value);
    this.props.fetchVideos(this.state.value);
    event.preventDefault();
    
    this.setState({
      value: '',
      toResults: true,
    })
  }
  
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }
  
  render() {
    if (this.state.toResults === true) {
      this.setState({
        toResults: false
      });
      return <Redirect to="/results" />
    }

    const { classes } = this.props;
    return (
    <Paper component="form" className={classes.root} onSubmit={this.handleSubmit}>
      <InputBase
        className={classes.input}
        placeholder="Literally anywhere"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={this.handleChange}
        value={this.state.value}
        />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>

    )
  
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMedia: (destination) => {
        dispatch(fetchMedia(destination));
      },
    fetchVideos: (destination) => {
      dispatch(fetchVideos(destination));
    }
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Searchbar));
