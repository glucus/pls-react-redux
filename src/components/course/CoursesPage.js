import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

  constructor (props, context) {
    super (props, context);
    this.state = {
      course: { title: "" }
    };

    this.onTitleChange = this.onTitleChange.bind (this);  
    this.onClickSave = this.onClickSave.bind(this);
      // to bind 'this' to the component
      // not to the element from which handler is called
  }
  
  onTitleChange (event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState ( {course: course} );
  } 

  onClickSave() {
    this.props.dispatch (courseActions.createCourse (this.state.course));
    // dispatch() function is injected by connect() by default
    // if we didn't provide mapDispatchToProps function there
    // alert (`Saving ${this.state.course.title}`);
  }
  
  courseRow (course, index) {
    return <div key={index}>{course.title}</div>;
  }
  // used in array.map(courseRow) will return an array of <div> elements

  render () {
    debugger;
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map (this.courseRow)}
        <h2>Add Course</h2>
        <input type = "text" 
               onChange = {this.onTitleChange}
               value = {this.state.course.title} />
        <input type = "submit"
               value="Save"
               onClick = {this.onClickSave} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

// state is state within the redux store
function mapStateToProps (state, ownProps) {
  debugger;
  return {
    courses: state.courses  // from rootReducer
  };
}

/*
function mapDispatchToProps (dispatch) {
  return {
    createCourse(course) { dispatch (courseActions.createCourse(course)); }
  };
}
*/

export default connect(mapStateToProps /*, mapDispatchToProps*/) (CoursesPage);

// CoursesPage is now wrapped in connect() function 
// in order to communicate with redux
