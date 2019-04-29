import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieDetail extends Component {
  static propTypes = {
    filmDetail: PropTypes.object.isRequired,
  }

  render() {
    const { filmDetail} = this.props;
    const showProducer = filmDetail.director !== filmDetail.producer;
    return (
      <div className='filmDetail-wrapper'>
        <div className='filmDetail-wrapper'>
          <h2>{ filmDetail.title}</h2>
          <p>{ filmDetail.release_date}</p>
          <p>{ filmDetail.description}</p>
          <p>{ filmDetail.director}</p>
          { showProducer && <p>{filmDetail.producer}</p> }
        </div>
      </div>
    );
  }
}

export default MovieDetail;

