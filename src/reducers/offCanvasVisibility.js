import { fromJS } from "immutable";

// TYPES
import { SWITCH_OFF_CANVAS_VISIBILITY } from "actionTypes/";

const initialState = fromJS({
  isVisible: false
});

export default function offCanvasVisibility(state = initialState, action) {
  switch (action.type) {
  case SWITCH_OFF_CANVAS_VISIBILITY:
    return state.set("isVisible", action.value);
  default:
    return state;
  }
}

