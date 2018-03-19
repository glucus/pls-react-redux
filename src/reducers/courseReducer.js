/* 
reducer is a function that takes in state and action and returns a new state

Reducers must be pure functions:
-  have same output each time given same arguments
-  don't affect anything else
________
function myReducer (state, action) {
 switch (action.type) {
   case 'INCREMENT_COUTER' {
       return Object.assign ({}, state, {counter: state.counter + 1});
   }
  }
}
*/

import * as types from '../actions/actionTypes';
import initialState from './initialState';


  // state here is an array of courses (a slice of state object)
  // --> function should return array of courses

export default function courseReducer (state = initialState.courses, action) {

  switch (action.type) {
    
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
       
    case types.CREATE_COURSE_SUCCESS: 
      return [...state, Object.assign ({}, action.course)];
      // immutable way of pushing pushing new elements -- to the clone of state array
    
    case types.UPDATE_COURSE_SUCCESS:
      return [...state.filter (course => course.id !== action.course.id),
               Object.assign ({}, action.course)];

    // arr.filter() creates a new array with elements of arr 
    // matching the creteria function

    default: 
      return state;
  }
}