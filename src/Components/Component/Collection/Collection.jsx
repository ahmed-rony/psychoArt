import React, { useState } from 'react';
import './Collection.scss';
import { Box, Tab, Tabs } from '@mui/material';
import { artData, patternData, photographyData, sportData } from '../../Data/mockData';


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
        >
            {value === index && (
                <h3>{children}</h3>
            )}
        </div>
    );
}

const Collection = () => {
    const [tab, setTab] = useState(0);

    const handleTabs = (e, val) => {
        setTab(val);
    }
    return (
        <div className='collection'>
            <div className="header">
                <h3>Collection</h3>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
            </div>
            <div className='container'>
                <Box>
                    <Tabs className='tabs' value={tab} onChange={handleTabs}>
                        <Tab className='tab' label="Art" />
                        <Tab className='tab' label="Sport" />
                        <Tab className='tab' label="Photography" />
                        <Tab className='tab' label="Pattern" />
                    </Tabs>
                </Box>
                <TabPanel value={tab} index={0}>
                    <div className="container p-0">
                        <div className="row gx-3">
                            {
                                artData.map((i) => (
                                    <div className="col-md-4 col-6">
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
                </TabPanel>
                <TabPanel value={tab} index={1}>
                <div className="container p-0">
                        <div className="row gx-3">
                            {
                                sportData.map((i) => (
                                    <div className="col-md-4 col-6">
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
                </TabPanel>
                <TabPanel value={tab} index={2}>
                    <div className="container p-0">
                        <div className="row gx-3">
                            {
                                photographyData.map((i) => (
                                    <div className="col-md-4 col-6">
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
                </TabPanel>
                <TabPanel value={tab} index={3}>
                    <div className="container p-0">
                        <div className="row gx-3">
                            {
                                patternData.map((i) => (
                                    <div className="col-md-4 col-6">
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
                </TabPanel>
            </div>
        </div>
    );
};

export default Collection;