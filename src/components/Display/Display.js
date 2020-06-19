import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Display.css'
import Media from '../Media/Media';

class Display extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
        };
    }

    render() {
        return (
            <div className="display">
                Loaded content... Here's your query: {this.props.query}
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
                <Media />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    query: state.submittedSearch.currentSearch
  };
};

const DisplayContainer = connect(mapStateToProps)(Display);

export default DisplayContainer;
