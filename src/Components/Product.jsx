import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import Image from "../img/image.png";
import image  from '../img/image.png';

const Product = ({id,title,price}) => {
 
      const dispatch = useDispatch();

const handleAddToCart = () => {
  dispatch(addToCart({ id, title, price, quantity: 1 }));
};

return (
  <div className='card'>
    <div className='image'><img src={image} alt="" /></div>
    <h4 className='title'>Title: {title}</h4>
    <p className='price'>Price: ${price}</p>
    <button className='btn' onClick={handleAddToCart}>Add to Cart</button>
  </div>
);
    
}

export default Product
