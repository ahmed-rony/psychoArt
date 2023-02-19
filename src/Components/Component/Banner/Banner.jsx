import React from 'react';
import { bannerRatio } from '../../Data/mockData';
import './Banner.scss';
import img15 from "../../Images/banner/Rectangle 15.png";
import img16 from "../../Images/banner/Rectangle 16.png";
import img17 from "../../Images/banner/Rectangle 17.png";
import img18 from "../../Images/banner/Rectangle 18.png";
import img19 from "../../Images/banner/Rectangle 19.png";
import img20 from "../../Images/banner/Rectangle 20.png";
import img21 from "../../Images/banner/Rectangle 21.png";

const Banner = () => {
    return (
        <div className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="content">
                            <div className="details">
                                <h1>Create, Sell & Collect Your Own Creative NFT</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</p>
                                <div className="banner-btn">
                                    <button className="brand-btn">Explore Now</button>
                                    <button className="brand-btn">Sell NFT</button>
                                </div>
                            </div>
                            <div className="ration-details">
                                {
                                    bannerRatio.map((i) => (
                                        <div key={i.id} className="item">
                                            <h5>{i.quantity}k+</h5>
                                            <span>{i.name}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="gallery-content">
                            <div className="row gx-3">
                                <div className="col-md-4">
                                    <div className="items">
                                        <div className="item"><img src={img15} alt="" /></div>
                                        <div className="item"><img src={img17} alt="" /></div>
                                        <div className="item"><img src={img18} alt="" /></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="items">
                                        <div className="item"><img src={img16} alt="" /></div>
                                        <div className="item"><img src={img19} alt="" /></div>
                                        <div className="item"><img src={img20} alt="" /></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="items">
                                        <div className="item"><img src={img21} alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;