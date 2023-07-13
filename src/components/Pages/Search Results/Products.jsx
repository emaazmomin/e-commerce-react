import React from "react";

export default function Products(props) {
  return (
    <>
      <div className="d-flex mx-2 p-2 result-div my-2">
        <div className="border searched-image-div">
          <img src={props.img} alt="" />
        </div>
        <div className="mx-5 d-flex flex-column justify-content-between mt-2">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe,
            enim.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum debitis ab aliquam illo similique aliquid assumenda quisquam adipisci harum voluptatem eum consequuntur consequatur sequi ex optio, pariatur incidunt nobis quam.
          </p>
          <div
            className="green-background text-white border text-center"
            style={{ width: "3rem" }}
          >
            4.8
          </div>
          <div>
            <h4>
              ₹2000
            </h4>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
