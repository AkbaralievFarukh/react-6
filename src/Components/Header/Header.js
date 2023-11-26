import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <nav className='header__nav'>
                    <ul className='header__nav-menu'>
                        <li className='header__nav-item'>
                            <Link to={'/'} className='header__nav-link'>Home</Link>
                        </li>
                        <li className='header__nav-item'>
                            <Link to={'/'} className='header__nav-link header__nav-link-logo'>Cocktail Club</Link>
                        </li>
                        <li className='header__nav-item'>
                            <Link to={'/'} className='header__nav-link'>Search</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
