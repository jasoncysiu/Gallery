import React, { useState } from "react";
import Results from "../components/Results";
import SearchBox from "../components/SearchBox";

export default function Search() {
  const [searchParams, setSearchParams] = useState({
    app_categories: "option1",
    model_functionalities: "option2",
    interaction_style: "option3",
  });
  return (
    <>
      <SearchBox
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      <p>App Category: {searchParams.app_categories}</p>
      <p>Model Functionality: {searchParams.model_functionalities}</p>
      <p>Interaction Style: {searchParams.interaction_style}</p>
      {/* <Results /> */}
    </>
  );
}
