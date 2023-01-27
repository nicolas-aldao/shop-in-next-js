import React from 'react';
import Image from 'next/image';
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductDetail.scss';
import close from '@icons/icon_close.png';

const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <Image src={close} alt="close"  height={300} width={300}/>
      </div>
      <ProductInfo />
    </aside>
  );
};

export default ProductDetail;
