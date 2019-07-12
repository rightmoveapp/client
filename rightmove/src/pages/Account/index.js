import React, { Component } from "react";
import API from "../../utils/API";
import Col from '../../components/Col';
import Row from '../../components/Row';
import JobList from '../../components/JobList';
import './style.css';
import YellowUnderline from "../../components/YellowUnderline";
import CurrentJob from "../../components/CurrentJob";
// import userProfile from '../../userProfile.json';

class Account extends Component {
  state = {
    userProfile: [],
    currentJob: [],
    possibleJobs: []
  }
  componentDidMount() {
    this.dividJobs();
  }
  dividJobs = () => {
    API.getUserAccount()
      .then(response => {
        this.setState({ userProfile: response.data })
        console.log(response.data.jobs)

        let jobs = [];
        for (let i = 0; i < this.state.userProfile.jobs.length; i++) {
          if (this.state.userProfile.jobs[i].is_current) {
            this.setState({ currentJob: this.state.userProfile.jobs[i] })
          }
          else {
            jobs.push(this.state.userProfile.jobs[i])
          }
        }
        this.setState({ possibleJobs: jobs })

        })
  };

  percentage = (number) => {
    let percentageFit = parseFloat(number) * 100
    return percentageFit
  }

render() {
  const possibleJobsMap = this.state.possibleJobs.map((job) => {
    return (
      <JobList
        key={job.id}
        role={job.role}
        company_name={job.company_name}
        score={this.percentage(job.score)}
      />
    );
  });
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
          <CurrentJob
            company_name={this.state.currentJob.company_name}
            role={this.state.currentJob.role}
            score={this.percentage(this.state.currentJob.score)}
          />
          <div className="WhiteRectangle-Jobs">
            <h4 className="Top-Gigs">Top Gigs</h4>
            {possibleJobsMap}
            <div className="right-align Make-Font-Smaller">
              <YellowUnderline text="See All" to="/jobs" />
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}
}
export default Account;