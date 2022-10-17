import axios from "axios";
import { BASE_URL } from "./constants";

const getAuthHeaders = () => {
  const token = sessionStorage.getItem("access") || localStorage.getItem("access");
  let header = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return header;
};

const headers = {
  "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, x-requested-with",
  "Content-Type": "application/json",
  "Access-Control-Allow-origin": "*",
};

export const registerUser = (credentials, cb) => {
  axios
    .post(`${BASE_URL}/user/register`, { ...credentials })
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

export const loginUser = (credentials, cb) => {
  axios
    .post(`${BASE_URL}/user/login`, credentials)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};
