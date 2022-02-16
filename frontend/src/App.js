import React, { Component } from 'react'
import NavbarContainer from './containers/NavbarContainer';
import Home from './components/Home';
import { connect, useSelector } from "react-redux";
import { login, logout } from "./actions";

class App extends Component {



  render () {
    return (
      <div>
        <NavbarContainer />
      </div>
    );
  }
}



const mapDispatch = dispatch => {
  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout())
  }
}
/* connect(mapStateToPRops, mapDispatchToProps) */
export default connect(null,mapDispatch)(App);
