import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'


class LinkedinAuth extends Component {
    state = {
        redirect: false,
        auth_token: ""
      }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search)
        console.log(values.code)
        const token = values.code
        this.setAuthToken(token)
        this.setRedirect();
        this.renderRedirect();
    }

    setAuthToken = token => {
        this.setState({
          auth_token: token
        })
        console.log(`this is current state ${this.state.auth_token}`)
      }

      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to={{
            pathname: '/v1/login',
            state: { auth_token: this.state.auth_token}
          }} />
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