import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess (authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors: authors };
}

// thunk for asynchronous call to api
export function loadAuthors () {

   return function (dispatch) {

    const getCourses = AuthorApi.getAllAuthors();
    // call to api returns a promise

    return getCourses.then(
      data => dispatch (loadAuthorsSuccess (data)),
      () => console.error (new Error ('authors not loaded'))
    );

   };
}