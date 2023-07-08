import React from "react";
import Items from "./Items";

export default function Homepage() {
  return (
    <>

      <div className="">
        <div className="mt-2 mx-3">
          <div className="row">
            <Items src="https://m.media-amazon.com/images/I/81vcTfrJQxL._UY741_.jpg" price="599" id="1"/>

            <Items src="https://m.media-amazon.com/images/I/81RzcJRbA5L._SY450_.jpg" price="9999" id="2"/>

            <Items src="https://m.media-amazon.com/images/I/71VnLu13A4L._UX625_.jpg" price="1299" id="3"/>

            <Items src="https://m.media-amazon.com/images/I/41rYLmAlsrL._SX300_SY300_QL70_FMwebp_.jpg" price="129999" id="4"/>

            <Items src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/j/k/-original-imagzzsh3afavghf.jpeg?q=70" price="39999" id="5"/>
            
          </div>
        </div>
      </div>
    </>
  );
}
