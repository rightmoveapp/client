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
  return axios.get("http://localhost:8000/api/landingpage");
},
// Gets all questions
getUserAttrQuestions: function() {
  return axios.get(`http://localhost:8000/v1/userquestions`);
},
//Posts to suer attributes answers
postUserAttrAnswers: function(userAnswers) {
  return axios.post(`http://localhost:8000/v1/userattranswers`, userAnswers);

},

getUserAccount: function() {
  return axios.get(`http://localhost:8000/v1/account`);
},

getJobQuestions: function() {
  return axios.get(`http://localhost:8000/v1/jobquestions`);
},

}
