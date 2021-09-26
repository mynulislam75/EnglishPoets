import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header-section">

{/* website name showing portion */}
            <div className="website-name">
                <h2><span id="header-text01">POETS</span><span id="middle-symbol">//</span><span id="header-text02">CORNER</span></h2>
                <p>Read Books,Share Books</p>
            </div>
{/* nav bar portion */}
            <nav>
                <div>
                    <a href="/POEM">POEM</a>
                    <a href="/BOOKS">BOOKS</a>
                    <a href="/AURTHOR">AURTHOR</a>
                    <a href="/LIBRABY">LIBRABY</a>
                    <a href="/ABOUT">ABOUT</a>
                </div>
{/* input feild */}
                <div className="input-feild">
                    <input placeholder="Search Your Favourite Aurthor" type="text" /> <button>Search</button>
                </div>

                <div className="budget-feild">
                <h2>Total Budget:$1900</h2>
                </div>
               
            </nav>
        </div>
    );
};

export default Header;