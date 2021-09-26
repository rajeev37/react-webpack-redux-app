import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul className="header flex-container flex-s list-style"> 
                <li className="flex-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="flex-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="flex-item">
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
