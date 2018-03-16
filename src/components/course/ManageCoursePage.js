import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

// props: course, allAuthors, onSave, onChange, loading, errors
class ManageCoursePage extends React.Component {
  constructor (props, context) {
    super (props, context);

    this.state = {
      course: Object.assign ({}, props.course),
      errors: {}
    };
  }

  // container component passes part of its {state} as {props} 
  // to child presentation component <CourseForm/>
  render () {
    return (
      <div>
        <CourseForm
          allAuthors= {[]}
          course={this.state.course}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
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
  return { course: course };  // return state
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators (courseActions, dispatch)
    // makes actions available as this.props.actions
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (ManageCoursePage);