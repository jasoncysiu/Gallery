import React, { useState, useEffect } from "react";
import Results from "../components/Results";
import SearchBox from "../components/SearchBox";

import { searchData } from "../api/dataApi";
import { getSearchFilters } from "../api/filtersApi";

export default function Search() {
  const [searchParams, setSearchParams] = useState([]);
  const [selectedSearchParams, setSelectedSearchParams] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getSearchParams();
  }, []);

  useEffect(() => {
    getData(selectedSearchParams);
  }, [searchParams]);

  const getSearchParams = () => {
    setSearchParams([]);
    getSearchFilters().then((res, err) => {
      if (err) console.log(err);
      setSearchParams(res);
    });
  };

  const getData = () => {
    setData([]);
    setLoading(true);
    searchData().then((res) => {
      console.log(data);
      setData(res);
      setLoading(false);
    });
  };

  return (
    <>
      <SearchBox
        setSelectedSearchParams={setSelectedSearchParams}
        selectedSearchParams={selectedSearchParams}
        searchParams={searchParams}
      />
      <Results data={data} loading={loading} />
    </>
  );
}
