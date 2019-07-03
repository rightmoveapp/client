import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LinkedinAuth extends Component {
    state = {
        redirect: false,

      }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        console.log(`value code ${values.code}`)
        const token = values.code
        cookies.set("token", token, {path:"/"})
        console.log(`my cookie is ${cookies.get('token')}`);
        this.setRedirect();
        this.renderRedirect();
    }

      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={{
            pathname: '/v1/login',}} />
        }
      }


    render() {
        return (
            <>
                {/* // <div>Auth Code: {this.props.location.search}</div> */}

              </>
        )
    }
}

export default LinkedinAuth;