import axios from "axios";

const url = "http://localhost:8000/api/search";

export const searchData = () => {
  return axios
    .get(url)
    .then((response) => response.data.data)
    .catch((err) => console.log(`Error: ${err}`));
};
