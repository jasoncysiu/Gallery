import React from "react";

export default function SearchBox({ searchParams, setSearchParams }) {
  const handleValue = (evt) => {
    const value = evt.target.value;
    setSearchParams({
      ...searchParams,
      [evt.target.name]: value,
    });
  };

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-3"></div>
          <div class="col card p-4 mt-4">
            <h1>Gallery Search</h1>
            <form method="post" className="search-form">
              <div class="form-group">
                <label for="app_categories">App Categories:</label>
                <select
                  class="form-control"
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

              <div class="form-group">
                <label for="model_functionalities">
                  Model Functionalities:
                </label>
                <select
                  class="form-control"
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
              <div class="form-group">
                <label for="interaction_style">Interaction Style:</label>
                <select
                  class="form-control"
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

              <button class="btn btn-primary mt-3" type="submit">
                Search
              </button>
            </form>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </div>
  );
}
