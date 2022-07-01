import React from 'react';
import { Route, Routes, Link, NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/">
                    <h3>REACT COLDSHEIN</h3>
                    <p>React learning</p>
                </Link>


            </div>
            <ul className='header-menu'>
                <li onClick={props.onOpenCart} >
                    <img src="/img/cart.svg" alt="Cart" />
                    <span>120 грн.</span>
                </li>
                <li>
                    <Link to="/favorites">
                        <img src="img/favorites.svg" alt="" />
                    </Link>

                </li>
                <li>
                    <img src="img/profile.svg" alt="" />
                </li>
            </ul>
        </header>
    );
}

export default Header;