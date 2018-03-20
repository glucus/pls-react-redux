import * as types from './actionTypes';
import CourseApi from '../api/mockCourseApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';


export function loadCoursesSuccess (courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses: courses };
}

export function updateCourseSuccess (course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course: course};
  }
  
export function createCourseSuccess (course) {
    return {type: types.CREATE_COURSE_SUCCESS, course: course};
}
  

// thunks -- return function (dispatch) 

export function loadCourses () {
    return function (dispatch) {
        
        dispatch (beginAjaxCall());
        const getCourses = CourseApi.getAllCourses();  
        // api call returns a promise
        // or can make ajax call here instead of calling api

        return getCourses.then(
            data => dispatch (loadCoursesSuccess (data)),
            () => console.error (new Error ('courses not loaded'))
        );
    };
}


export function saveCourse (course) {
  return function (dispatch) {

    dispatch (beginAjaxCall());

    return CourseApi.saveCourse(course).then(
        data => { 
                  data.id ? dispatch (updateCourseSuccess(data)) : 
                  dispatch (createCourseSuccess(data)); 
                }
    ).catch(err => {
        dispatch (ajaxCallError (err));
        throw err;
    });
};
}


