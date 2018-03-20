import {combineReducers} from 'redux';
import courseReducers from './courseReducer';  // importing default with alias
import authorReducers from './authorReducer';
import ajaxStatusReducer from './ajaxStatusReducer';

const rootReducer = combineReducers ({
  courses: courseReducers,
  authors: authorReducers,
  ajaxCallsInProgress: ajaxStatusReducer
  // or can use alias in named import: {courses, authors, etc...}
});

export default rootReducer;
// used in index.js -> configureStore
// let store = createStore(reducer)