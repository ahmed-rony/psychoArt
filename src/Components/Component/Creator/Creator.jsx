import React from 'react';
import { creatorData } from '../../Data/mockData';
import './Creator.scss';

const Creator = () => {
    return (
        <div className='creator'>
            <div className="header">
                <h3>Top Creator</h3>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
            </div>
            <div className="container">
                <div className="row">
                    {
                        creatorData.map((i) => (
                            <div key={i.id} className="col-md-4">
                                <div className="item">
                                    <div className="img-sec">
                                        <img src={i.cover} alt="" />
                                        <img className='profile-img' src={i.profile} alt="" />
                                    </div>
                                    <div className="details">
                                        <h4>{i.user}</h4>
                                        <p>{i.desc}</p>
                                        <button className="brand-btn">+ Follow</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Creator;