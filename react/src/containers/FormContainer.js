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
  }

  render() {
    return(
      <form className='callout' onSubmit={}>
        <TextInputField
          value={}
          label="Movie Title"
          name="movieTitle"
          handleChange={}
        />
        <TextInputField
          value={}
          label="Movie Release Year"
          name="movieReleaseYear"
          handleChange={}
        />
        <TextInputField
          value={}
          label="Movie Runtime (in minutes)"
          name="movieRuntime"
          handleChange={}
        />

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}
export default FormContainer;
