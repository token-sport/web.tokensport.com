import { fromJS } from 'immutable';

// ACTION TYPES
import { SWITCH_LANG_PICKER_VISIBILITY } from 'actionTypes/';

// INITIAL STATE
const initialState = fromJS({
  isVisible: false
})

export default function pickerVisibility (state = initialState, action) {
  switch (action.type) {
  case SWITCH_LANG_PICKER_VISIBILITY:
    return state.set('isVisible', action.value);
  default:
    return state;
  }
}
