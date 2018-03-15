import React, {PropTypes} from 'react';

const SelectInput = (props) => {
  return (
    <div className = "form-group row">
      <label className="col-3">{props.label}</label>
      <input 
        className="form-control col-1" 
        type="checkbox"
      ></input>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default SelectInput;