import axios from "axios";

const api = async (method, endpoint, data) => {
  try {
    return await axios({
      method,
      url: process.env.REACT_APP_API_URL + endpoint,
      data: { ...data },
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default api;
