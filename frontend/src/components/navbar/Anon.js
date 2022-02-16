import React, { Component } from 'react'
import { connect } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { login, logout } from "../../actions";

const URL = 'http://localhost:5000/'

class Anon extends Component {

  state = {
    clicked: false,
    message: 'Continue as anonymous?'
  }

  formatState = (id) => Object.assign({}, {user: {status: 'SIGN_UP', username: `anon: ${id}`, password: 'anonymous'}})
  
  btnClick = (id) => {
    this.setState({
      clicked: true,
      message: `Your Anon ID is: ${id}`
    })
  }
  
  btnUnclick = () => {
    this.setState({
      ...this.state,
      clicked: false
    })
  }

  handleOnClick = () => {
    if (!this.state.clicked) {

      const id = uuidv4()
      const SUFFIX = 'users'

      this.btnClick(id)
    
      fetch(URL + SUFFIX, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.formatState(id))
      })
      .then(response => response.json())
      .then(result => {
        console.log('Success: ', result)
        if (result !== undefined) {
          this.props.login({
            id: result.id,
            username: result.username
          })
        }
      })
      .then(error => console.log('Error :', error));


      setTimeout(() => {
        this.btnUnclick()
        this.props.history.push('/messages')
      }, 3000) 
    }
  }
  
  render() {
    return (
      <div id='continue-anon'>
        <h2>{this.state.message}</h2>
        <button onClick={this.handleOnClick}>Continue</button>
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    login: (userInfo) => dispatch(login(userInfo)),
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatch)(Anon)