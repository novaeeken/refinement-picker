import axios from 'axios';

// fetch colleague objects
export const FETCH_COLLEAGUES_START = 'fetch_colleagues_start';
export const FETCH_COLLEAGUES_ERROR = 'fetch_colleagues_error';
export const FETCH_COLLEAGUES_SUCCES = 'fetch_colleagues_succes';

// update colleage
export const UPDATE_COLLEAGUES_START = 'update_colleagues_start';
export const UPDATE_COLLEAGUES_ERROR = 'update_colleagues_error';
export const UPDATE_COLLEAGUES_SUCCES = 'update_colleagues_succes';

// set candidates for refinement
export const SET_AVAILABLE_COLLEAGUE = 'set_available_colleague';
export const REMOVE_AVAILABLE_COLLEAGUE = 'remove_available_colleague';
export const SET_PICKED_COLLEAGUES = 'set_picked_colleagues';

// reset the whole thing
export const RESET_REFINEMENTPICKER = 'reset_refinementpicker';

// remember initial name in form field
export const SET_ORIGINAL_COLLEAGUE = 'set_original_colleague';

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

export const fetchColleagues = () => (dispatch, getState) => {
  const state = getState();

  if (state.colleagues.colleagues.length === 0) {
    dispatch(fetchColleaguesStart());
    axios.get(process.env.FIREBASE_URL)
      .then((response) => {
        dispatch(fetchColleaguesSucces(response.data));
      })
      .catch((error) => {
        dispatch(fetchColleaguesError(error));
      });
  }
};

const updateColleaguesStart = () => ({
  type: UPDATE_COLLEAGUES_START,
});

const updateColleaguesError = () => ({
  type: UPDATE_COLLEAGUES_ERROR,
});

const updateColleaguesSucces = payload => ({
  type: UPDATE_COLLEAGUES_SUCCES,
  payload,
});

export const updateColleagues = updatedbase => (dispatch) => {
  dispatch(updateColleaguesStart());

  axios.put(process.env.FIREBASE_URL, updatedbase)
    .then((response) => {
      dispatch(updateColleaguesSucces(response));
    })
    .catch((error) => {
      dispatch(updateColleaguesError(error));
    });
};

export const editColleague = newName => (dispatch, getState) => {
  const state = getState();
  const colleagues = state.colleagues.colleagues;
  const index = colleagues.findIndex(element =>
    element.name.toLowerCase() === state.colleagues.originalName.toLowerCase(),
  );
  colleagues[index].name = newName;
  dispatch(updateColleagues(colleagues));
};

export const deleteColleague = colleague => (dispatch, getState) => {
  const state = getState();
  const colleagues = state.colleagues.colleagues;
  const index = colleagues.findIndex(element =>
    element.name.toLowerCase() === colleague.toLowerCase(),
  );
  colleagues.splice(index, 1);
  dispatch(updateColleagues(colleagues));
};

export const addColleague = newColleague => (dispatch, getState) => {
  const state = getState();
  const colleagues = state.colleagues.colleagues;
  // if this name already excist, testForDuplicates will contain an item
  const testForDuplicates = colleagues.find(element =>
    element.name.toLowerCase() === newColleague.toLowerCase(),
  );

  if (!testForDuplicates) {
    // add new object to the array
    colleagues.push(
      {
        count: 0,
        name: `${newColleague}`,
      },
    );
    dispatch(updateColleagues(colleagues));
  }
};

export const setAvailableColleague = payload => ({
  type: SET_AVAILABLE_COLLEAGUE,
  payload,
});

export const removeAvailableColleague = payload => ({
  type: REMOVE_AVAILABLE_COLLEAGUE,
  payload,
});

export const resetRefinementpicker = payload => ({
  type: RESET_REFINEMENTPICKER,
  payload,
});

export const setPickedColleagues = payload => ({
  type: SET_PICKED_COLLEAGUES,
  payload,
});

export const setOriginalColleague = payload => ({
  type: SET_ORIGINAL_COLLEAGUE,
  payload,
});

