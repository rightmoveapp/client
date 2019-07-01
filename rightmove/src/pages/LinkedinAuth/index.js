import React, { Component } from "react";
import Container from '../../components/Container';

class LinkedinAuth extends Component {
    componentDidMount() {
        this.checkResponse();
    }

    checkResponse = () => {
        return true;
    };

    render() {
        return (
            <Container>
                <div>Auth Code: {this.props.location.search}</div>
            </Container>
        )
    }
}

export default LinkedinAuth;