import React from "react";
import Items from "./Items";

export default function Homepage() {
  return (
    <>
      <div className="container my-5">
        <div className="container my-5">
          <div className="row">
            <Items src="https://m.media-amazon.com/images/I/81vcTfrJQxL._UY741_.jpg" id="1"/>

            <Items src="https://m.media-amazon.com/images/I/81RzcJRbA5L._SY450_.jpg" id="2"/>

            <Items src="https://m.media-amazon.com/images/I/71VnLu13A4L._UX625_.jpg" id="3"/>

            <Items src="https://m.media-amazon.com/images/I/41rYLmAlsrL._SX300_SY300_QL70_FMwebp_.jpg" id="4"/>
          </div>
        </div>
      </div>
    </>
  );
}