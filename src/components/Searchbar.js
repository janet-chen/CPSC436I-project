import React, { Component } from 'react';
import { connect } from 'react-redux';
import setSearch from '../actions/index';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.submitSearch(this.state.value);
    console.log("Search: " + this.state.value);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="submitText" type="text" value={this.state.value} onChange={this.handleChange}/>
        <button onClick={() => this.handleSubmit}>Search</button>
      </form>
    );
  }
}

// this prop isn't being used in this component.
// Need to figure out how to use the connect() function without having to implement mapStateToProps.
const mapStateToProps = (state) => {
  return {
    query: state.submittedSearch.currentSearch
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitSearch: (destination) => {
      dispatch(setSearch(destination));
    }
  };
};

const SearchbarContainer = connect(mapStateToProps, mapDispatchToProps)(Searchbar);

export default SearchbarContainer;
