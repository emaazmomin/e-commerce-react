import React, { useContext,useEffect } from 'react'
import Relateditems from './Relateditems';
import { ProductApi } from '../../../context/porductApi/Productcontext';

export default function Relatedproducts() {
  const d = useContext(ProductApi);
  useEffect(() => {
    console.log("inside related products setcion");
   d.getData();
  }, []);
  
  return (
      <>
      <h1 className='text-center mt-3'>Related Prodcuts</h1>
        <div className="mx-3"> 
          <div className="row">
            {d.data.map((data,i)=>{
              return <Relateditems key={i} src={data.url} id={data.pid} price={data.price}/>
            })}
            <Relateditems src="https://m.media-amazon.com/images/I/81vcTfrJQxL._UY741_.jpg" id="1" price={1999}/>
            <Relateditems src="https://m.media-amazon.com/images/I/81RzcJRbA5L._SY450_.jpg" id="2" price={1999}/>
            <Relateditems src="https://m.media-amazon.com/images/I/71VnLu13A4L._UX625_.jpg" id="3" price={1999}/>
            <Relateditems src="https://m.media-amazon.com/images/I/41rYLmAlsrL._SX300_SY300_QL70_FMwebp_.jpg" id="4" price={1999}/>
          </div>
      </div>
    </>
  )
}
