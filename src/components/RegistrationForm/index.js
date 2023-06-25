import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErrorMsg: '',
    lastNameErrorMsg: '',
    isSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true, firstName: '', lastName: ''})
    } else if (firstName === '' && lastName !== '') {
      this.setState({
        firstNameErrorMsg: 'Required',
      })
    } else if (lastName === '' && firstName !== '') {
      this.setState({lastNameErrorMsg: 'Required'})
    } else {
      this.setState({
        firstNameErrorMsg: 'Required',
        lastNameErrorMsg: 'Required',
      })
    }
  }

  onBlurFirstNameInput = () => {
    const {firstName} = this.state

    if (firstName === '') {
      this.setState({firstNameErrorMsg: 'Required'})
    } else {
      this.setState({firstNameErrorMsg: ''})
    }
  }

  onBlurLastNameInput = () => {
    const {lastName} = this.state

    if (lastName === '') {
      this.setState({lastNameErrorMsg: 'Required'})
    } else {
      this.setState({lastNameErrorMsg: ''})
    }
  }

  renderFirstNameInput = () => {
    const {firstName, firstNameErrorMsg} = this.state

    return (
      <div className="name-input-container">
        <label className="input-label" htmlFor="firstNameInput">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstNameInput"
          className="name-input"
          onBlur={this.onBlurFirstNameInput}
          onChange={this.onChangeFirstName}
          placeholder="First name"
          value={firstName}
        />
        <p className="error-msg">{firstNameErrorMsg}</p>
      </div>
    )
  }

  renderLastNameInput = () => {
    const {lastName, lastNameErrorMsg} = this.state

    return (
      <div className="name-input-container">
        <label className="input-label" htmlFor="lastNameInput">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastNameInput"
          className="name-input"
          onBlur={this.onBlurLastNameInput}
          onChange={this.onChangeLastName}
          placeholder="Last name"
          value={lastName}
        />
        <p className="error-msg">{lastNameErrorMsg}</p>
      </div>
    )
  }

  renderRegistrationForm = () => (
    <>
      <h1 className="heading">Registration</h1>
      <form className="form" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameInput()}
        {this.renderLastNameInput()}
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </>
  )

  onClickAnotherResponse = () => {
    this.setState({isSubmitted: false})
  }

  renderSuccessCard = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="success-msg">Submitted Successfully</p>
      <button
        type="button"
        className="button"
        onClick={this.onClickAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isSubmitted} = this.state

    return (
      <div className="bg-container">
        <div className="app-container">
          {isSubmitted
            ? this.renderSuccessCard()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
