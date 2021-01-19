// React
import React from 'react';
import '../styles/Header.scss';

const Header = (props) => {
    // JSX
    return (
        <header>
            <div className="inner-left">
                <div className='brand-logo'></div>
                <h1>Eternal Shop</h1>
            </div>
            <div className="inner-right">
                <a href="/">Sign-in</a>
                <button><i class="far fa-user-circle" /> Login</button>
            </div>
        </header>
    );
};

export default Header;