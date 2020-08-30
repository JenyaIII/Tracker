import Axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://d779191c7b71.ngrok.io';

export default Axios.create({
  baseURL: proxyurl + url
});