import React, { useState,useEffect } from "react";
import { useNavigate} from "react-router-dom";

export default function Tablerows(props) {
  const [qty, setQty] = useState(props.qty);
  const navigate = useNavigate();

  // const minus = () => {
  //   if (qty > 1) {
  //     setQty(qty - 1);
  //   }
  // };
  // const plus = () => {
  //   setQty(qty + 1);
  // };
  useEffect(() => {
   
  }, []);

  useEffect(() => {
   
  }, [])
  

  return (
    <>
      <tr>
        <td>
          <img src={props.src} alt="" style={{ width: "8rem" }} onClick={()=>{
            window.scroll(0,0)
            navigate(`/details?src=${props.src}`);
            }} />
        </td>
        <td>
          <div className="cart-qty-div border">
            <button className="cart-qty-btn p-0" onClick={()=>{console.log(props)}}>
              -
            </button>
            <input
              className="cart-qty-inp text-center"
              type="text"
              name=""
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
            <button className="cart-qty-btn">
              +
            </button>
          </div>
        </td>
        <td>₹{props.price.toLocaleString("en-IN")}/-</td>
        <td>
          <button className="btn btn-sm btn-danger mx-1  my-1">Delete</button>
          <button className="btn btn-sm btn-success mx-1 my-1">Buy</button>
        </td>
      </tr>
    </>
  );
}
