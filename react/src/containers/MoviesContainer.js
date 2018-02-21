import React, { Component } from 'react';
import MoviesIndex from '../components/MoviesIndex'
import FormContainer from './FormContainer'

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  render() {
    return(
      <div className="container">
        <img src="https://media.giphy.com/media/4fPXbU1Eld8fm/giphy.gif"/>
        <h1>Classic Disney Movies</h1>
        <hr />
        <MoviesIndex
          movies={this.state.movies}
        />
        <hr />
      </div>
    )
  }

}

export default MoviesContainer;
