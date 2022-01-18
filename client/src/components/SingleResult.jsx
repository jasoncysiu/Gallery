import React from "react";

export default function SingleResult({ data }) {
  return (
    <div>
      <div className="card search-result" width="18rem">
        <img
          className="card-img-top gallery-image"
          src={
            "https://raw.githubusercontent.com/jasonxsiu/GalleryImages/main/Gif/" +
            data.image_name
          }
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">
            <strong>Forms of communication: </strong>
            <br />
            {data.representation}
            <br />
            <strong>Package name: </strong>
            {data.package_name}
          </p>
        </div>
      </div>
    </div>
  );
}
