import axios from 'axios';

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  hearders: {
      Accept: "application/json"
  },
  params: 'eda25039ca2db0c207beac572dc11346'
})
