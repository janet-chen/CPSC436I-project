import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

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

class Searchbar extends Component {    

  constructor(props) {
    super(props);
    this.state = {value: ''};
  }
  
  handleSubmit = (event) => {
    console.log("hello");
    event.preventDefault();
  }
  
  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }
  
  render() {
    const { classes } = this.props;
    return (
    <Paper component="form" className={classes.root} onSubmit={this.handleSubmit}>
      <InputBase
        className={classes.input}
        placeholder="Location"
        inputProps={{ 'aria-label': 'search google maps' }}
        // onChange={handleChange}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
    )
  
  }
}

export default withStyles(styles)(Searchbar);