/* 
reducer is a function that takes in state and an action and returns new state

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

export default function courseReducer (state = [], action) {

  switch (action.type) {

    case 'CREATE_COURSE':
      debugger;
      return [ ...state, Object.assign ({}, action.course) ];
    
    default: 
      return state;
  }
}