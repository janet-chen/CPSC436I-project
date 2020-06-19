import React, { Component } from 'react';
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

class Searchbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: '',
      image: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (event) {
    this.props.submitSearch(this.state.value);
    unsplash.search.photos(this.state.value, 1, 10, { orientation: 'portrait' })
      .then(toJson)
      .then(json => {
        let extractUrls = function ({ urls }) { return { urls }; };
        const imageSubset = json.results.slice(0, 10);
        const urls = imageSubset.map(imgObject => extractUrls(imgObject));
        this.props.submitResults(urls);
        this.setState({
          image: json.results[0].urls.small
        });
      });
    event.preventDefault();
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id='submitText' type='text' value={this.state.value} onChange={this.handleChange} />
          <button onClick={() => this.handleSubmit}>Search</button>
        </form>
        <img src={this.state.image} alt='Destination Image' />
      </div>

    );
  }
}

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

const SearchbarContainer = connect(null, mapDispatchToProps)(Searchbar);

export default SearchbarContainer;
