import React from 'react';
import '../css/Header.css';

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
                        <li><a href="Home.html">Home</a></li>
                        <li><a href="aboutus.html">About</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Favorites</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
        </header>

    );
}

export default Header