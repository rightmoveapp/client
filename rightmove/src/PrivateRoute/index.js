import React from "react";
import { Redirect, Route } from 'react-router-dom'
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authToken = cookies.get('token', {path:"/"});
    const hasCookie = (typeof authToken !== "undefined" && authToken !== "");
    axios.defaults.headers.post['Authorization'] = 'Bearer ' + authToken

    return (
        <Route
          {...rest}
          render={props =>
            hasCookie? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
          }
        />
      )
}
export default PrivateRoute