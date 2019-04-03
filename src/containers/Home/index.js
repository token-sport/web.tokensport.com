import React, { Fragment, useState, useEffect, useCallback } from "react";
import { useDispatch } from "redux-react-hook";
import { object } from "prop-types";

// COMPONENTS
import Layouthome from "components/LayoutHome";
import { ToastContainer } from "react-toastify";
import Toast from "components/shared/Toast";
import "react-toastify/dist/ReactToastify.css";

// FIREBASE
import { firebase } from "config/";

// TYPES
import { SWITCH_PATH_LOCATION } from "actionTypes/";

const Home = ({ location }) => {
  const pathLocation = location.pathname;
  const [formFields, setFormFields] = useState({
    nameForm: "",
    lastNameForm: "",
    emailForm: ""
  });

  // REDUX Dispatch HOOK
  const dispatch = useDispatch();

  const changePathLocation = useCallback(path => {
    return (
      dispatch({
        type: SWITCH_PATH_LOCATION,
        value: path
      }),
      []
    );
  });

  useEffect(() => {
    changePathLocation(pathLocation);
  }, []);

  const handleOnChange = (event, name) => {
    setFormFields({ ...formFields, [name]: event.target.value });
  };

  const handleSubmitForm = async event => {
    event.preventDefault();
    try {
      const {
        nameForm: name,
        lastNameForm: lastname,
        emailForm: email
      } = formFields;
      await firebase.collection("earlyusers").add({ name, lastname, email });
      handleClearFields();
      Toast("Good Job! :)", "BOTTOM_RIGHT", false);
    } catch (error) {
      Toast("Something wrong happened! :(", "BOTTOM_RIGHT", true);
      throw new Error(error);
    }
  };

  const handleClearFields = () =>
    setFormFields({ nameForm: "", lastNameForm: "", emailForm: "" });

  return (
    <Fragment>
      <Layouthome
        handleOnChange={handleOnChange}
        nameForm={formFields.nameForm}
        lastNameForm={formFields.lastNameForm}
        emailForm={formFields.emailForm}
        handleSubmitForm={handleSubmitForm}
      />
      <ToastContainer />
    </Fragment>
  );
};

Home.propTypes = {
  location: object
}

export default Home;
