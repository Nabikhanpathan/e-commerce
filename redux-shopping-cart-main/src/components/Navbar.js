import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Filter from './Filter';

const Navbar = () => {
    const navigate=useNavigate()
    const items = useSelector((state) => state.mark);
    const auth=sessionStorage.getItem('user')
    const logout=()=>{
        sessionStorage.clear()
        navigate('/signin')
    }
    
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <span className="logo">MYSTORE</span>
            
        
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
                <Link className="navLink" to="/Signin" onClick={logout}>
                    Logout
                </Link>
               
                <Link className="navLink" to="/Signin">
                    Login
                </Link>
                <Link className="navLink" to="/Register">
                    Register
                </Link>
               
            </div>

            
        </div>
        
    );
};

export default Navbar;
