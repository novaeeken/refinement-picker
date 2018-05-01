import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const makeStore = (initialState = {}, AllActions) => {
  const middleware = [thunk]
    .filter(x => !!x); // filter alle undefined waarden eruit

  const composers = []
    .concat(window.devToolsExtension && [window.devToolsExtension()])
    .filter(x => !!x);

  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        ...middleware,
      ),
      ...composers,
    ),
  );
};

export default makeStore;
