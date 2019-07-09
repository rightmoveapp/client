import axios from "axios";

export default {
  // Gets all the landing page information

  getLandingPage: function() {
    return axios.get("localhost:8000/api/landingpage");
  },

// Gets all questions
getUserAttrQuestions: function() {
  return axios.get(`${process.env.REACT_APP_API_URL}/v1/userquestions`);
},
};
