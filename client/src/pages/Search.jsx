import React, { useState, useEffect } from "react";
import Results from "../components/Results";
import SearchBox from "../components/SearchBox";

import { searchData } from "../api/dataApi";
import { getSearchFilters } from "../api/filtersApi";

export default function Search() {
  const [searchParams, setSearchParams] = useState(null);
  const [selectedSearchParams, setSelectedSearchParams] = useState({});
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSearchFilters().then((res, err) => {
      if (err) console.log(err);
      setSearchParams(res);
    });
  }, []);

  useEffect(() => {
    if (searchParams) {
      setSelectedSearchParams({
        appCategories: searchParams.appCategories[0],
        modelFunctionalities: searchParams.modelFunctionalities[0],
        interactions:
          "No Interaction_" + searchParams.interactions["No Interaction"][0],
      });
    }
  }, [searchParams]);

  useEffect(() => {
    if (Object.keys(selectedSearchParams).length !== 0) {
      searchData(selectedSearchParams).then((res, err) => {
        if (err) console.log(err);
        if (res.code && res.code === 400) {
          setError(res.message);
        }
        setData(res);
      });
    }
  }, [selectedSearchParams]);

  return (
    <>
      <SearchBox
        setSelectedSearchParams={setSelectedSearchParams}
        selectedSearchParams={selectedSearchParams}
        searchParams={searchParams}
      />
      <Results data={data} loading={loading} error={error} />
    </>
  );
}
