import React, {PropTypes} from 'react';

const TextInput = (props) => {
  return (
    <div className = "form-group row">
      <label className="col-3">{props.label}</label>
      <input className="form-control col-9" type="text"></input>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default TextInput;