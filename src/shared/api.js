import axios from "axios";

const api = async (method, endpoint, data) => {
  console.log(process.env.REACT_APP_API_URL, document.cookie);
  try {
    return await axios({
      method,
      url: process.env.REACT_APP_API_URL + endpoint,
      data: {...data, withCredentials:true},
      // headers: {
      //   session: {id: document.cookie}
      // }
    });
  } catch (error) {
    console.log(error);
  }
};

export default api;
