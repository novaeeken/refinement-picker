import { combineReducers } from 'redux';
import ColleaguesReducer from './reducer_colleagues';

const rootReducer = combineReducers({
  colleagues: ColleaguesReducer,
});

export default rootReducer;
