import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


export default class Searchbar extends Component {    

  constructor(props) {

    super(props);
    this.state = {value: ''};
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

//   handleSubmit(event) {
//       console.log("Search: " + this.state.value);
//       event.preventDefault();
//   }

//   handleChange(event) {
//       this.setState({
//           value: event.target.value
//       })
//   }


// export default function Searchbar() {

  classes = makeStyles((theme) => ({
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
  }));


  handleSubmit = (event) => {
    console.log("hello");
    event.preventDefault();
  }

  handleChange = (event) => {
      this.setState({
          value: event.target.value
      })
  }

  render() {return (
    <Paper component="form" className={this.classes.root} onSubmit={this.handleSubmit}>
      <InputBase
        className={this.classes.input}
        placeholder="Location"
        inputProps={{ 'aria-label': 'search google maps' }}
        // onChange={handleChange}
      />
      <IconButton type="submit" className={this.classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
  }

}
