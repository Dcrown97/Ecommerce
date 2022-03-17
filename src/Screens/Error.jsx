import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";

function Error() {
  return (
    <div>
      <Nav  />
      <Header desc="404 Not Found"/>
      <MobileNav desc="404 Not Found" />
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 error-div">
            <img style={{width: "100%"}} src=".././images/error.png" alt="" />
            <button className="back-home-btn">Back To Home</button>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
