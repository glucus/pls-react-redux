import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CoursesList from './CoursesList';
import { browserHistory } from 'react-router';

class CoursesPage extends React.Component {

  constructor (props, context) {
    super (props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind (this);
  }
  
  redirectToAddCoursePage () {
    browserHistory.push ('/course');
  }

  render () {
    return (
      <div>
        <h1>Courses</h1>
        <button type="submit"
                className="btn btn-primary"
                onClick={this.redirectToAddCoursePage}>
          Add Course
        </button>
        <CoursesList courses = {this.props.courses} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  saveCourse: PropTypes.func.isRequired
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
    saveCourse: course => dispatch (courseActions.saveCourse(course))
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (CoursesPage);

// wrap component in the connect() function 
// in order to communicate component with with redux
