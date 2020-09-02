import axios from "axios";
const SERVICE_ACCOUNT = "http://localhost:8080/";

const Api_acount = axios.create({
  baseURL: SERVICE_ACCOUNT,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

export default Api_acount;
