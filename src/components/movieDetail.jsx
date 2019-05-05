import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieDetail extends Component {
  static propTypes = {
    filmDetail: PropTypes.object.isRequired,
  }

  render() {
    const { filmDetail} = this.props;
    const showProducer = filmDetail.director !== filmDetail.producer;
    const noResults = Object.keys(filmDetail).length === 0;

    return (
      <section className='filmDetail-wrapper'>
        <article className='filmDetail-information'>
          { noResults ? <p className='filmDetail-notfound'>Gomen nasai! We do not have this movie in our catalogue</p> :
            <div>
              <h2 className='filmDetail-title'> { filmDetail.title}</h2>
              <div className='filmDetail-detail'>
                <div className='filmDetail-tech'>
                  <p className='filmDetail-release-date'><span>Release date: </span>{ filmDetail.release_date}</p>
                  <p className='filmDetail-rating'><span>Rating: </span>{ filmDetail.rt_score}</p>
                  <p className='filmDetail-director'><span>Director: </span>{ filmDetail.director}</p>
                  { showProducer && <p className='filmDetail-producer'><span>Producer: </span>{filmDetail.producer}</p> }
                </div>
                <div className='filmDetail-summary'>
                  <p className='filmDetail-description'>{ filmDetail.description}</p>
                </div>
              </div>
              
            </div> }
        </article>
      </section>
    );
  }
}

export default MovieDetail;

