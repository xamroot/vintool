import axios from "axios";

const instance = axios.create({
  baseURL: "https://vintoolapi.herokuapp.com"
});

export default instance;
