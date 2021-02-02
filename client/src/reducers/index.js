import { combineReducers } from 'redux';
import auth from './auth';
import ad from './ad';
import alert from './alert';

export default combineReducers({
  alert,
  auth,
  ad,
});
