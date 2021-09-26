import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-section">

            <div className="website-name">
                <h2>POETS CORNER</h2>
                <p>Read Books,Share Books</p>
            </div>
            <nav>
                <div>
                    <a href="/POEM">POEM</a>
                    <a href="/BOOKS">BOOKS</a>
                    <a href="/AURTHOR">AURTHOR</a>
                    <a href="/LIBRABY">LIBRABY</a>
                    <a href="/ABOUT">ABOUT</a>
                </div>

                <div className="input-feild">
                    <input placeholder="Search Your Favourite Aurthor" type="text" /> <button>Search</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;