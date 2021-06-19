import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from './header.module.scss';

const Header = () => {

    return ( 
        <header className={styles.header}>
            <Link to='/'>Dashboard</Link>
            <Link to='/products'>Products</Link>
            <Link to='/add-product'>Add Product</Link>
        </header>
     );
}
 
export default Header;