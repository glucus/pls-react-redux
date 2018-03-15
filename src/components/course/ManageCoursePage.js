import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  render () {
    return (
      <div>
        <CourseForm />
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  // prop: PropTypes.string.isRequired  
};

 // state - from redux store
function mapStateToProps (state, ownProps) {
  return { state: state }; 
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators (courseActions, dispatch)
    // makes actions available as this.props.actions
  };
}

export default connect (mapStateToProps, mapDispatchToProps) (ManageCoursePage);