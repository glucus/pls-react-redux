import {combineReducers} from 'redux';
import courses from './courseReducers';  // importing default with alias

const rootReducer = combineReducers ({
  courses  // same as courses: courses
});

export default rootReducer;