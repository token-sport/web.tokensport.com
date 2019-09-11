import React, { useCallback } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';

// COMPONENTS
import Links from 'components/shared/Links';

// TYPES
import { SWITCH_PATH_LOCATION } from 'actionTypes/';
import { SWITCH_OFF_CANVAS_VISIBILITY } from 'actionTypes/';

// STYLES
import OffCanvasMenuContainer from './styles';

const OffCanvasMenu = () => {

  // REDUX Mapped HOOK
  const mapState = useCallback(state => ({
    navLinks: state.getIn(['language', 'contentLang', 'navLinks']),
    isVisibleOffCanvas: state.getIn(['offCanvasVisibility', 'isVisible']),
  }), [])

  const {
    navLinks,
    isVisibleOffCanvas
  } = useMappedState(mapState);

  // REDUX Dispatch HOOK
  const dispatch = useDispatch();

  const changePathLocation = useCallback(value => {
    return (
      dispatch({
        type: SWITCH_PATH_LOCATION,
        value
      }),
      []
    );
  })

  const handleClickMenu = useCallback(path => {
    changePathLocation(path);
    return (
      dispatch({
        type: SWITCH_OFF_CANVAS_VISIBILITY,
        value: !isVisibleOffCanvas
      }),
      []
    );
  });

  return (
    <OffCanvasMenuContainer 
      isVisibleOffCanvas={isVisibleOffCanvas}>
      <Links
        arrLink={navLinks.toJS()}
        isColumn
        handleClickMenu={handleClickMenu}/>
    </OffCanvasMenuContainer>
  );
}

export default OffCanvasMenu;
