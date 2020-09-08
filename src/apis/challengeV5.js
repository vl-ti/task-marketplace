import axios from "axios";

export default axios.create({
  baseURL: "https://api.topcoder.com/v5/challenges",
});
