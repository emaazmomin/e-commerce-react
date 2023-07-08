import React from "react";

export default function Reviews() {
  return (
    <>
      <div className="customer-comments-div" onClick={()=>console.log("clicked")}>
        <div className="border p-2">
          <h5><b>abc</b></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            totam deleniti? Incidunt nobis temporibus, et consectetur alias
            similique rerum repudiandae!
          </p>
        </div>
      </div>
    </>
  );
}
