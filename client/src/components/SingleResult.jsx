import React from "react";

export default function SingleResult({ data }) {
  return (
    <div>
      <div className="card search-result" width="18rem">
        <img
          className="card-img-top gallery-image"
          src={
            "https://raw.githubusercontent.com/jasonxsiu/GalleryImages/main/Gif/" +
            data.imageName
          }
          alt="Card image"
        />
        <div className="card-body">
          <p className="card-text">
            <strong>Forms of communication: </strong>
            <br />
            {data.representation}
            <br />
            <strong>Package name: </strong>
            {data.packageName}
          </p>
        </div>
      </div>
    </div>
  );
}
