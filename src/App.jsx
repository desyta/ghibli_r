import React, { Component } from 'react';
import './main.scss';
import MovieDetail from './components/movieDetail';
import Search from './components/search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      isLoading: true,
      errors: null,
      isVisible: false,
      filmDetail: null,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies() {
    fetch(`https://ghibliapi.herokuapp.com/films/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          movies: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isVisible, movies, filmDetail } = this.state;
    const movieNames = movies.map(function (movie) {
        return movie.title; 
    });

    return (
      <div className='container'>
        <div className='search-container'>
          <h1 className='search-title'>Studio Ghibli's Catalogue</h1>
          <Search 
            suggestions={ movieNames } 
            handleClicMovie={ this.handleClick }
          />
        </div>
        { isVisible && 
          <MovieDetail 
            filmDetail = { filmDetail }
            isDataReady = { true } /> }
      </div>
    );
  }

  handleClick(movieTitle) {
     const { movies } = this.state;
     const movieInfo = movies.find(movie => movie.title ===  movieTitle );

     this.setState({
      isVisible: true, 
      filmDetail: movieInfo ? movieInfo : [],    
     });
  }

}

export default App;

