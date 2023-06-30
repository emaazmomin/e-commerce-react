import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Details(props) {
  //getting the id of route
  const [src, setsrc] = useSearchParams();
  return (
    <>
      <div className="container text-center my-5 detail-div">
        <div className="my-5 detail-img">
          <img src={src.get("src")} className="img-fluid rounded-top" alt="" />
        </div>
        <div className="">
          <h2>Heading of this</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            veritatis voluptatibus laudantium consequatur blanditiis officia
            accusantium quo quae, corporis maxime ducimus labore dolore, sequi
            dolorum eaque eius deserunt eveniet quia, aperiam numquam
            praesentium dolor incidunt dolores sed. Repudiandae totam, ducimus
            id quae minima blanditiis fuga dicta, dolorum quas at inventore
            accusamus sed ut cum, animi enim architecto ullam aliquam culpa eius
            illo. Inventore hic, dolores magnam consectetur quisquam numquam
            quas facilis soluta in beatae asperiores, laudantium earum nobis
            iure nulla sint laboriosam, voluptatum qui? Ut harum laboriosam
            accusamus libero officiis dolores, quod, aspernatur deleniti
            temporibus, possimus consectetur deserunt. Libero, laboriosam?
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-around">
          <button className="btn btn-outline-dark">Add to Cart</button>
          <button className="btn btn-dark">Order Now</button>
        </div>
      </div>
    </>
  );
}
