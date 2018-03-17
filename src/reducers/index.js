import {combineReducers} from 'redux';
import courseReducers from './courseReducer';  // importing default with alias
import authorReducers from './authorReducer';

const rootReducer = combineReducers ({
  courses: courseReducers,
  authors: authorReducers
  // or can use alias in named import and then here {courses, authors, etc...}
});

export default rootReducer;
// used in index.js -> configureStore
// let store = createStore(reducer)