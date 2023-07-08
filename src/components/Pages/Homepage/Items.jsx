import React from "react";
import { useNavigate } from "react-router-dom";

export default function Items(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="col-6 col-md-3">
        <div
          className="card my-3 product-card"
          onClick={() => {
            window.scroll(0, 0);
            navigate(`/details?src=${props.src}`);
          }}
          id={props.id}
        >
          <img src={props.src} className="card-img-top images" alt="shirt" />
          <div className="card-body">
            <h6 className="card-title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h6>
            <div
              className="green-background text-white border text-center"
              style={{ width: "2rem" }}
            >
              4.8
            </div>
            <h6>
              <b>₹{Number(props.price).toLocaleString("en-IN")}</b>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
