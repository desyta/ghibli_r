import React, { Component } from 'react';
import './App.css';
import MovieDetail from './components/movieDetail';
import Autocomplete from './components/autocomplete';

class App extends Component {
  constructor() {
    super();
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
        <div className='col-xs-12'>
          <h1>Catalogo ghibli</h1>
          <Autocomplete 
            suggestions={ movieNames } />
          <button type='submit' onClick={ () => this.handleClick('ea660b10-85c4-4ae3-8a5f-41cea3648e3e') }  />
        </div>
        { isVisible && 
          <MovieDetail 
            filmDetail = { filmDetail }
            isDataReady = { true } /> }
      </div>
    );
  }

  handleClick(movieId){
   const { movies } = this.state;
   const movieInfo = movies.find(movie => movie.id ===  movieId );

   this.setState({
    isVisible: true, 
    filmDetail: movieInfo,    
   })
  }

}

export default App;

