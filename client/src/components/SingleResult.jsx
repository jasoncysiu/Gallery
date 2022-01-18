import React from "react";

export default function SingleResult() {
  return (
    <div>
      <div className="card search-result" width="18rem">
        <img
          className="card-img-top gallery-image"
          src="https://raw.githubusercontent.com/jasonxsiu/GalleryImages/main/Gif/plantV.gif"
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">
            <strong>Forms of communication: </strong>
            <br />
            Representation
            <br />
            <strong>Package name: </strong> Package Name
          </p>
        </div>
      </div>
    </div>
  );
}
