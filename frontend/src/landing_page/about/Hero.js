import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5 ">
        <h1 className="fs-2 text-center mt-5">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>
      <div className="row border-top mt-5 p-5">
        <div className="col-6 mt-5  mb-5 p-5">
            <p className="fs-5">We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
            <p className="fs-5">Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
            <p className="fs-5">Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
        </div>
        <div className="col-6 mt-5 mb-5 p-5">
            <p className="fs-5">In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
            <p className="fs-5">Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
            <p className="fs-5">And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
        </div>
      </div>
      <div className="row mt-5 mb-5 ">
        <h1 className="fs-1 text-center mt-5">
          People
        </h1>
      </div>
      <div className="row mt-5 mb-5 ">
        <div className="col-5 text-center">
            <img src="media/image/what.jpg" className="" style={{borderRadius:"50%"}} alt="people" width={"40%"} />
            <h5 className="text-center text-muted p-2">Bharat sahu</h5>
            <p className="text-center">Founder</p>
      </div>
      <div className="col-5">
                    <p className="fs-5 text-muted">Bharat bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className="fs-5 text-muted">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p className="fs-5 text-muted">Playing basketball is his zen.</p>
                    <p className="fs-5 text-muted">Connect on <a href="/#">Homepage</a> /<a href="/#">TradingQnA </a> /<a href="/#">Twitter</a> </p>
                   

      </div>
    </div>
    </div>
  );
}

export default Hero;
