import React from 'react';
import expect from 'expect';  // assertion library
import {mount, shallow} from 'enzyme';
import CourseForm from './CourseForm';


/*
describe ('some test', 
  () => it ('should pass', () => expect(true).toEqual(true))
);
 */

// with Enzyme
function setup (saving = false) {

  const props = {
    course: {}, 
    saving: saving, 
    errors: {},
    onSave: () => {}, 
    onChange: () => {}
};
  return shallow (<CourseForm {...props} />);
  // shallow render
}


describe ('CourseForm', () => {

  it ('component should render form', () => {
    const wrapper = setup ();
    expect (wrapper.find ('form').length ).toBe (1);
    expect (wrapper.find ('h1').text() ).toEqual ('Manage Course');
  });

  it ('save button should be of type submit', () => {
    const wrapper = setup ();
    expect (wrapper.find ('button').props().type ).toBe ('submit');
  });
   
  it ('save button should be labeled "Save" when not saving', () => {
    const wrapper = setup (false);
    expect (wrapper.find ('button').text() ).toBe ('Save');
  });

  it ('save button should be labeled "Saving..." when saving', () => {
  const wrapper = setup (true);
  expect (wrapper.find ('button').text() ).toBe ('Saving...');
  });



});