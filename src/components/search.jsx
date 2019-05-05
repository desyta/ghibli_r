import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  static propTypes = {
    suggestions: PropTypes.instanceOf(Array),
    handleClicMovie: PropTypes.func.isRequired,
  };

  static defaultProps = {
    suggestions: []
  };

  constructor(props) {
    super(props);

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
    };
  }

  onChange = e => {
    const { suggestions } = this.props;
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter( suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1 );

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    });
  };

  onClick = e => {
    const { handleClicMovie } = this.props;

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });

    handleClicMovie(e.currentTarget.innerText);
  };

  onKeyDown = e => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      },
    } = this;

    const {  handleClicMovie } = this.props;
    let suggestionsListComponent;

    console.log('handleClicMovie', handleClicMovie);

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul className='suggestions'>
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = 'suggestion-active';
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div className='no-suggestions'>
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <div className='search-form'>
        <Fragment>
        <input
          type='text'
          onChange={ onChange }
          onKeyDown={ onKeyDown }
          value={ userInput }
          placeholder={ 'Search your movie!' }
        />
        {suggestionsListComponent}
        <button 
          disabled={ !userInput }
          type='submit' 
          onClick={ () => handleClicMovie(userInput) }>Search</button> 
        </Fragment>
      </div>
    );
  }
}

export default Search;
