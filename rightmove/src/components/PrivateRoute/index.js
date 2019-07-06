import React from "react";
import { Redirect, Route } from 'react-router-dom'
import axios from 'axios';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(`res log is ${rest.loggedIn}`)
  console.log(`Component is ${Component}`)

  return(
  <Route {...rest} render={(props) => (
    rest.loggedIn === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />)
}
export default PrivateRoute


