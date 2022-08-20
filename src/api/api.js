// api.js
import axios from "axios";

const API = axios.create();

console.log(API.get("/rooms/"));

export const RoomList = () => API.get("/rooms/");
