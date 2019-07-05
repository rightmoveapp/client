import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import Cookies from 'universal-cookie';
import axios from "axios";

const cookies = new Cookies();
const apihost = "http://localhost:8000/api/v1/login"

class LinkedinAuth extends Component {

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        console.log(`value code ${values.code}`)
        const authCode = values.code
        this.getToken(authCode)
    }

    getToken = authCode =>{
        axios.post(apihost, {Authorization: `Bearer ${authCode}`})
          .then(res => {
            cookies.set("token", res.data.token, {path:"/"})
            this.renderRedirect();
          })
          .catch((error) => {
            cookies.remove("token", {path:"/"})
        })
      }

      renderRedirect = () => {
          return <Redirect to='/account'/>
      }


    render() {
        return (
            <>
                {this.renderRedirect()}
              </>
        )
    }
}

export default LinkedinAuth;