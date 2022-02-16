import React from 'react'
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <>
      <Link to='/sign_in'>Sign In</Link>
      <Link to='/sign_up'>Sign Up</Link>
      <Link to='/anon'>Anon</Link>
    </>
  )
}
