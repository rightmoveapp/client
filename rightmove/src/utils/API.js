import axios from "axios";

export default {
  // Gets all the landing page information
  getLandingPage: function() {
    return axios.get("/api/landingpage");
  },
};
