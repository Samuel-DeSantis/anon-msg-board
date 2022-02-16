import React, { Component } from 'react'
import { connect } from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import { login, logout } from "../../actions";

class Anon extends Component {

  state = {
    clicked: false,
    message: 'Continue as anonymous?'
  }
  
  handleOnClick = () => {
    if (!this.state.clicked) {
      const id = uuidv4()
      this.setState({
        clicked: true,
        message: `Your Anon ID is: ${id}`
      })
       setTimeout(() => {
        this.setState({
          ...this.state,
          clicked: false
        })
        this.props.login({
          id: id,
          username: 'anonymous'
        })
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