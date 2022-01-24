import axios from "axios";

export const searchData = (params) => {
  return axios
    .get(
      `/api/data/search?modelFunctionalities=${params.modelFunctionalities}&appCategories=${params.appCategories}&interaction=${params.interactions}`
    )
    .then((response) => response.data)
    .catch((err) => console.log(`Error: ${err}`));
};

export const getSearchFilters = () => {
  return axios
    .get(`/api/filter`)
    .then((response) => response.data)
    .catch((err) => console.log(`Error: ${err}`));
};
