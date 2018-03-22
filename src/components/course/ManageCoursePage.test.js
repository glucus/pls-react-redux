import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import  { ManageCoursePage } from './ManageCoursePage';


// for testing a connected component either import an unconnected version of it
// or wrap it in <Prover store={store}>...</Provider> to connect it to redux store like in index.js

describe ('ManageCoursePage', () => {

  it ( 'should set error message when trying to save course with empty title',
  () => {

    const props = {
      authors: [],
      course: {id: '', title: '', watchHref: '', authorId: '', length: '', category: ''},
      saveCourse: () => Promise.resolve()
    };

    const wrapper = mount (<ManageCoursePage {...props}/>);

    const saveButton = wrapper.find ('button').last();
    expect (saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect (wrapper.state().errors.title).toBe ('Title must be at least 5 characters');

    // using enzyme mount() to render a component with its child components  in a virtual DOM
    // as we need <input> from child <CourseForm /> component
    // as it's a connected component, we need to wrap it in <Provider>

    });

});