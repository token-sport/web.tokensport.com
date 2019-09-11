import { fromJS } from 'immutable';

// ACTION TYPES
import { SWITCH_LANG } from 'actionTypes/';

// DEFAULT LANG
import ES from 'lang/ES';

const initialState = fromJS({
  contentLang: ES,
  nameLang: 'ES',
  flagLang: 'https://firebasestorage.googleapis.com/v0/b/token-sport.appspot.com/o/circleFlags%2FSpain-flag%402x.png?alt=media&token=868ff8a7-0afd-4532-9f6f-f237042aab38'
});

export default function language(state = initialState, action) {
  switch (action.type) {
  case SWITCH_LANG:
    return state.merge({
      'contentLang': action.content,
      'nameLang': action.name,
      'flagLang': action.src
    });
  default:
    return state;
  }
}
