import { combineReducers } from 'redux';
import records from './records';
import isEditModeOn from "./isEditModeOn";


export default combineReducers({
  records,
  isEditModeOn
});