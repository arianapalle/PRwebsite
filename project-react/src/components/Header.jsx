import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="logo">
            <a href="#">
        
            <img src="./img/footer_img.png" alt="logo" />
                </a>
            </div>

            <nav className="navbar">
                    <ul className="main-menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Favorites</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
        </header>

    );
}

export default Header