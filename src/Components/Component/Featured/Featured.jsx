import React from 'react';
import { featured } from '../../Data/mockData';
import './Featured.scss';

const Featured = () => {
    return (
        <div className='featured'>
            <div className="header">
                <h3>Featured Artworks</h3>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
            </div>
            <div className="container">
                <div className="row">
                    {
                        featured.map((i)=>(
                            <div className="col-md-4">
                                <div className="item">
                                    <div className="card-img">
                                        <img src={i.imgUrl} alt="" />
                                    </div>
                                    <div className="details">
                                        <div className="top">
                                            <h5>@{i.user}</h5>
                                            <span>Current Bid</span>
                                        </div>
                                        <div className="bottom">
                                            <h4>{i.title}</h4>
                                            <span>{i.bid}ETH</span>
                                        </div>
                                    </div>
                                    <button className="brand-btn">Place a bid</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Featured;