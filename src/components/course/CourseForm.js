import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// const ComponentName = (props) => {...};
const CourseForm = (
  {course, authors, onChange, onSave, saving, errors}
) => {

  return (
      <form>
        <h1>Manage Course</h1>
        <TextInput 
          name = "title" 
          label = "Title"
          value = {course.title}
          onChange = {onChange}
          error = {errors.title} 
        />
        <SelectInput 
          name = "authorId"
          label = "Author"
          value = {course.authorId}
          defaultOption = "Select Author"
          options = {authors}
          onChange = {onChange}
          error = {errors.authorId} 
        />
        <TextInput 
          name = "category" 
          label = "Category"
          value = {course.category}
          onChange = {onChange}
          error = {errors.category} 
        />
        <TextInput 
          name = "length" 
          label = "Length"
          value = {course.length}
          onChange = {onChange}
          error = {errors.length} 
        />
        <button 
          type = "submit"
          disabled = {saving}
          onClick = {onSave}
          className = "btn btn-primary">
        {saving ? 'Saving...' : 'Save'}
      </button>
      </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired, 
  authors: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool, 
  errors: PropTypes.object
};

export default CourseForm;