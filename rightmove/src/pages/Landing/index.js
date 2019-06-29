import React, { Component } from "react";
import Container from '../../components/Container';
import Button from '../../components/Button';
import './style.css';


class Landing extends Component {
    state = {
        landingPage_tagLine: "",
        landingPage_description: "",
        landingPage_howItWorks: "",
    }

    componentDidMount() {
        this.loadLandingPage();
    }

    // Loads all books  and sets them to this.state.books
    loadLandingPage = () => {
        API.getLandingPage()
            .then(res =>
                this.setState({ landingPage_tagLine: "", landingPage_description: "", landingPage_howItWorks: "" })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <div className="Catchy-Tagline">{this.state.landingPage_tagLine}</div>
                <p className="Body-Copy">{this.state.landingPage_description}</p>
                <Button />
            </Container>
        )
    }
}

export default Landing;