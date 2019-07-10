import React, { Component } from "react";
import Col from '../../components/Col';
import Row from '../../components/Row';
import JobList from '../../components/JobList';
import './style.css';
import YellowUnderline from "../../components/YellowUnderline";
import CurrentJob from "../../components/CurrentJob";


class Account extends Component {
  render() {
    return (
      <>
        <Row>
          <Col size="s12 m12 l12">
            <div className="There-are-new-questi YellowRectangle">
              <p className="Add-Overall-Padding">
                There are new questions for you to answer!
                <span className="Add-Space-Left Remove-Bold"><YellowUnderline to="/questions" text="Answer Questions" /></span>
              </p>
            </div>
            <CurrentJob />
            <div className="WhiteRectangle-Jobs">
              <h4 className="Top-Gigs">Top Gigs</h4>
              <JobList />
              <div className="right-align Make-Font-Smaller">
              <YellowUnderline text="See All" to="/jobs"/>
              </div>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}

export default Account;