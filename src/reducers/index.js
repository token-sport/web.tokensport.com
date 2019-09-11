import { combineReducers } from 'redux-immutable';

// REDUCERS
import language from './language';
import pickerVisibility from './pickerVisibility';
import offCanvasVisibility from './offCanvasVisibility';
import pathLocation from './pathLocation';

const rootReducer = combineReducers ({
  language,
  pickerVisibility,
  offCanvasVisibility,
  pathLocation
});

export default rootReducer;

