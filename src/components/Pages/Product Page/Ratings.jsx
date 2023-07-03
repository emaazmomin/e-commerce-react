import React from "react";
import Reviews from "./Reviews";

export default function Ratings() {
  return (
    <>
      <h1 className="text-center">Ratings & Reviews</h1>
      <div>
      </div>
      <div className="container text-center mt-5">
        <hr />
        <h2 className="mb-4">Ratings</h2>
        <div className="row">
          <div className="col">
            <h1>4.6</h1>
            <p>39,630 Ratings & 1,525 Reviews</p>
          </div>

          <div className="col">
            <div className="stars">
              <div className="s5-star"></div>
            </div>
            <div className="stars">
              <div className="s4-star"></div>
            </div>
            <div className="stars">
              <div className="s3-star"></div>
            </div>
            <div className="stars">
              <div className="s2-star"></div>
            </div>
            <div className="stars">
              <div className="s1-star"></div>
            </div>
          </div>

          <div className="col text-start">
            <div className="spans">5 stars</div>
            <div className="spans">4 stars</div>
            <div className="spans">3 stars</div>
            <div className="spans">2 stars</div>
            <div className="spans">1 star</div>
          </div>
        </div>
      </div>

      <hr />
      <div className="container">
        <h2 className="text-center mt-5">Reviews</h2>
       <Reviews/>
       <Reviews/>
       <Reviews/>
       <Reviews/>
      </div>
    </>
  );
}
