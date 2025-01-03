import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import Product from './Product';
import "../Styles/home.css"

function Home() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.product);
console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className='maincont'>
      <h1>All Items</h1>
      <div className='cont'>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
        
        {products.map((product) => (
          <Product id={product.id} title={product.title} price={product.price}/>
         
        ))}
      </div>
    </div>
  )
}

export default Home
