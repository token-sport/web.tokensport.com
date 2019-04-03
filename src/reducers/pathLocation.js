import { fromJS } from 'immutable';

// TYPES
import { SWITCH_PATH_LOCATION } from 'actionTypes/';

const initialState = fromJS({
  location: ""
})

export default function pathLocation (state = initialState, action) {
  switch (action.type) {
  case SWITCH_PATH_LOCATION:
    return state.set('location', action.value);
  default:
    return state;
  }
}

