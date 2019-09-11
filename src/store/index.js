import { createStore } from 'redux';
import { Map as map } from 'immutable';

// REDUCERS
import rootReducer from 'reducers/';

const store = createStore(
  rootReducer,
  map()
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
