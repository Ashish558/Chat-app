import axios from "axios";
import { BASE_URL } from "./constants";

const getAuthHeaders = () => {
  const { token } = JSON.parse(localStorage.getItem("user"))
  let header = {
    headers: { Authorization: `${token}` },
  };
  return header;
};


export const saveMessage = async (msg, cb) => {
  const header = getAuthHeaders();

  axios
    .post(`${BASE_URL}/message`, msg, header)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

export const getMessages = async (roomId, cb) => {
  const header = getAuthHeaders();

  axios
    .get(`${BASE_URL}/message/${roomId}`, header)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};
