import React, { useContext, useEffect } from "react";
import { ProductApi } from "../../../context/porductApi/Productcontext";

export default function Myac() {
  const u = useContext(ProductApi);
  const arr = [];
  useEffect(() => {
    u.getData();
    // console.log(u.data);
  }, []);

  return (
    <>
      <div className="container mt-5 text-center">
        <h1>{
          u.data.map((e)=>{
            // console.log(e);
          })
          }</h1>
      </div>
    </>
  );
}
