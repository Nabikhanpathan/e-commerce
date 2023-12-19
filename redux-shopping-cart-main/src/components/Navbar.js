import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Filter from './Filter';

const Navbar = () => {
    const items = useSelector((state) => state.mark);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">HAPPYS STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <Link className="navLink" to="/product">
                    category
                </Link>
                <span className="cartCount">Cart items: {items.length}</span>
            </div>
            <Filter/>
        </div>
    );
};

export default Navbar;
