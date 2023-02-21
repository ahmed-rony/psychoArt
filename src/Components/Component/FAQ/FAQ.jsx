import React from 'react';
import './FAQ.scss';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { MdExpandMore } from 'react-icons/md';

const FAQ = () => {
    return (
        <div className='faq'>
            <div className="header">
                <h3>FAQ</h3>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="content">
                            <Accordion className='item'>
                                <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='question'>
                                    <h4>Random Question</h4>
                                </AccordionSummary>
                                <AccordionDetails className='details'>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='item'>
                                <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='question'>
                                    <h4>Random Question</h4>
                                </AccordionSummary>
                                <AccordionDetails className='details'>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='item'>
                                <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='question'>
                                    <h4>Random Question</h4>
                                </AccordionSummary>
                                <AccordionDetails className='details'>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="content">
                            <Accordion className='item'>
                                <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='question'>
                                    <h4>Random Question</h4>
                                </AccordionSummary>
                                <AccordionDetails className='details'>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='item'>
                                <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='question'>
                                    <h4>Random Question</h4>
                                </AccordionSummary>
                                <AccordionDetails className='details'>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className='item'>
                                <AccordionSummary expandIcon={<MdExpandMore className='accordion-icon' />} className='question'>
                                    <h4>Random Question</h4>
                                </AccordionSummary>
                                <AccordionDetails className='details'>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi hic incidunt, laboriosam officia, dicta assumenda maiores eius voluptas reiciendis odio quis consequuntur consequatur magnam aspernatur? Reiciendis ut minima a enim?</p>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;