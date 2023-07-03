import React from "react";
import { useSearchParams } from "react-router-dom";
import Relatedproducts from "./Relatedproducts";
import Review from "./Ratings";

export default function Details(props) {
  //getting the id of route
  const [src, setsrc] = useSearchParams();
  return (
    <>
      <div className="container text-center detail-div mt-5">
        <div className="my-5 detail-img">
          {/* <img src={src.get("src")} className="img-fluid rounded-top" alt="" /> */}

          <div id="carouselExampleIndicators" className="carousel slide mt-5 border">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={src.get("src")} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={src.get("src")} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={src.get("src")} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="info-div px-4">
          <h2>Heading of this</h2>
          <hr />
          <p className="text-start">
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
          <hr />
          <div className="select-div mx-1">
            <div className="size-div mx-2">
              <label htmlFor="" className="fs-4 mx-1">
                Size:
              </label>
              <select name="Size" id="" className="fs-4 p-1">
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXL</option>
              </select>
            </div>

            <div className="color-div mx-2">
              <label htmlFor="" className="fs-4 mx-1">
                Colour:{" "}
              </label>
              <select name="Color" key="" className="fs-4 p-1">
                <option value="white">White</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="btn-div">
            <button className="btn btn-lg btn-outline-primary mx-1">
              Add to Cart
            </button>
            <button className="btn btn-lg btn-primary mx-1">Order Now</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="review-div container">
        <Review />
      </div>
      <hr />
      <div className="related-div">
        <Relatedproducts />
      </div>
    </>
  );
}
