import axios from "axios";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

let getCookie =  function(){
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookies.get("token")
}

getCookie();

export default {
// Gets all the landing page information
getLandingPage: function() {
  return axios.get("https://api.redstapler.app/api/landingpage");
},

// Gets all questions
getUserAttrQuestions: function() {
  return axios.get(`https://api.redstapler.app/v1/userquestions`);
},

//Posts to suer attributes answers
postUserAttrAnswers: function(userAnswers) {
  return axios.post(`https://api.redstapler.app/v1/userattranswers`, userAnswers);
},

// Gets all user account information
getUserAccount: function() {
  return axios.get(`https://api.redstapler.app/v1/account`);
},

// Gets all job questions
getJobQuestions: function() {
  return axios.get(`https://api.redstapler.app/v1/jobquestions`);
},

//Posts to user basic answers
postUserBasicAnswers: function(userAnswers) {
  return axios.post(`https://api.redstapler.app/v1/userbasicanswers`, userAnswers);

},

postUserJobAnswers: function(jobAnswers) {
  return axios.post(`https://api.redstapler.app/v1/userjobanswers`, jobAnswers);

},


}
