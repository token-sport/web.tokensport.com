import React, { Component, Fragment } from 'react';

// COMPONENTS
import Layouthome from 'components/LayoutHome';
import { ToastContainer } from 'react-toastify';
import Toast from 'components/shared/Toast';
import 'react-toastify/dist/ReactToastify.css';

// FIREBASE
import { firebase } from 'config/';

class Home extends Component {

  state = {
    nameForm: '',
    lastNameForm: '',
    emailForm: '',
    isVisibleOffCanvas: false,
  }

  handleClickMenu = () => this.setState({ isVisibleOffCanvas: !this.state.isVisibleOffCanvas })

  handleOnChange = (event, name) => this.setState({ [name]: event.target.value })

  handleSubmitForm = async (event) => {
    event.preventDefault()
    try {
      const { nameForm: name, lastNameForm: lastname, emailForm: email } = this.state
      await firebase.collection('earlyusers').add({ name, lastname, email })
      this.handleClearFields()
      Toast('Good Job! :)', 'BOTTOM_RIGHT', false)
    } catch (error) {
      Toast('Something wrong happened! :(', 'BOTTOM_RIGHT', true)
      throw new Error(error)
    }
  }

  handleClearFields = () => this.setState({ nameForm: '', lastNameForm: '', emailForm: '' })

  render() {
    const { nameForm, lastNameForm, emailForm } = this.state
    return (
      <Fragment>
        <Layouthome
          handleOnChange={this.handleOnChange}
          nameForm={nameForm}
          lastNameForm={lastNameForm}
          emailForm={emailForm}
          handleSubmitForm={this.handleSubmitForm}
          isVisibleOffCanvas={this.state.isVisibleOffCanvas}
          handleClickMenu={this.handleClickMenu} />
        <ToastContainer />
      </Fragment>
    )
  }
}


export default Home;