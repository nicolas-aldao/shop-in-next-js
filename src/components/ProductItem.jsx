/* eslint-disable */
// TODO: Temporaly eslint rules disabled
import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import '@styles/ProductItem.scss';

const ProductItem = ({ product }) => {
  const { state, addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    console.log('in cart: ', state.cart.includes(item));
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <Image src={product.images[0]} alt={product.title}  height={300} width={300}/>
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure className="more-clickable-area" onClick={() => handleClick(product)} onKeyDown={() => {}}>
          {state.cart.includes(product) ? (
            <Image className="disabled add-to-cart-btn" src={addedToCartImage} alt="added to cart"  height={300} width={300}/>
          ) : (
            <Image className="add-to-cart-btn pointer" src={addToCartImage} alt="add to cart"  height={300} width={300}/>
          )}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
