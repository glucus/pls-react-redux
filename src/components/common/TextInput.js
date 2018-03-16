import React, {PropTypes} from 'react';

const TextInput = (props) => {

  let formClass = 'form-group row';
  if (props.error && props.error.length > 0)  {
    formClass += ' ' + 'has-error';
  }


  return (
    <div className = {formClass}>
      <label className="col-3" htmlFor={props.name}>
        {props.label}
      </label>
      <input className="form-control col-9" 
             type="text"
             name={props.name}
             value={props.value}
             onChange={props.onChange}>
      </input>
      {props.error && <div className="alert alert-danger">
                      {props.error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.function,
  error: PropTypes.string
};

export default TextInput;