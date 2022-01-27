import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="container">
      <h1>Error!</h1>
      <h4>Page does not exist</h4>
      <Link to={"/"} className="nav-link">
        Back to Home
      </Link>
    </div>
  );
}
