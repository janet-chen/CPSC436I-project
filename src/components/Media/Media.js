import React, { Component } from 'react';
import './Media.css';

class Media extends Component {
  constructor (props) {
    super(props);

    this.state = {
    };
  }

  render () {
    return (
      <div className='media' onClick='' onHover=''>
        Insert video or picture here
      </div>
    );
  }
}

export default Media;
