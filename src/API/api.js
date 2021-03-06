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
    this.pathManagerCoach = "manager/coach/";
    this.pathManagerChuyenxe = "manager/chuyenxe/";
    this.pathManagerTuyenxe = "manager/tuyen/";
  }
  async postLogin(args) {
    try {
      const res = await axios.post(this.pathAccount + "login", { ...args });
      return res;
    } catch (error) {
      throw error;
    }
  }
  async getCheckJWT() {
    try {
      const res = await axios.get(this.pathAccount + "checkjwt");
      return res;
    } catch (error) {
      throw error;
    }
  }
  async postForgot(email) {
    try {
      const res = await axios.post(this.pathAccount + "forgot", { ...email });
      return res;
    } catch (error) {
      throw error;
    }
  }
  async getListUsers() {
    try {
      const res = await axios.get(this.pathManagerUser + "all");
      return res;
    } catch (error) {
      throw error;
    }
  }
  async getDetailUser(id) {
    try {
      const res = await axios.get(this.pathManagerUser + id);
      return res;
    } catch (error) {
      throw error;
    }
  }
  async updateInfoUser(params){
    try {
      const res= await axios.post(this.pathManagerUser+'/update',{...params})
      return res;
    } catch (error) {
      throw error
    }
  }
  async deleteUser(id){
    try {
      const res= await axios.post(this.pathManagerUser+'delete',{ iduser: id});
      return res;
    } catch (error) {
      throw error
    }
  }
  async postCreateUSer(params){
    try {
      const res= await axios.post(this.pathManagerUser+'create',{...params});
      return res;
    } catch (error) {
      throw error
    }
  }

  async postUploadImage(data) {
    try {
      const res =  axios.post(this.pathManagerUser + "upload", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      return res;
      
    } catch (error) {
      throw error;
    }
  }
  async getListLaiXe(){
    try {
      const res= await axios.get(this.pathManagerUser+'laixe');
      return res
    } catch (err) {
      throw err
    }
  }
  async getListPhuXe(){
    try {
      const res= await axios.get(this.pathManagerUser+'phuxe');
      return res
    } catch (err) {
      throw err
    }
  }
  async getListKhachHang() {
    try {
      const res = await axios.get(this.pathManagerClient + "all");
      return res;
    } catch (error) {
      throw error;
    }
  }
  async getDetailKhachhang(id) {
    try {
      const res = await axios.get(this.pathManagerClient + id);
      return res;
    } catch (error) {
      throw error;
    }
  }
  async getListXe() {
    try {
      const res = await axios.get(this.pathManagerCoach + "all");
      return res;
    } catch (error) {
      throw error;
    }
  }

  async getListChuyenXe(){
    try {
      const res= await axios.get(this.pathManagerChuyenxe + "all");
      return res
    } catch (error) {
      throw error
    }
  }
  async postCreateXe(params){
    try {
      const res= await axios.post(this.pathManagerChuyenxe + "create",{...params});
      return res
    } catch (error) {
      throw error
    }
  }
  async getListTuyen() {
    try {
      const respone = await axios.get(this.pathManagerTuyenxe + "all");
      return respone;
    } catch (error) {
      throw error;
    }
  }
  async getListTuyenInfo(id) {
    try {
      const respone = await axios.get(this.pathManagerTuyenxe + "info/" + id);
      return respone;
    } catch (error) {
      throw error;
    }
  }
  
}

export default new userAPI();
