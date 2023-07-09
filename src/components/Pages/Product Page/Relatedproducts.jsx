import React from 'react'
import Relateditems from './Relateditems';

export default function Relatedproducts() {
  return (
      <>
      <h1 className='text-center mt-3'>Related Prodcuts</h1>
        <div className="mx-3"> 
          <div className="row">
            <Relateditems src="https://m.media-amazon.com/images/I/81vcTfrJQxL._UY741_.jpg" id="1" price={1999}/>
            <Relateditems src="https://m.media-amazon.com/images/I/81RzcJRbA5L._SY450_.jpg" id="2" price={1999}/>
            <Relateditems src="https://m.media-amazon.com/images/I/71VnLu13A4L._UX625_.jpg" id="3" price={1999}/>
            <Relateditems src="https://m.media-amazon.com/images/I/41rYLmAlsrL._SX300_SY300_QL70_FMwebp_.jpg" id="4" price={1999}/>
          </div>
      </div>
    </>
  )
}
