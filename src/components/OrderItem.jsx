import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/AppContext';
import close from '@icons/icon_close.png';
import styles from '@styles/OrderItem.module.scss';
// import '@styles/OrderItem.scss';

const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product.images[0]} alt={product.title}  height={300} width={300}/>
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <Image className="pointer more-clickable-area" src={close} alt="close"  height={300} width={300} onClick={() => handleRemove(product)} />
    </div>
  );
};

export default OrderItem;
