import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import Cookies from 'universal-cookie';
import axios from 'axios';
import LoadingGif from "../../components/LoadingGif";

const cookies = new Cookies();
const apiUrl = "http://localhost:8000/v1/login"

class LinkedinAuth extends Component {
    state = {
        loading:true
    }

    loadData = () => {
      const values = queryString.parse(this.props.location.search)
      const authToken = values.code
    //   this.setState({ loading: true });
      axios({
            method: 'post',
            url: apiUrl,
            headers: {
            Authorization: 'Bearer ' + authToken
           }
      })
      .then(response => {
        cookies.set("token", response.data.token, {path:"/"})
        this.props.updateLogin(true)
        this.props.updateUserName(response.data.first_name.charAt(0).toUpperCase() + response.data.first_name.slice(1))
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
        this.setState({
          loading: false
        });
      })
      .catch(error => {
        cookies.remove("token", {path:"/"})
        this.props.updateLogin(false)
        this.setState({
        error: `${error}`,
          loading: false
        });
      });
  };

  componentDidMount() {
    this.loadData();
  }


    render() {
        const loading = this.state.loading

        if(loading){
            return ( 
              <LoadingGif />
            )
        }
        else{

            return (
                <Redirect to ="/welcome"/>
        )
        }
    }
}

export default LinkedinAuth;
