import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import Product from './Product';
import "../Styles/home1.css"
import { addToCart } from '../redux/actions/cartActions';

function Home() {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.product);
  // const { items,total} = useSelector((state) => state.cart);
console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // const dispatch = useDispatch();

  const handleAddToCart = (id,title,image,price,quantity=1) => {
    // if(items.find((item) => item.id === id)){
    //   // return;
    //   dispatch(updateCartItem(id,quantity+1));
    // }
    dispatch(addToCart({ id, title,image, price,quantity }));
  };
  return (
    <div className='maincont'>
      <h1>All Items</h1>
      <div className='cont'>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      
        
        {products.map((product) => (
          <Product id={product.id} title={product.title} image={product.images[0]} handle={handleAddToCart} btnText="Add to Cart" price={product.price}/>
         
        ))}
      </div>
    </div>
  )
}

export default Home
