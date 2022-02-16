import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Links from '../components/navbar/Links';
import NavRoutes from '../components/navbar/NavRoutes';

export default class NavbarContainer extends Component {
  render() {
    return (
      <nav className='navbar'>
          <Links />
          <NavRoutes />
      </nav>
    )
  }
}
