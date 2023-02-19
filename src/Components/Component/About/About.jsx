import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className='about'>
            <div className="header">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <h4>Get Popular NFT</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;