import React, { Component } from "react";
import Col from '../../components/Col';
import Row from '../../components/Row';
import './style.css';
import YellowUnderline from "../../components/YellowUnderline";


class Account extends Component {
  render() {
    return (
      <>
        <Row>
          <Col size="s12 m12 l12">
            <div className="There-are-new-questi YellowRectangle">
              <p className="Add-Overall-Padding">
                There are new questions for you to answer!
                
                <span className="Add-Space-Left Remove-Bold"><YellowUnderline to="/questions" text="Answer Questions"/></span>
              </p>
            </div>
            <div className="WhiteRectangle">
              <h4 className="Current-Job-Title">UX Designer</h4>
              <h2 className="Current-Job-Company">RevZilla</h2>
              <div className="Oval">
                <h4 className="XX">XX%</h4>
              </div>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}

export default Account;