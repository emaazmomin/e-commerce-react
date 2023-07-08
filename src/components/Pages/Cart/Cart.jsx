import React from "react";
import Tablerows from "./Tablerows";

export default function Cart() {
  return (
    <>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Quantity.</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <Tablerows src="https://m.media-amazon.com/images/I/81RzcJRbA5L._SY450_.jpg" qty={2} price={999}/>
            <Tablerows src="https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/j/k/-original-imagzzsh3afavghf.jpeg?q=70" qty={1} price={49999}/>
            <Tablerows src="https://m.media-amazon.com/images/I/41rYLmAlsrL._SX300_SY300_QL70_FMwebp_.jpg" qty={3} price={1999}/>
            <tr>
              <th scope="row" colSpan={2}>
                Total
              </th>
              <td>₹{(57994).toLocaleString("en-IN")}</td>
            </tr>
          </tbody>
        </table>
        <div className="text-end">
          <button className="btn btn-success">Order Now</button>
        </div>
      </div>
    </>
  );
}
