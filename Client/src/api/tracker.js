import Axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://rntracker.herokuapp.com/';

export default Axios.create({
  baseURL: proxyurl + url
});