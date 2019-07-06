import React from "react";
import { Redirect, Route } from 'react-router-dom'
import axios from 'axios';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.loggedIn === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
  )
export default PrivateRoute