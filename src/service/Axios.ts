import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:3600/",
});

export default Axios;
