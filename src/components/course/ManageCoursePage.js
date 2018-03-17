import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as authorsActions from '../../actions/authorActions';
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
  }

  // container component passes part of its {state} as {props} 
  // to child presentation component <CourseForm/>
  render () {
    return (
      <div>
        <CourseForm
          authors={this.props.authors}
          course={this.state.course}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

// checking format of incoming data
ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.arrayOf(PropTypes.object).isRequired
};

 // state - from redux store
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

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators (courseActions, authorsActions, dispatch)
    // makes actions available as this.props.actions
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (ManageCoursePage);