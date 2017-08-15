import React, { Component } from 'react';
import MoviesIndex from '../components/MoviesIndex'
import FormContainer from './FormContainer'

class MoviesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.addNewMovie = this.addNewMovie.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/movies')
    .then(response => response.json())
    .then(body => {
      let allMovies = body.movies
      // let olderMovies = allMovies.filter(movie =>
      //   movie.release_year < 1960
      // )
      this.setState({ movies: allMovies })
    })
  }

  addNewMovie(formPayload) {
    fetch('/api/v1/movies', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      let newMovieList = this.state.movies.concat(formPayload)
      this.setState({ movies: newMovieList })
    })
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
        <FormContainer
        addNewMovie={this.addNewMovie}
        />
      </div>
    )
  }

}

export default MoviesContainer;
//http://onypen.com/i/2017/07/disney-castle-wallpapers-wide.jpg
