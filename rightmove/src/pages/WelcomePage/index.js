import React from "react";
import Row from '../../components/Row';
import Col from '../../components/Col';
import SmallYellowButton from '../../components/SmallYellowButton';
import "./style.css";

const WelcomePage = (props) => {
	return (
		<>
			<Row>
				<Col size="s12 m12 l12">
					<h4 className="heading">Welcome! <span role="img" aria-label="wave">👋</span></h4>
					<p>
						We’re here to help you take control of your career.
          </p>
					<p>
						By answering questions about yourself, we’ll be able to create a <span className="text-style-2">Snapshot</span> of who you are— your likes, dislikes, and what is important to you. We’ll use this <span className="text-style-2">Snapshot</span> to measure whether or not a job is a good fit for you.
          </p>
				</Col>
			</Row>
			<Row>
				<Col size="s12 m12 l12 right-align">
					<SmallYellowButton text="Continue →" to="/basicquestions"/>
				</Col>
			</Row>
		</>
	)
}

export default WelcomePage;