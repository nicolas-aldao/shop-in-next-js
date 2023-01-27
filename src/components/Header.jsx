import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
// import '@styles/Header.scss';
import styles from '@styles/Header.module.scss';

const Header = () => {
  const { state, toggleOrder, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={styles.nav}>
        <Image src={menu} alt="menu" className={styles.menu} />
        <div className={styles.navbarLeft}>
          <Image src={logo} alt="logo" className={styles.navLogo} />
          <ul>
            <li>
              <Link href="/">All</Link>
            </li>
            <li>
              <Link href="/">Clothes</Link>
            </li>
            <li>
              <Link href="/">Electronics</Link>
            </li>
            <li>
              <Link href="/">Furnitures</Link>
            </li>
            <li>
              <Link href="/">Toys</Link>
            </li>
            <li>
              <Link href="/">Others</Link>
            </li>
          </ul>
        </div>
        <div className={styles.navbarRight}>
          <ul>
            <li className={`${styles['moreClickableArea']} ${styles['navbarEmail']} ${styles.pointer}`} onClick={() => toggleMenu()} onKeyDown={() => {}}>
              platzi@example.com
            </li>
            <li className="navbarShoppingCart" onClick={() => toggleOrder()} onKeyDown={() => {}}>
              <Image className={`${styles['moreClickableArea']} ${styles.pointer}`} src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.menuIsOpen && <Menu />}
      </nav>
      {state.orderIsOpen && <MyOrder />}
    </>
  );
};

export default Header;
