import React, { useEffect } from "react";

export default function SearchBox({
  selectedSearchParams,
  setSelectedSearchParams,
  searchParams,
}) {
  const handleValue = (evt) => {
    const value = evt.target.value;
    setSelectedSearchParams({
      ...selectedSearchParams,
      [evt.target.name]: value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div>
      <body>
        

      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col card p-4 mt-4">
            <h1>Gallery Search</h1>
            <form className="search-form">
              <div className="form-group">
                <label htmlFor="appCategories">App Categories:</label>
                <select
                  className="form-control"
                  id="appCategories"
                  name="appCategories"
                  value={selectedSearchParams.appCategories}
                  onChange={handleValue}
                >
                  {searchParams &&
                    searchParams.appCategories &&
                    searchParams.appCategories.map((categoryParam) => {
                      return (
                        <option key={categoryParam} value={categoryParam}>
                          {categoryParam}
                        </option>
                      );
                    })}
                </select>
              </div>

              <br />

              <div className="form-group">
                <label htmlFor="modelFunctionalities">
                  Model Functionalities:
                </label>
                <select
                  className="form-control"
                  id="modelFunctionalities"
                  name="modelFunctionalities"
                  value={selectedSearchParams.modelFunctionalities}
                  onChange={handleValue}
                >
                  {searchParams &&
                    searchParams.modelFunctionalities &&
                    searchParams.modelFunctionalities.map(
                      (functionalityParam) => {
                        return (
                          <option
                            key={functionalityParam}
                            value={functionalityParam}
                          >
                            {functionalityParam}
                          </option>
                        );
                      }
                    )}
                </select>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="interaction_style">Interaction Style:</label>
                <select
                  className="form-control"
                  id="interactions"
                  name="interactions"
                  value={selectedSearchParams.interactions}
                  onChange={handleValue}
                >
                  <optgroup label="No Interaction">
                    {searchParams &&
                      searchParams.interactions &&
                      searchParams.interactions["No Interaction"] &&
                      searchParams.interactions["No Interaction"].map(
                        (noInt) => {
                          return (
                            <option
                              key={"No Interaction_" + noInt}
                              value={"No Interaction_" + noInt}
                            >
                              {noInt}
                            </option>
                          );
                        }
                      )}
                  </optgroup>
                  <optgroup label="Static Interaction">
                    {searchParams &&
                      searchParams.interactions &&
                      searchParams.interactions["Static"] &&
                      searchParams.interactions["Static"].map((staticInt) => {
                        return (
                          <option
                            key={"Static_" + staticInt}
                            value={"Static_" + staticInt}
                          >
                            {staticInt}
                          </option>
                        );
                      })}
                  </optgroup>
                  <optgroup label="Dynamic Interaction">
                    {searchParams &&
                      searchParams.interactions &&
                      searchParams.interactions["Dynamic"] &&
                      searchParams.interactions["Dynamic"].map((dyInt) => {
                        return (
                          <option
                            key={"Dynamic_" + dyInt}
                            value={"Dynamic_" + dyInt}
                          >
                            {dyInt}
                          </option>
                        );
                      })}
                  </optgroup>
                </select>
              </div>

              {/* <button className="btn btn-primary mt-3" type="submit">
                Search
              </button> */}
            </form>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      </body>
    </div>
  );
}
