import axios from 'axios';

export const FETCH_COLLEAGUES_START = 'fetch_colleagues_start';
export const FETCH_COLLEAGUES_ERROR = 'fetch_colleagues_error';
export const FETCH_COLLEAGUES_SUCCES = 'fetch_colleagues_succes';
export const UPDATE_COLLEAGUES_START = 'update_colleagues_start';
export const UPDATE_COLLEAGUES_ERROR = 'update_colleagues_error';
export const UPDATE_COLLEAGUES_SUCCES = 'update_colleagues_succes';

export const SET_AVAILABLE_COLLEAGUE = 'set_available_colleague';
export const REMOVE_AVAILABLE_COLLEAGUE = 'remove_available_colleague';
export const SET_PICKED_COLLEAGUES = 'set_picked_colleagues';

const fetchColleaguesStart = () => ({
  type: FETCH_COLLEAGUES_START,
});

const fetchColleaguesError = () => ({
  type: FETCH_COLLEAGUES_ERROR,
});

const fetchColleaguesSucces = payload => ({
  type: FETCH_COLLEAGUES_SUCCES,
  payload,
});

export const fetchColleagues = () => (dispatch) => {
  dispatch(fetchColleaguesStart());

  axios.get('https://refinementpicker.firebaseio.com/collegas.json')
    .then((response) => {
      dispatch(fetchColleaguesSucces(response.data));
    })
    .catch((error) => {
      dispatch(fetchColleaguesError(error));
    });
};

export const setAvailableColleague = payload => ({
  type: SET_AVAILABLE_COLLEAGUE,
  payload,
});

export const removeAvailableColleague = payload => ({
  type: REMOVE_AVAILABLE_COLLEAGUE,
  payload,
});

export const setPickedColleagues = payload => ({
  type: SET_PICKED_COLLEAGUES,
  payload,
});

const updateColleaguesStart = () => ({
  type: UPDATE_COLLEAGUES_START,
});

const updateColleaguesError = () => ({
  type: UPDATE_COLLEAGUES_ERROR,
});

const updateColleaguesSucces = () => ({
  type: UPDATE_COLLEAGUES_SUCCES,
});

export const updateColleagues = updatedbase => (dispatch) => {
  dispatch(updateColleaguesStart());

  axios.put('https://refinementpicker.firebaseio.com/collegas.json', updatedbase)
    .then((response) => {
      dispatch(updateColleaguesSucces(response));
    })
    .catch((error) => {
      dispatch(updateColleaguesError(error));
    });
};

