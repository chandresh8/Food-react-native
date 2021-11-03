import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Ku-I5W5sqM_ss0dIbTUy8TRduDbFP1YtfbVgAnyWUzifYSfL0UFrmoyAivHlIPngZNakywtHE0L9Qhdi-e9g3wQiG-bPxrS6hdXSO2WaU6qNvyDcpZC0S6xKBisnYXYx'
  }
});
