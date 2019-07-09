import axios from "axios";

export default {
  // Gets all the landing page information
  /* getLandingPage: function() {
    return axios.get("localhost:8000/api/landingpage");
  }, */

  // Gets all questions
  getUserAttrQuestions: function() {
    console.log("im in the request")
    return axios.get(`http://localhost:8000/v1/userquestions`);

  },
};
