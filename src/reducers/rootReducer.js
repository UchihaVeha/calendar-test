import { combineReducers } from 'redux';
import weeks from './weekReducers';

const reducers = {
  weeks
};

export default combineReducers(reducers);
