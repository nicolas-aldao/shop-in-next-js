import React from 'react';
import Link from 'next/link';
// import '@styles/Menu.scss';

const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link href="/" className="title">
            My orders
          </Link>
        </li>
        <li>
          <Link href="/">My account</Link>
        </li>
        <li>
          <Link href="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
