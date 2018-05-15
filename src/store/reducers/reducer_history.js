import {
  FETCH_HISTORY_START,
  FETCH_HISTORY_ERROR,
  FETCH_HISTORY_SUCCES,
  UPDATE_HISTORY_START,
  UPDATE_HISTORY_ERROR,
  UPDATE_HISTORY_SUCCES,
} from '../actions/history';

const initialState = {
  fetching: false,
  updating: false,
  error: false,
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HISTORY_START:
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case FETCH_HISTORY_ERROR:
      return {
        ...state,
        fetching: false,
        error: true,
      };
    case FETCH_HISTORY_SUCCES:
      return {
        ...state,
        fetching: false,
        error: false,
        history: action.payload,
      };
    case UPDATE_HISTORY_START:
      return {
        ...state,
        updating: true,
        error: false,
      };
    case UPDATE_HISTORY_ERROR:
      return {
        ...state,
        updating: false,
        error: true,
      };
    case UPDATE_HISTORY_SUCCES:
      return {
        ...state,
        updating: false,
        error: false,
      };

    default:
      return state;
  }
};
