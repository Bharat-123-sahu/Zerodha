import React from "react";

function Universe() {
   const styles={height:"90px", width:"140px"};
  return (
    <>
    
      <div className="container">
        <div className="row mt-3 mb-3 p-5 text-center">
          <h2 className="text-muted">The Zerodha Universe</h2>
          <br></br> 
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="col-4 p-3 ">
            <img  id="ditto" src="media/image/dittoLogo.png" style={styles} alt="no" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div>
          <div className="col-4 p-3 ">
            <img src="media/image/dittoLogo.png" style={styles} alt="no" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div>
          <div className="col-4 p-3 ">
            <img src="media/image/dittoLogo.png" style={styles} alt="no" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div>
        </div>
         <div className="row mt-3 mb-3 p-5 text-center">
         
          <div className="col-4 p-3 ">
            <img src="media/image/dittoLogo.png" style={styles} alt="no" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div>
          <div className="col-4 p-3 ">
            <img src="media/image/dittoLogo.png" style={styles} alt="no" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div>
          <div className="col-4 p-3 ">
            <img src="media/image/dittoLogo.png" style={styles} alt="no" />
            <p>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
          </div>
        </div>
             <center className="p-5"> <button className="btn btn-primary text-center text-muted lightning-btn ease- fs-4 "> sign up for free</button></center>

      </div>
    </>
  );
}

export default Universe;
