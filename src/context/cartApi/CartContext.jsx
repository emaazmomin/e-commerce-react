import React, { createContext, useState } from 'react'

export const Cartdata = createContext();
export default function CartContext(props) {
    const cartData = [{
        id:1,
        src:"https://m.media-amazon.com/images/I/81RzcJRbA5L._SY450_.jpg",
        price:999,
        qty:2
    },
    {
        id:2,
        src:"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/i/j/k/-original-imagzzsh3afavghf.jpeg?q=70",
        price:49999,
        qty:1
    },
    {
        id:3,
        src:"https://m.media-amazon.com/images/I/41rYLmAlsrL._SX300_SY300_QL70_FMwebp_.jpg",
        price:1999,
        qty:3
    },
    
];
const [data,setData] = useState(cartData);
  return (
    <Cartdata.Provider value={{data}}>
      {props.children}
    </Cartdata.Provider>
  )
}
