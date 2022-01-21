import axios from "axios";

const url = "http://localhost:8000/api";

export const searchData = (params) => {
  return axios
    .get(`${url}/data`)
    .then((response) => response.data)
    .catch((err) => console.log(`Error: ${err}`));
};
