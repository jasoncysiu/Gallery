import React, { useState, useEffect } from "react";
import Results from "../components/Results";
import SearchBox from "../components/SearchBox";

import { searchData } from "../api/fetchData";

export default function Search() {
  const [searchParams, setSearchParams] = useState({
    app_categories: "option1",
    model_functionalities: "option2",
    interaction_style: "option3",
  });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [searchParams]);

  const getData = () => {
    setData([]);
    setLoading(true);
    searchData().then((res) => {
      setData(res);
      setLoading(false);
    });
  };

  return (
    <>
      <SearchBox
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      <Results data={data} loading={loading} />
    </>
  );
}
