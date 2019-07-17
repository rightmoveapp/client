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
  // TODO: make this better 
  state = {
    userProfile: [],
    currentJob: [],
    possibleJobs: [],
    company_size: "0.02",
    cultural_alignment: "0.04",
    office_space: "0.02",
    office_location: "0.01",
    commute_distance: "0.03",
    remote: "0.01",
    menteeship: "0.04",
    gaining_experience: "0.03",
    acheivements: "0.02",
    learn_new_things: "0.02",
    org_structure: "0.01",
    directing_architecting: "0.01",
    mentorship: "0.07",
    direct_reports: "0.01",
    adversity: "0.02",
    family_benefits: "0.02",
    time_off: "0.07",
    options: "0.05",
    $$$$$: "0.25",
    worth: "0.05",
    company_mission: "0.05",
    workflow_maturity: "0.03",
    intensity: "0.06",
    management: "0.06"
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

        const subcatergory_array = response.data.subcategories;
        

        // TODO: make this better
        for (let i = 0; i < subcatergory_array.length; i++) {
          if (subcatergory_array[i].name === "Company Size") {
            this.setState({ company_size: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Cultural Alignment") {
            this.setState({ cultural_alignment: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Office Space") {
            this.setState({ office_space: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Office Location") {
            this.setState({ office_location: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Commute Distance") {
            this.setState({ commute_distance: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Remote") {
            this.setState({ remote: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Menteeship") {
            this.setState({ menteeship: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Gaining Experience") {
            this.setState({ gaining_experience: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Acheivements") {
            this.setState({ acheivements: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Learn New Things") {
            this.setState({ learn_new_things: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Org Structure") {
            this.setState({ org_structure: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Directing/Architecting") {
            this.setState({ directing_architecting: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Mentorship") {
            this.setState({ mentorship: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Direct Reports") {
            this.setState({ direct_reports: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Adversity to change") {
            this.setState({ adversity: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Family Benefits") {
            this.setState({ family_benefits: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Time Off") {
            this.setState({ time_off: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Options") {
            this.setState({ options: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "$$$$$") {
            this.setState({ $$$$$: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Global Sense of Worth") {
            this.setState({ worth: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Company Mission") {
            this.setState({ company_mission: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Workflow maturity") {
            this.setState({ workflow_maturity: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Intensity") {
            this.setState({ intensity: subcatergory_array[i].value })
          }
          if (subcatergory_array[i].name === "Management") {
            this.setState({ management: subcatergory_array[i].value })
          }

        }
      })
  };

  /* makeGraph = () => {
    API.getUserGraph()
      .then(response => {
        console.log(response.data)
      })
  } */
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
          "color": "#ff716b",
          "children": [
            {
              "title": "Company Size",
              "color": "#FFA4A1",
              size: this.state.company_size
            },
            {
              "title": "Cultural Alignment",
              "color": "#FFB6B4",
              size: this.state.cultural_alignment
            },
            {
              "title": "Office Space",
              "color": "#FFC5C3",
              size: this.state.office_space
            }
          ]
        },
        {
          "title": "Commute",
          "label": "Commute",
          "color": "#F2A378",
          "children": [
            {
              "title": "Office Location",
              "color": "#F5B593",
              size: this.state.office_location
            },
            {
              "title": "Commute Distance",
              "color": "#F7C4A9",
              size: this.state.commute_distance
            },
            {
              "title": "Remote",
              "color": "#F9D0BA",
              size: this.state.remote
            }
          ]
        },
        {
          "title": "Learning",
          "label": "Learning",
          "color": "#FEE07D",
          "children": [
            {
              "title": "Menteeship",
              "color": "#FEE697",
              size: this.state.menteeship
            },
            {
              "title": "Gaining Experience",
              "color": "#FEEBAC",
              size: this.state.gaining_experience
            },
            {
              "title": "Acheivements",
              "color": "#FEEFBD",
              size: this.state.acheivements
            },
            {
              "title": "Learn New Things",
              "color": "#FEF7DD",
              size: this.state.learn_new_things
            }
          ]
        },
        {
          "title": "Growth",
          "label": "Growth",
          "color": "#36a6a4",
          "children": [
            {
              "title": "Org Structure",
              "color": "#5EB8B6",
              size: this.state.org_structure
            },
            {
              "title": "Directing/Architecting",
              "color": "#7EC6C5",
              size: this.state.directing_architecting
            },
            {
              "title": "Mentorship",
              "color": "#98D1D1",
              size: this.state.mentorship
            },
            {
              "title": "Direct Reports",
              "color": "#ADDADA",
              size: this.state.direct_reports
            }
          ]
        },
        {
          "title": "Wellness",
          "label": "Wellness",
          "color": "#75C3D8",
          "children": [
            {
              "title": "Adversity to change",
              "color": "#91CFE0",
              size: this.state.adversity
            },
            {
              "title": "Family Benefits",
              "color": "#B9E1EB",
              size: this.state.family_benefits
            },
            {
              "title": "Time Off",
              "color": "#D2ECF2",
              size: this.state.time_off
            }
          ]
        },
        {
          "title": "Compensation",
          "label": "Comp",
          "color": "#a5d8ff",
          "children": [
            {
              "title": "Options",
              "color": "#C5E6FF",
              size: this.state.options
            },
            {
              "title": "$$$$$",
              "color": "#DAEFFF",
              size: this.state.$$$$$
            }
          ]
        },
        {
          "title": "Purpose",
          "label": "Purpose",
          "color": "#889AAC",
          "children": [
            {
              "title": "Global Sense of Worth",
              "color": "#A0AEBD",
              size: this.state.worth
            },
            {
              "title": "Company Mission",
              "color": "#B3BECA",
              size: this.state.company_mission
            }
          ]
        },
        {
          "title": "Workday",
          "label": "Workday",
          "color": "#9D91C2",
          "children": [
            {
              "title": "Workflow maturity",
              "color": "#B1A7CE",
              size: this.state.workflow_maturity
            },
            {
              "title": "Intensity",
              "color": "#C1B9D8",
              size: this.state.intensity
            },
            {
              "title": "Management",
              "color": "#CDC7E0",
              size: this.state.management
            }
          ]
        }
      ]
    }

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
          </Col>
        </Row>
        <Row>
          <Col size="s12 m6 l6">
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
          </Col>
          <Col size="s12 m6 l6" className="remove-all-padding">
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