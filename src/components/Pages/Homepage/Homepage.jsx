import React from "react";
import Items from "./Items";
import Categorysection from "./Categorysection";

export default function Homepage() {
  return (
    <>
      <div className="">
        {/* <h2 className="text-center">Categories</h2> */}
        {/* <div className="mt-2 mx-3"> */}
          <div className="row mt-3">
            <Categorysection src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" catname="Groceries" />
            <Categorysection src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" catname="Mobiles" />
            <Categorysection src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100" catname="Fashion"  />
            <Categorysection src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" catname="Computers & Accessories" />
            <Categorysection src="https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" catname="Home Decors" />
            <Categorysection src="https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" catname="Appliances" />
            <Categorysection src="https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" catname="Kid's Zone" />
          </div>
        {/* </div> */}

        <hr />
        <h2 className="text-center">Trending Products</h2>
        <div className="mt-2 mx-3">
          <div className="row">
            <Items
              src="https://m.media-amazon.com/images/I/81vcTfrJQxL._UY741_.jpg"
              price="599"
              id="1"
            />

            <Items
              src="https://m.media-amazon.com/images/I/81RzcJRbA5L._SY450_.jpg"
              price="9999"
              id="2"
            />

            <Items
              src="https://m.media-amazon.com/images/I/71VnLu13A4L._UX625_.jpg"
              price="1299"
              id="3"
            />

            <Items
              src="https://m.media-amazon.com/images/I/41rYLmAlsrL._SX300_SY300_QL70_FMwebp_.jpg"
              price="129999"
              id="4"
            />

            <Items
              src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/j/k/-original-imagzzsh3afavghf.jpeg?q=70"
              price="39999"
              id="5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
