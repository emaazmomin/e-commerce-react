import axios from "axios";
import React, { createContext, useState } from "react";

export const ProductApi = createContext();

export default function Productcontext(props) {
  // const basePath = `http://localhost/phptutorial/Angular_E_Com`;
  const productsData = [];
  const [data, setData] = useState(productsData);
  const getData=()=> {
    axios
      .get(`http://localhost/phptutorial/Angular_E_Com/productsData.php`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }


  return (
    <ProductApi.Provider value={{data,getData}}>
      {props.children}
    </ProductApi.Provider>
  );
}
