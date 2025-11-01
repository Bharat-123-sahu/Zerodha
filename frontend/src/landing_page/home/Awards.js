import React from 'react';

function Awards() {
    return ( 
        <div class="container">
            <div class="row mt-5">
            <div class="col-6 ">
                <img src="media/image/largestBroker.svg" alt="Awards" className="img-fluid mb-5" />
            </div>
            <div class="col-6 mt-5">
                <h1>Largest strong Broker</h1>
                <p>lorem10 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.               </p>
                <div class="row">
                   <div class="col-6 mb-2 mt-2"><ul>
                    <li>Futures and Options</li>
                    <li>Commodity derivatives</li>
                    <li> Currency derivatives</li>
                </ul>
                </div> 
                <div class="col-6 mt-2">
                    <ul >
                    <li>Stocks & IPOs</li>
                    <li> Direct mutual funds</li>
                    <li>Bonds and Govern</li>
                </ul>
                </div>
                
                </div>
                 <img src="media/image/pressLogos.png" alt="Awards" className="img-fluid mb-5" style={{width:"90%"}} /> 
                </div>
           
            </div>
            </div>
     );
}

export default Awards;