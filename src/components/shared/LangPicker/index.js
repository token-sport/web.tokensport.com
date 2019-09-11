import React, { useCallback } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import { fromJS } from "immutable";
import { array } from "prop-types";

// COMPONENTS
import LangItem from "components/shared/LangItem";
import LangItems from "components/shared/LangItems";
import Image from "components/shared/Image";
import LangPickerContainer from "./styles";

// ACTION TYPES
import {
  SWITCH_LANG,
  SWITCH_LANG_PICKER_VISIBILITY
} from "actionTypes/";

// LANG
import LANG from "lang/";

// ASSETS
import arrow from "assets/arrow@2x.png";

const LangPicker = ({ langs }) => {
  // REDUX MappedState HOOK
  const mapState = useCallback(state => ({
    nameLang: state.getIn(["language", "nameLang"]),
    flagLang: state.getIn(["language", "flagLang"]),
    pickerIsVisible: state.getIn(["pickerVisibility", "isVisible"])
  }));

  const { nameLang, flagLang, pickerIsVisible } = useMappedState(mapState);

  // REDUX Dispatch HOOK
  const dispatch = useDispatch();

  const handleChangeLang = useCallback((name, src) => {
    handleChangeVisibility();
    return (
      dispatch({
        type: SWITCH_LANG,
        content: fromJS(LANG[name]),
        name,
        src
      }), []
    );
  });

  const handleChangeVisibility = useCallback(
    () =>
      dispatch({
        type: SWITCH_LANG_PICKER_VISIBILITY,
        value: !pickerIsVisible
      }),
    [pickerIsVisible]
  );

  return (
    <LangPickerContainer>
      <LangItem
        src={flagLang}
        name={nameLang}
        handleClickLang={handleChangeVisibility}
        isSelected
      />
      <div onClick={handleChangeVisibility}>
        <Image
          src={arrow}
          width="12px"
          height="8px"
          alt="arrow"
          isPickerActive={pickerIsVisible}
        />
      </div>
      {pickerIsVisible && (
        <LangItems languages={langs} handleClickLang={handleChangeLang} />
      )}
    </LangPickerContainer>
  );
};

LangPicker.propTypes = {
  langs: array
};

export default LangPicker;
