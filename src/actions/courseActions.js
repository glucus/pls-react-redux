import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';

// action creators
export function createCourse (course) {
  return { type: types.CREATE_COURSE, course: course };  
}

// thunk -- return function (dispatch) 

export function loadCoursesSuccess (courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

export function loadCourses () {
    return function (dispatch) {

        const getCourses = CourseApi.getAllCourses();  
        // api call returns a promise
        // or can make ajax call here instead of calling api

        return getCourses.then(
            data => dispatch (loadCoursesSuccess (data)),
            () => console.error (new Error ('courses not loaded'))
        );
    };
}

