// import React from 'react'
// import { useDispatch } from 'react-redux';

// import Image from "../img/image.png";
// import image  from '../img/image.png';

const Product = ({id,title,price,image,handle,btnText}) => {
 


return (
  <div className='card'>
    <div className='image'><img src={image} alt="" /></div>
    <h4 className='title'>Title: {title}</h4>
    <p className='price'>Price: ${price}</p>
    <div className="buttonDiv">
    <button className='btn' onClick={()=>handle(id,title,image,price)}>{btnText}</button>
    </div>
  </div>
);
    
}

export default Product
