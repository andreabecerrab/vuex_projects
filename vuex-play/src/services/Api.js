import axios from "axios";

const SERVICE_FLEET = "http://localhost:8082/";

const Api_fleet = axios.create({
  baseURL: SERVICE_FLEET,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});

export default Api_fleet;
