import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <nav className='header__nav'>
                    <ul className='header__nav-menu'>
                        <li className='header__nav-item'>
                            <a href="" className='header__nav-link'>Home</a>
                        </li>
                        <li className='header__nav-item'>
                            <a href="" className='header__nav-link'>Search</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
