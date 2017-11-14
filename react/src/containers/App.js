import React, { Component } from 'react';
import MoviesIndex from '../components/MoviesIndex'
import FormContainer from './FormContainer'

class App extends Component {
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
        // let filteredMovies = body.movies.filter(movie => {
        //   return movie.release_year < 1960
        // })
      this.setState({ movies: body.movies })
    })
  }

  addNewMovie(newMovies) {
      fetch('/api/v1/movies', {
        method: 'POST',
        body: JSON.stringify(newMovies)
      })
        .then(response => response.json())
        .then(body => {
          let newMovieList = this.state.movies.concat(body)
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
        <FormContainer addNewMovie={this.addNewMovie}/>
      </div>
    )
  }

}

export default App;
