import React from 'react';

const TextInputField = props => {
  return(
    <label>{props.label}
      <input
        name={props.name}
        type='text'
        value={props.value}
      />
    </label>
  )
}

export default TextInputField;
