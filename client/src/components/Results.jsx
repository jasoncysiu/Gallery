import React from "react";
import SingleResult from "./SingleResult";

export default function Results({ data, loading, error }) {
  return (
    <div className="container mt-4">
      <br />
      <div className="row">
        <div className="image-grid">
          {data.length > 0 &&
            data.map((d, i) => {
              return <SingleResult key={"card" + i.toString() + 1} data={d} />;
            })}
          {!data.length > 0 && !loading && !error && <h1>No results</h1>}
          {error && <h1>{error}</h1>}
          {loading && <h1>Loading...</h1>}
        </div>
      </div>
    </div>
  );
}
