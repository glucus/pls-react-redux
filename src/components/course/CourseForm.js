import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

// const ComponentName = (props) => {...};
const CourseForm = ( {course, authors, onSave, 
  onChange, loading, errors} ) => {

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
        <button type="submit"
              disabled={loading}
              className="btn btn-primary">
        {loading ? 'Saving...' : 'Save'}
      </button>
      </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired, 
  authors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.boolean, 
  errors: PropTypes.object
};

export default CourseForm;