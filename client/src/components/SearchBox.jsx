import React from "react";

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
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col card p-4 mt-4">
            <h1>Gallery Search</h1>
            <form className="search-form">
              <div className="form-group">
                <label htmlFor="app_categories">App Categories:</label>
                <select
                  className="form-control"
                  id="app_categories"
                  name="app_categories"
                  value={selectedSearchParams.app_categories}
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
                <label htmlFor="model_functionalities">
                  Model Functionalities:
                </label>
                <select
                  className="form-control"
                  id="model_functionalities"
                  name="model_functionalities"
                  value={selectedSearchParams.model_functionalities}
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
                  id="interaction_style"
                  name="interaction_style"
                  value={selectedSearchParams.interaction_style}
                  onChange={handleValue}
                >
                  <optgroup label="No Interaction">
                    {searchParams &&
                      searchParams.interactions &&
                      searchParams.interactions["No Interaction"] &&
                      searchParams.interactions["No Interaction"].map(
                        (noInt) => {
                          return <option value={noInt}>{noInt}</option>;
                        }
                      )}
                  </optgroup>
                  <optgroup label="Static Interaction">
                    {searchParams &&
                      searchParams.interactions &&
                      searchParams.interactions["Static"] &&
                      searchParams.interactions["Static"].map((staticInt) => {
                        return <option value={staticInt}>{staticInt}</option>;
                      })}
                  </optgroup>
                  <optgroup label="Dynamic Interaction">
                    {searchParams &&
                      searchParams.interactions &&
                      searchParams.interactions["Dynamic"] &&
                      searchParams.interactions["Dynamic"].map((dyInt) => {
                        return <option value={dyInt}>{dyInt}</option>;
                      })}
                  </optgroup>
                </select>
              </div>

              {/* <button className="btn btn-primary mt-3" type="submit">
                Search
              </button> */}
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </div>
  );
}
