import axios from "axios";

let URL;
if (process.env.NODE_ENV === "development") {
  URL = "http://localhost:3000/api/v1/";
} else {
  URL = "http://amazon";
}
axios.defaults.baseURL = URL;

export function setAuthHeader(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
class userAPI {
  constructor() {
    this.pathAccount = "/user/";
    this.pathManagerUser = "/manager/user/";
    this.pathManagerClient = "/manager/client/";
    this.pathManagerTicket = "/manager/ticket/";
    this.pathManagerCoach = "manager/coach";
    this.pathManagerChuyenxe = "manager/chuyenxe";
    this.pathManagerTuyenxe = "manager/tuyen";
  }
  async postLogin(args) {
    try {
      const res = axios.post(this.pathAccount + "login", { ...args });
      return res;
    } catch (error) {
      throw error;
    }
  }
}

export default new userAPI();