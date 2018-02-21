import React, { Component } from 'react';

class FormContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <form className='callout'>

        <div className="button-group">
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default FormContainer;
