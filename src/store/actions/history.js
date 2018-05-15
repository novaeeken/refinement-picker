import axios from 'axios';

export const FETCH_HISTORY_START = 'fetch_history_start';
export const FETCH_HISTORY_ERROR = 'fetch_history_error';
export const FETCH_HISTORY_SUCCES = 'fetch_history_succes';

export const UPDATE_HISTORY_START = 'update_history_start';
export const UPDATE_HISTORY_ERROR = 'update_history_error';
export const UPDATE_HISTORY_SUCCES = 'update_history_succes';

const updateHistoryStart = () => ({
  type: UPDATE_HISTORY_START,
});

const updateHistoryError = () => ({
  type: UPDATE_HISTORY_ERROR,
});

const updateHistorySucces = payload => ({
  type: UPDATE_HISTORY_SUCCES,
  payload,
});

const fetchHistoryStart = () => ({
  type: FETCH_HISTORY_START,
});

const fetchHistoryError = () => ({
  type: FETCH_HISTORY_ERROR,
});

const fetchHistorySucces = payload => ({
  type: FETCH_HISTORY_SUCCES,
  payload,
});

export const updateHistory = pickedNames => (dispatch) => {
  dispatch(updateHistoryStart());

  const newHistoryItem = {
    date: new Date(),
    names: [pickedNames.name1, pickedNames.name2],
  };

  axios.post('https://refinementpicker.firebaseio.com/geschiedenis.json', newHistoryItem)
    .then((response) => {
      dispatch(updateHistorySucces(response));
    })
    .catch((error) => {
      dispatch(updateHistoryError(error));
    });
};

export const fetchHistory = () => (dispatch) => {
  dispatch(fetchHistoryStart());
  axios.get('https://refinementpicker.firebaseio.com/geschiedenis.json')
    .then((response) => {
      // firebase stores arrays as objects with random objectkeys
      // thus we store the funky objectkeys in seperate array
      const keys = Object.keys(response.data);
      // then replace the array elements with the value of that particular key
      const history = keys.map(element => response.data[element]);
      dispatch(fetchHistorySucces(history));
    })
    .catch((error) => {
      dispatch(fetchHistoryError(error));
    });
};
