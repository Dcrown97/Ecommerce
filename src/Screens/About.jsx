import React, { useEffect, useState } from "react";
import CardOffer from "../Components/CardOffer";
import Footer from "../Components/Footer";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import Background from "../Components/leftabout.png";
import Header from "../Components/Header";
// import Background from "../.././images/leftabout.png";

export default function About({ title, content, image }) {

  const [abouts, setAbout] = useState([]);

  const getAbout = () => {
    fetch("http://localhost:8000/api/abouts")
      .then((response) => response.json())
      .then((about) => {
        console.log("show me abouts", about);
        console.log("single", about[0].title);
        setAbout(about[0]);
      });
  };

  useEffect(() => {
    getAbout();
  }, [])


  return (
    <div>
      <Nav />
      <Header desc={"About Us"} />
      <MobileNav />

      <div className="about">
        <div className="container">
          <div className="row">

            <div className="col-lg-6">
              <div
                className="left-about"
                style={{
                  backgroundImage: `url(${Background})`,
                }}
              >
                <img
                  className="left-about-img"
                  src={`http://127.0.0.1:8000/images/${abouts.image}`}
                />
              </div>
            </div>
            <div className="col-lg-6 right-about">
              <h1 className="about-title">
                {abouts.title}
              </h1>
              <p className="about-text">
                {abouts.content}
              </p>

              <button className="about-btn">Contact us</button>
            </div>
          </div>

          <h2 className="about-features">Our features</h2>

          <div className="row">
            <CardOffer
              title="Free Delivery"
              extra="extra"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida."
              img=".././images/freedelivery.png"
            />
            <CardOffer
              img=".././images/cashback.png"
              title="100% Cash Back"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida."
            />
            <CardOffer
              img=".././images/qualityproduct.png"
              title="Quality Product"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida."
            />
            <CardOffer
              img=".././images/247.png"
              title="24/7 Support"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus
          gravida."
            />
          </div>
        </div>
        <div className="about-client">
          <h2 className="about-client-say">Our client say!</h2>
          <p className="client-name">Selina Gomez</p>
          <p className="client-designation">Ceo At Webecy Digital</p>
          <div className="comments">
            <p className="client-comment">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis
              ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a
              enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor
              aliquam lacus volutpat praesent.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

