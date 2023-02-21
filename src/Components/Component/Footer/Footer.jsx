import React from 'react';
import './Footer.scss';
import { FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="item">
                                <h4>Psycho<span>Art</span></h4>
                                <p>The best NFT marketplace website in the world and feel your experience in selling or buy our work</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <h4>About</h4>
                                <ul>
                                    <li>Product</li>
                                    <li>Resource</li>
                                    <li>Term & Condition</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <h4>Company</h4>
                                <ul>
                                    <li>Our Team</li>
                                    <li>Partner With Us</li>
                                    <li>Privacy & Policy</li>
                                    <li>Features</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="item last-item">
                                <h4>Contact</h4>
                                <ul>
                                    <li>+123456789</li>
                                    <li>example@mail.com</li>
                                </ul>
                                <div className='icons'>
                                    <span><FaYoutube /></span>
                                    <span><FaTwitter /></span>
                                    <span><FaInstagram /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6>&copy; Copyright 2023 | Psycho<span>Art</span></h6>
        </div>
    );
};

export default Footer;