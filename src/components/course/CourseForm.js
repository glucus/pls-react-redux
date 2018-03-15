import React, { PropTypes } from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ( {course} ) => {

  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput 
        name = "title" 
        label = "Title" 
      />
      <SelectInput 
        name = "courseIsFree"
        label = "Free Course"
      />
    </form>
  );
};

CourseForm.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseForm;