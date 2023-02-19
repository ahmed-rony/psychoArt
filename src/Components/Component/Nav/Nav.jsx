import React from 'react';
import './Nav.scss';
import { BiSearch } from 'react-icons/bi';

const Nav = () => {
    return (
        <div className='nav_bar'>
            <div className="container">
                <div className="content">
                    <div className="nav_item">
                        <h4>Psycho<span>Art</span></h4>
                    </div>
                    <div className="nav_item">
                        <div className="search">
                            <BiSearch className='icon' />
                            <input type="text" placeholder='Search items and collections' />
                        </div>
                    </div>
                    <div className="nav_item">
                        <ul>
                            <li>Collctions</li>
                            <li>Feature</li>
                            <li>FAQ</li>
                            <li><button className='brand-btn'>Select Wallet</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;