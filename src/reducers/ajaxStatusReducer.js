import * as types from '../actions/actionTypes';
import initialState from './initialState';

//The substring() method returns the part of the string 
// between the start and end indexes, or to the end of the string.

function actionTypeEndsInSuccess (actionType) {
  return actionType.substring (actionType.length - 8) == '_SUCCESS';
}

export default function ajaxCallReducer (state = initialState.ajaxCallsInProgress, action) {
  
  // will add 1 to the number of ajax calls in process in the state
  // for each dispatched action with type 'begin_ajax_call' 
  // and subtract 1 for each action ended
  
  if (action.type == types.BEGIN_AJAX_CALL) {
    return state + 1;
    
  } else if (action.type == types.AJAX_CALL_ERROR || 
    actionTypeEndsInSuccess (action.type)) {
    return state - 1;
  } else return state;
}