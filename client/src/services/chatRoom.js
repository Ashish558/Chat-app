import axios from "axios";
import { BASE_URL } from "./constants";

const getAuthHeaders = () => {
  const { token } = JSON.parse(localStorage.getItem("user"))
  let header = {
    headers: { Authorization: `${token}` },
  };
  return header;
};


export const createChatRoom = async (name, cb) => {
  const header = getAuthHeaders();

  axios
    .post(`${BASE_URL}/chatroom`, { name }, header)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

export const getChatRooms = async (cb) => {
  const header = getAuthHeaders();

  axios
    .get(`${BASE_URL}/chatroom`, header)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

export const joinChatRoom = async (chatRoomId, cb) => {
  const header = getAuthHeaders();
  axios
    .post(`${BASE_URL}/chatroom/join`, { chatRoomId }, header)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};

export const getSearchedChatRooms = async (roomName, cb) => {
  const header = getAuthHeaders();

  axios
    .get(`${BASE_URL}/chatroom/search/${roomName}`, header)
    .then((res) => cb(null, res))
    .catch((err) => cb(err, null));
};
