import React, { Component } from "react";
import API from "../../utils/API";
import Col from '../../components/Col';
import Row from '../../components/Row';
import JobList from '../../components/JobList';
import './style.css';
import YellowUnderline from "../../components/YellowUnderline";
import CurrentJob from "../../components/CurrentJob";
import YellowAlert from "../../components/YellowAlert";
import { Sunburst } from 'react-vis';
/* import UserGraph from "../../components/UserGraph"; */
/* import BasicSunburst from "../../components/Sunburst"; */
//import userProfile from '../../userProfile.json';
/* import fillerJobs from '../../fillerJobs.json'; */


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

  makeGraph = () => {
    API.getUserGraph()
      .then(response => {
        console.log(response.data)
      })
  }
  /* percentage = (number) => {
    let percentageFit = parseFloat(number) * 100
    return percentageFit
  } */


  render() {
    const myData = {
      "title": "flare",
      "children": [
          {
              "title": "Culture",
              "label": "Culture",
              "color": "#47375a",
              "children": [
                  {
                      "title": "Company Size",
                      "color": "#6C5F7B",
                      "size": 0.02
                  },
                  {
                      "title": "Cultural Alignment",
                      "color": "#6C5F7B",
                      "size": 0.04
                  },
                  {
                      "title": "Office Space",
                      "color": "#6C5F7B",
                      "size": 0.02
                  }
              ]
          },
          {
              "title": "Commute",
              "label": "Commute",
              "color": "#52507f",
              "children": [
                  {
                      "title": "Office Location",
                      "color": "#757399",
                      "size": 0.01
                  },
                  {
                      "title": "Commute Distance",
                      "color": "#918FAD",
                      "size": 0.03
                  },
                  {
                      "title": "Remote",
                      "color": "#A7A5BD",
                      "size": 0.01
                  }
              ]
          },
          {
              "title": "Learning",
              "label": "Learning",
              "color": "#647ea1",
              "children": [
                  {
                      "title": "Menteeship",
                      "color": "#8398B4",
                      "size": 0.04
                  },
                  {
                      "title": "Gaining Experience",
                      "color": "#9CADC3",
                      "size": 0.03
                  },
                  {
                      "title": "Acheivements",
                      "color": "#B0BDCF",
                      "size": 0.02
                  },
                  {
                      "title": "Learn New Things",
                      "color": "#C0CAD9",
                      "size": 0.02
                  }
              ]
          },
          {
              "title": "Growth",
              "label": "Growth",
              "color": "#74b5c3",
              "children": [
                  {
                      "title": "Org Structure",
                      "color": "#90C4CF",
                      "size": 0.01
                  },
                  {
                      "title": "Directing/Architecting",
                      "color": "#A6D0D9",
                      "size": 0.01
                  },
                  {
                      "title": "Mentorship",
                      "color": "#B8D9E1",
                      "size": 0.07
                  },
                  {
                      "title": "Direct Reports",
                      "color": "#C6E1E7",
                      "size": 0.01
                  }
              ]
          },
          {
              "title": "Wellness",
              "label": "Wellness",
              "color": "#83e6d6",
              "children": [
                  {
                      "title": "Adversity to change",
                      "color": "#9CEBDE",
                      "size": 0.02
                  },
                  {
                      "title": "Family Benefits",
                      "color": "#B0EFE5",
                      "size": 0.02
                  },
                  {
                      "title": "Time Off",
                      "color": "#C0F2EA",
                      "size": 0.07
                  }
              ]
          },
          {
              "title": "Compensation",
              "label": "Comp",
              "color": "#abe7d5",
              "children": [
                  {
                      "title": "Options",
                      "color": "#BCECDD",
                      "size": 0.05
                  },
                  {
                      "title": "$$$$$",
                      "color": "#C9F0E4",
                      "size": 0.25
                  }
              ]
          },
          {
              "title": "Purpose",
              "label": "Purpose",
              "color": "#cdecde",
              "children": [
                  {
                      "title": "Global Sense of Worth",
                      "color": "#D7F0E5",
                      "size": 0.05
                  },
                  {
                      "title": "Company Mission",
                      "color": "#DFF3EA",
                      "size": 0.05
                  }
              ]
          },
          {
              "title": "Workday",
              "label": "Workday",
              "color": "#e8f4ed",
              "children": [
                  {
                      "title": "Workflow maturity",
                      "color": "#EDF6F1",
                      "size": 0.03
                  },
                  {
                      "title": "Intensity",
                      "color": "#F1F8F4",
                      "size": 0.06
                  },
                  {
                      "title": "Management",
                      "color": "#F4F9F6",
                      "size": 0.06
                  }
              ]
          }
      ]
  }

    this.makeGraph()
    const possibleJobsMap = this.state.possibleJobs.map((job) => {
      return (
        <JobList
          key={job.id}
          role={job.role}
          company_name={job.company_name}
          score={job.score}
        />
      );
    });
    return (
      <>
        <Row>
          <Col size="s12 m12 l12">
            <YellowAlert />
            <div>
              <CurrentJob
                company_name={this.state.currentJob.company_name}
                role={this.state.currentJob.role}
                score={this.state.currentJob.score}
              />
              <div className="WhiteRectangle-Jobs">
                <h4 className="Top-Gigs">Top Gigs</h4>
                {possibleJobsMap}
                <div className="right-align Make-Font-Smaller">
                  <YellowUnderline text="Add Job" to="/jobquestions" />
                </div>
              </div>
            </div>
            <Sunburst
              hideRootNode
              colorType="literal"
              data={myData}
              height={400}
              width={450} />
          </Col>
        </Row>
      </>
    )
  }
}
export default Account;