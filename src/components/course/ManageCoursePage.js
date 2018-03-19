import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import CourseForm from './CourseForm';

// props: course, allAuthors, onSave, onChange, loading, errors
class ManageCoursePage extends React.Component {

  constructor (props, context) {
    super (props, context);

    this.state = {
      course: Object.assign ({}, props.course),
     // authors: props.authors, 
      errors: {}
    };

    this.updateCourseState = this.updateCourseState.bind(this);
    this.saveCourse = this.saveCourse.bind(this);
  }
  

  // event handlers
  updateCourseState (event) {
    const field = event.target.name;
    let course = Object.assign ({}, this.state.course);
    course[field] = event.target.value;
    return this.setState({course: course});
  }

  saveCourse (event) {
    event.preventDefault();
    this.props.saveCourse(this.state.course);
  }

  // container component passes part of its {state} as {props} 
  // to child presentation component <CourseForm/>
  render () {
    return (
      <div>
        <CourseForm
          authors = {this.props.authors}
          course = {this.state.course}
          onChange = {this.updateCourseState}
          onSave = {this.saveCourse}
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
  loadAuthors: PropTypes.function,
  saveCourse: PropTypes.function
};

 // state - coming from redux store
 // makes available properties of component's state 
 // for passing them as props to child componets

function mapStateToProps (state, ownProps) {
  let course = {
    id: '',
    title: '',
    watchHref: '',
    authorId: '',
    length: '',
    category: ''
  };
  
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