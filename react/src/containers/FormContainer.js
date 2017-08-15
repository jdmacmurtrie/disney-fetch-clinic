import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: '',
      movieReleaseYear: '',
      movieRuntime: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClear = this.handleClear.bind(this)
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = {
      title: this.state.movieTitle,
      release_year: this.state.movieReleaseYear,
      runtime: this.state.movieRuntime
    }
    this.props.addNewMovie(formPayload)
    this.handleClear(event)
  }

  handleClear(event) {
    debugger
    event.preventDefault()
    this.setState({
      movieTitle: '',
      movieReleaseYear: '',
      movieRuntime: ''
    })
  }

  render() {
    return(
      <form className='callout' onSubmit={this.handleFormSubmit}>
        <TextInputField
          value={this.state.movieTitle}
          label="Movie Title"
          name="movieTitle"
          handleChange={this.handleChange}
        />
        <TextInputField
          value={this.state.movieReleaseYear}
          label="Movie Release Year"
          name="movieReleaseYear"
          handleChange={this.handleChange}
        />
        <TextInputField
          value={this.state.movieRuntime}
          label="Movie Runtime (in minutes)"
          name="movieRuntime"
          handleChange={this.handleChange}
        />

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
export default FormContainer;
