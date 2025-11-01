import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row p-4 mt-3">
        <div className="col-6 mt-5 mb-4 p-5">
          <img src="media/image/Education.svg" alt="no" />
        </div>
        <div className="col-6 mt-5 mb-4 p-5">
          <h1 className=" mb-3" textalign="center">
            Free and open market education
          </h1>
          <p className="fs-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="/#" className="" style={{ textDecoration: "none" }}>
            Varsity<i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="fs-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="/#" className="" style={{ textDecoration: "none" }}>
            TradingQ&A<i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
