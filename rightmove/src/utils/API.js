import axios from "axios";

export default {
  // Gets all the landing page information
  getLandingPage: function() {
    return axios.get("localhost:8000/api/landingpage");
  },
};
