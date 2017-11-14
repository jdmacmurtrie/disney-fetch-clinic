import React from 'react';

const TextInputField = props => {
  return(
    <label>{props.label}
      <input
        type='text'
      />
    </label>
  )
}

export default TextInputField;
