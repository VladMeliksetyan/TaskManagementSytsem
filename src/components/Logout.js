import { Link } from "react-router-dom";
import axios from "axios";

const Logout =  () => {
  
    // await axios({
    //   method: "GET",
    //   url: "http://localhost:3001/logout",
    // });

  return <Link to={"/login"}>Logout</Link>;
};
export default Logout;
