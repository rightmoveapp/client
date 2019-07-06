import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LogOut extends Component {

    componentDidMount() {
        cookies.remove("token", {path:"/"})
        this.props.updateLogin(false);
    }

      renderRedirect = () => {
          return <Redirect to='/'/>
      }


    render() {
        return (
            <>
                {this.renderRedirect()}
              </>
        )
    }
}

export default LogOut;