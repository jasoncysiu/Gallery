import React from "react";

export default function SearchBox({ searchParams, setSearchParams }) {
  const handleValue = (evt) => {
    const value = evt.target.value;
    setSearchParams({
      ...searchParams,
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
            <form method="post" className="search-form" onSubmit={onFormSubmit}>
              <div className="form-group">
                <label htmlFor="app_categories">App Categories:</label>
                <select
                  className="form-control"
                  id="app_categories"
                  name="app_categories"
                  value={searchParams.app_categories}
                  onChange={handleValue}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
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
                  value={searchParams.model_functionalities}
                  onChange={handleValue}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="interaction_style">Interaction Style:</label>
                <select
                  className="form-control"
                  id="interaction_style"
                  name="interaction_style"
                  value={searchParams.interaction_style}
                  onChange={handleValue}
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
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
