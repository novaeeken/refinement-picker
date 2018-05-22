import {
  FETCH_COLLEAGUES_START,
  FETCH_COLLEAGUES_ERROR,
  FETCH_COLLEAGUES_SUCCES,
  UPDATE_COLLEAGUES_START,
  UPDATE_COLLEAGUES_ERROR,
  UPDATE_COLLEAGUES_SUCCES,
  SET_AVAILABLE_COLLEAGUE,
  REMOVE_AVAILABLE_COLLEAGUE,
  SET_PICKED_COLLEAGUES,
  SET_ORIGINAL_COLLEAGUE,
} from '../actions/colleagues';

const initialState = {
  fetching: false,
  updating: false,
  error: false,
  originalName: '',
  colleagues: [],
  available: [],
  picked: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_COLLEAGUES_START:
      return {
        ...state,
        fetching: true,
        error: false,
      };
    case FETCH_COLLEAGUES_ERROR:
      return {
        ...state,
        fetching: false,
        error: true,
      };
    case FETCH_COLLEAGUES_SUCCES:
      return {
        ...state,
        fetching: false,
        error: false,
        colleagues: action.payload,
      };
    case UPDATE_COLLEAGUES_START:
      return {
        ...state,
        updating: true,
        error: false,
      };
    case UPDATE_COLLEAGUES_ERROR:
      return {
        ...state,
        updating: false,
        error: true,
      };
    case UPDATE_COLLEAGUES_SUCCES:
      return {
        ...state,
        updating: false,
        error: false,
        colleagues: action.payload.data,
      };
    case SET_AVAILABLE_COLLEAGUE:
      return {
        ...state,
        available: [...state.available, action.payload],
      };
    case REMOVE_AVAILABLE_COLLEAGUE:
      return {
        ...state,
        available: state.available.filter(person => person !== action.payload),
      };
    case SET_PICKED_COLLEAGUES:
      return {
        ...state,
        picked: action.payload,
      };
    case SET_ORIGINAL_COLLEAGUE:
      return {
        ...state,
        originalName: action.payload,
      };
    default:
      return state;
  }
}
