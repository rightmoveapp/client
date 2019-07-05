import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LogOut extends Component {
  
  updateLogin = () =>{
    this.props.updateLogin()
  }

    componentDidMount() {
        cookies.remove("token", {path:"/"})
        this.updateLogin();
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