import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CoursesList from './CoursesList';

class CoursesPage extends React.Component {

  constructor (props, context) {
    super (props, context);
  }
   
  render () {
    return (
      <div>
        <h1>Courses</h1>
        <CoursesList courses = {this.props.courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired
};

// state is state within the redux store
function mapStateToProps (state, ownProps) {
  return {
    courses: state.courses  // from rootReducer
  };
}

  //defines what actions will be available to the component
function mapDispatchToProps (dispatch) {
  return {
    createCourse: course => dispatch (courseActions.createCourse(course))
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (CoursesPage);

// wrap component in the connect() function 
// in order to communicate component with with redux
