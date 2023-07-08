import React from "react";
import { useNavigate } from "react-router-dom";

export default function Relateditems(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-6 col-md-2">
        <div
          className="card my-3 product-card"
          onClick={() => {
            window.scroll(0,0);
            navigate(`/details?src=${props.src}`);
          }}
          id={props.id}
        >
          <img src={props.src} className="card-img-top images" alt="shirt" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
