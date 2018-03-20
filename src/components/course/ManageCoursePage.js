import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

// props: course, allAuthors, onSave, onChange, loading, errors
class ManageCoursePage extends React.Component {

  constructor (props, context) {
    super (props, context);

    // local state (additional to the one that is in redux store)
    this.state = {
      course: Object.assign ({}, props.course),  // comes from redux store
      errors: {},
      saving: false
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }

  // react lifecycle function will be called any time props might have changed
  // to populate form when existing course is loaded directly

  componentWillReceiveProps (nextProps) {
    if (this.props.course.id != nextProps.course.id) {
      this.setState ( {course: Object.assign ({}, nextProps.course)} );
    }
  }
  

  // event handlers
  updateCourseState (event) {
    const field = event.target.name;
    let course = Object.assign ({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  redirect () {
    this.context.router.push ('/courses');
    toastr.success ('Course saved');
    this.setState ({saving: false});
  }

  saveCourse (event) {
    event.preventDefault();
    this.setState( {saving: true} );
    this.props.saveCourse(this.state.course)
      .then (
        () => this.redirect()
     ).catch (err => {
       toastr.error (err);
       this.setState ( {saving: false} );
      });
    }

    // won't redirect to the courses page until 
    // promise returned by Api call is resolved
    // saveCourse() action is a thunk - makes asyncronous call to api


  // container component passes part of its {state} as {props} 
  // to child presentation component <CourseForm/>
  render () {
    return (
      <div>
        <CourseForm
          course = {this.state.course}
          authors = {this.props.authors}
          onChange = {this.updateCourseState}
          onSave = {this.saveCourse}
          saving = {this.state.saving}
          errors = {this.state.errors}
        />
      </div>
    );
  }
}

// checking format of incoming data
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired
};

// pulls React Router context so router is availabe on this.context.router.
ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCouseById (courses, id) {
  const coursesFound = courses.filter (course => course.id == id);
  // filter returns an array
  if (coursesFound.length > 0) return coursesFound[0];
  else return null;
}

 // state - comes from redux store
function mapStateToProps (state, ownProps) {

  let course = {id: '', title: '', watchHref: '', authorId: '', length: '', category: ''};

  const courseId = ownProps.params.id;
  // from the url '/course/:id' in the route for this component
  
  // for state.courses to be loaded before getCourseById function call
  if (courseId && state.courses.length > 0) {
    course = getCouseById (state.courses, courseId);
  }
  
  // transforming data coming from api to the format needed for dropdown
  const authorsForDropdown = state.authors.map (
    author => { 
      return {
        value: author.id,
        text: author.firstName + ' ' + author.lastName
      };
  });

  // returns state object
  return { 
    course: course, 
    authors: authorsForDropdown 
  };  
}

  // makes actions available to props 
function mapDispatchToProps (dispatch) {
  return {
    loadAuthors: () => dispatch (authorActions.loadAuthors()),
    saveCourse: course => dispatch (courseActions.saveCourse(course))
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (ManageCoursePage);