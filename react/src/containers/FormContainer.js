import React, { Component } from 'react';
import TextInputField from '../components/TextInputField'

class FormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleFormSubmit(event) {
  }

  handleClearForm(event) {
  }

  render() {
    return(
      <form className='callout' onSubmit={this.handleFormSubmit}>
        <TextInputField
          label="Movie Title"
          name="movieTitle"
        />
        <TextInputField
          label="Movie Release Year"
          name="movieReleaseYear"
        />
        <TextInputField
          label="Movie Runtime (in minutes)"
          name="movieRuntime"
        />

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default FormContainer;
