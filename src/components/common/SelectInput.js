import React, {PropTypes} from 'react';


// const ComponentName = (props) => {...};
// option.value --> author's id

const SelectInput = ({name, label, value, defaultOption, 
 options, onChange, error}) => {

  return (
    <div className = "form-group row">
      <label className="col-3" htmlFor={name}>{label}</label>
      <select className="form-control col-9" 
              type="checkbox"
              name={name}
              value={value}>
        <option value="">{defaultOption}</option>
        {options.map(
          option => (<option key={option.value} value={option.value}>
                      {option.text}
                     </option>) 
        )}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf (PropTypes.object),
  onChange: PropTypes.function,
  error: PropTypes.string 
};

export default SelectInput;