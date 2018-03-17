import * as types from '../actions/actionTypes';
import initialState from './initialState';


// takes in state from store and action and retuns new state based on them

export default function authorReducer (state = initialState.authors, action) {
  switch (action.type) {
    
    case types.LOAD_AUTHORS_SUCCESS: 
     return action.authors;

    default: 
      return state;
  }
}