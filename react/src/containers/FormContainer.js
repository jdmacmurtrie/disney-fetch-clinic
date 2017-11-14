import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      releaseYear: '',
      runtime: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleChangeTitle = this.handleChangeTitle.bind(this)
    this.handleChangeReleaseYear = this.handleChangeReleaseYear.bind(this)
    this.handleChangeRuntime = this.handleChangeRuntime.bind(this)
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value })
  }

  handleChangeReleaseYear(event) {
    this.setState({ releaseYear: event.target.value })
  }

  handleChangeRuntime(event) {
    this.setState({ runtime: event.target.value })
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = {
      title: this.state.title,
      release_year: this.state.releaseYear,
      runtime: this.state.runtime
    }
    this.props.addNewMovie(formPayload)
    this.handleClearForm()
  }

  handleClearForm() {
    this.setState({
      title: '',
      releaseYear: '',
      runtime: ''
    })
  }

  render() {
    return(
      <form className='callout' onSubmit={this.handleFormSubmit}>
        <TextInputField
          label="Movie Title"
          name="movieTitle"
          value={this.state.title}
          handleFormChange={this.handleChangeTitle}
        />
        <TextInputField
          label="Movie Release Year"
          name="movieReleaseYear"
          value={this.state.releaseYear}
          handleFormChange={this.handleChangeReleaseYear}
        />
        <TextInputField
          label="Movie Runtime (in minutes)"
          name="movieRuntime"
          value={this.state.runtime}
          handleFormChange={this.handleChangeRuntime}
        />

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default FormContainer;
