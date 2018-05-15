import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ColleaguesReducer from './reducer_colleagues';
import HistoryReducer from './reducer_history';
import AuthenticationReducer from './reducer_authentication';

const rootReducer = combineReducers({
  colleagues: ColleaguesReducer,
  history: HistoryReducer,
  authenticated: AuthenticationReducer,
  form: formReducer,
});

export default rootReducer;
