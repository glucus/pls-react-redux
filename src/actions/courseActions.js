import * as types from './actionTypes';

// action creators
export function createCourse (course) {
  return { type: types.CREATE_COURSE, course: course };  
}

