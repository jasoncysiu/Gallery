import axios from "axios";

const url = "http://localhost:8000/api";

export const getSearchFilters = () => {
  return axios
    .get(`${url}/filter`)
    .then((response) => response.data)
    .catch((err) => console.log(`Error: ${err}`));
};
