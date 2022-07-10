import axios from "axios";

function Instance() {
  const instance = axios.create({
    baseURL: "http://52.78.200.184:8080/",
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true, // Required for cookies,
    },
  });
  return instance;
}

export const http = Instance();
