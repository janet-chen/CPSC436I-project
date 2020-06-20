import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { setSearch, saveResults } from '../actions/index';
import Unsplash, { toJson } from 'unsplash-js';
const APP_ACCESS_KEY = 'adYDaJCisGClWz_PnSuJJiuzl1hItt3kKGxKLePeYPA';
const SECRET_KEY = 'KFaS1rVbg4l9G1OJ1TSVCL2mYnDMl9c-5wi8puO2Bjo';
const unsplash = new Unsplash(
  {
    accessKey: APP_ACCESS_KEY,
    secret: SECRET_KEY
  });

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
    padding: 10,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    submitSearch: (destination) => {
      dispatch(setSearch(destination));
    },
    submitResults: (imageUrls) => {
      dispatch(saveResults(imageUrls));
    }
  };
};

class Searchbar extends Component {    

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  
  handleSubmit = (event) => {
    this.props.submitSearch(this.state.value);
    unsplash.search.photos(this.state.value, 1, 12, { orientation: 'landscape' })
      .then(toJson)
      .then(json => {
        let extractUrls = function ({ urls }) { return { urls }; };
        const imageSubset = json.results.slice(0, 12);
        const urls = imageSubset.map(imgObject => extractUrls(imgObject));
        this.props.submitResults(urls);
      });
    event.preventDefault();
    this.props.history.push("/results");
    this.setState({
      value: ''
    })
  }
  
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }
  
  render() {
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

export default connect(null, mapDispatchToProps)(withStyles(styles)(Searchbar));
