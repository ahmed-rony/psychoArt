import React, { useState } from 'react';
import './Nav.scss';
import { BiSearch } from 'react-icons/bi';
import { ImMenu } from 'react-icons/im';
import { Drawer } from '@mui/material';
import { Box } from '@mui/system';

const Nav = () => {
    const [state, setState] = useState(false);

    const handleOpen = () => setState(true);

    const handleClose = () => setState(false);

    return (
        <div className='nav_bar'>
            <div className="container">
                <div className="content">
                    <div className="nav_item">
                        <h4>Psycho<span>Art</span></h4>
                        <ImMenu onClick={handleOpen} className='nav-icon' />
                    </div>
                    <div className="nav_item">
                        <div className="search">
                            <BiSearch className='icon' />
                            <input type="text" placeholder='Search items and collections' />
                        </div>
                    </div>
                    <div className="nav_item">
                        <ul>
                            <li>Collections</li>
                            <li>Feature</li>
                            <li>FAQ</li>
                            <li><button className='brand-btn'>Select Wallet</button></li>
                        </ul>
                        <ImMenu onClick={handleOpen} className='tab-icon' />
                    </div>
                </div>
            </div>
            <Drawer
                open={state}
                onClose={handleClose}
            >
                <Box className='mobile-nav'>
                    <h4 onClick={handleClose}>Psycho<span>Art</span></h4>
                    <ul>
                        <li>Collections</li>
                        <li>Feature</li>
                        <li>FAQ</li>
                        <li><button>Select Wallet</button></li>
                    </ul>
                </Box>
            </Drawer>
        </div>
    );
};

export default Nav;