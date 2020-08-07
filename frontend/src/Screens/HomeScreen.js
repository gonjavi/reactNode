import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import { useSelector, useDispatch } from 'react-redux';

function HomeScreen(props) {
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listProducts());
    return () => {

    }
    
  }, [])
  
  return (
    loading? <div> Loading...</div> :
    error? <div>{error}</div>:
    <ul className="products">
      {
        products.map(product =>           
        <li key={product.id}>
          <div className="product">
            <Link to={'product/'+ product.id}>
              <img className="product-image" src={product.image} alt="product" />
            </Link>
            <div className="product-name">
              
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">{product.rating} Stars ({product.numReviews} reviews)</div>
          </div>
        </li>)
      }      
    </ul>
  )
}

export default HomeScreen;
