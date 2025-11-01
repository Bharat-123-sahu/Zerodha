import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row p-4 mt-3'>
                <div className='col-6 p-5 mt-2'>
                     <h1  className=" mb-3" textalign="center">
                        Unbeatable Pricing
                     </h1>
                     <p className='fs-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="/#" className='' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className='col-6 mt-5 mb-4 p-5' style={{height:"150px"}}>
                      <div className='row'>
                        <div className='col-4'>
                             <div className='row'>
                        <div className='col-6'>
                             <p style={{fontSize:"60px"}}>0₹</p>
                        </div>
                        <div className='col-6'>
                             <p style={{fontSize:"12px"}}>Free account opening</p>
                        </div>
                        </div>
                            
                        </div>
                        <div className='col-4'>
                             <div className='row'>
                        <div className='col-6'>
                             <p style={{fontSize:"60px"}}>0₹</p>
                        </div>
                        <div className='col-6'>
                           <p style={{fontSize:"12px"}}>Free equity delivery and direct mutual funds</p>
                        </div>
                     </div>
                          

                        </div>
                        <div className='col-4'>
                            <div className='row'>
                                <div className='col-6'>
                                   <p style={{fontSize:"60px"}}>0₹</p>
                                </div>
                                 <div className='col-6'>
                                    <p style={{fontSize:"12px"}}>Intraday and F&O</p>
                                 </div>
                            </div>
                            

                        </div>
                      </div>
                </div>
            </div>
        </div>

     );
}

export default Pricing;