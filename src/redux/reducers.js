/* reducer func : returns a new state based on the old state and assigned action */
import {combineReducers} from 'redux';
import {
  AUTH_SUCCESS,
  ERROR_MSG
} from './action-types'
//                new state, assign action
const initUser = {
  username:'',
  type:'',
  msg:'',
  redirectTo:''
}
function user(state=initUser, action){
  switch(action.type){
    case AUTH_SUCCESS:
      return {...action.data, redirectTo: '/'};
    case ERROR_MSG:
      return {...state, msg: action.data};
    default:
      return state
  }
}
export default combineReducers({
 user
})
