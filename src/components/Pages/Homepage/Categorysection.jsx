import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Categorysection(props) {
    const navigate = useNavigate();
  return (
    <>
    <div className="col-6 col-md-2 text-center" onClick={()=>{
        navigate(`category/${props.catname}`);
    }}>
        <img src={props.src} alt="" className='rounded-circle border hover-grey'/>
        <div>{props.catname}</div>
    </div>
    </>
  )
}
