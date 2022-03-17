import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import CardOffer from "../Components/CardOffer";
import CardTrending from "../Components/CardTrending";
import FeaturedCard from "../Components/FeaturedCard";
import Footer from "../Components/Footer";
import LateCard from "../Components/LateCard";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import TopCard from "../Components/TopCard";
import { UserContext } from "../Context";
import 'react-toastify/dist/ReactToastify.css';

function Homepage() {

  const [products, setProducts] = useState([]);

  const { user, setUser } = useContext(UserContext);


  const checkUser = () => {
    if (localStorage.getItem("welcome")) {
      toast("Welcome!");
      localStorage.removeItem("welcome");
    }
  }
  
 
  

  const getProducts = () => {
    fetch("http://localhost:8000/api/products")
      .then((response) => response.json())
      .then((products) => {
        console.log("show me products", products);
        
        setProducts(products);
      });
  };

  useEffect(() => {
    getProducts();
    checkUser()
  }, []);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Nav />
      <MobileNav />
      {/* <Homenav active="active" /> */}
      <div className="carousel">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <img style={{ height: "350px" }} src=".././images/lamp.png" alt="" className="lamp-top" />
            </div>
            <div className="col-lg-5">
              <div className="wrapper">
                <h2 className="furniture-b">
                  Best Furniture For Your Castle....
                </h2>
                <h1 className="furniture">
                  New Furniture Collection Trends in 2020
                </h1>
                <p className="sub-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <button className="btn-shop">Shop now</button>
              </div>
            </div>
            <div className="col-lg-5">
              <img style={{ width: "100%", height: "100%" }} src=".././images/homepagechair.png" alt="" className="mt-4" />
            </div>
          </div>
          <div className="circled">
            <span className="sm-circled circle " />
            <span className="sm-circled circle" />
            <span className="sm-circled " />
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="featured">featured Products</h2>

        <div className="row">
          {products.map((product, i) => 
            (
              <FeaturedCard
                key={i}
                id={product.id}
                pic={product.product_image1}
                productName={product.product_name}
                productPrice={product.product_price}
                oldPrice={product.product_old_price}
                description={product.product_description}
                product={product}
              />

            )
          )}
        </div>

        <h2 className="featured">Leatest Products</h2>
        <div className="ltn-nav">
          <span id="nav-ltn">new arrival</span>
          <span id="nav-ltn">best seller</span>
          <span id="nav-ltn">feature</span>
          <span id="nav-ltn">special offer</span>
        </div>

        <div className="row">
          {products.map((product, i) => 
            (
              <LateCard
                key={i}
                id={product.id}
                pic={product.product_image1}
                productName={product.product_name}
                productPrice={product.product_price}
                oldPrice={product.product_old_price}
                description={product.product_description}
                product={product}
              />

            )
          )}
        </div>

        <h2 className="featured-offer">What Shopex Offer!</h2>

        <div className="row">
          <CardOffer img="freedelivery.png" title="24/7 Support" extra="extra" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
          <CardOffer img="cashback.png" title="24/7 Support" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
          <CardOffer img="qualityproduct.png" title="24/7 Support" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
          <CardOffer img="247.png" title="24/7 Support" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." />
        </div>
      </div>
      <div className="unique-features">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <img src="../images/uniquechair.png" alt="" />
            </div>

            <div className="col-lg-5">
              <h1 className="unique-title">
                Unique Features Of latest & Trending Products
              </h1>
              <div className="row">
                <div className="col-lg-1">
                  <span id="color-circle1"> </span>
                </div>
                <div className="col-lg-11">
                  <p className="unique-text">
                    All frames constructed with hardwood solids and laminates
                  </p>
                </div>

                <div className="col-lg-1">
                  <span id="color-circle2"></span>
                </div>
                <div className="col-lg-11">
                  <p className="unique-text">
                    Reinforced with double wood dowels, glue, screw - nails
                    corner blocks and machine nails
                  </p>
                </div>

                <div className="col-lg-1">
                  <span id="color-circle3"></span>
                </div>
                <div className="col-lg-11">
                  <p className="unique-text">
                    Arms, backs and seats are structurally reinforced
                  </p>
                </div>

                <div className="col-lg-3">
                  <button id="uni-btn">Add to cart</button>
                </div>
                <div className="col-lg-4">
                  <p className="subtext-uni">B&B Italian Sofa </p>
                  <p className="subtext-uni2">$32.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="featured">Trending Products</h2>
        <div className="row">
          {products.map((product, i) => {
            return (
              <CardTrending
                key={i}
                id={product.id}
                pic={product.product_image1}
                productName={product.product_name}
                productPrice={product.product_price}
                oldPrice={product.product_old_price}
                description={product.product_description}
                product={product}
              />

            )
          })}
        </div>

        <div className="row second-trend">
          <div className="col-lg-4 trend1">
            <h1 id="text-trend">23% off in all products</h1>
            <p id="text-trend-p">shop now</p>
            <div className="offset-lg-7 col-lg-5">
              <img src=".././images/clockone.png" alt="" />
            </div>
          </div>
          <div className="col-lg-4 trend2">
            <h1 id="text-trend">23% off in all products</h1>
            <p id="text-trend-p">shop now</p>
            <div className="offset-lg-1 col-lg-11">
              <img src=".././images/shelf.png" alt="" />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="row">
              <div className="col-lg-4 img-case">
                <img src="seat.png" alt="" />
              </div>
              <div className="col-lg-6 ">
                <p id="seat-chair">Executive Seat chair</p>
                <p id="seat-chair-price">$32.00</p>
              </div>
              <div className="col-lg-4 img-case">
                <img src="seat2.png" alt="" />
              </div>
              <div className="col-lg-6 ">
                <p id="seat-chair">Executive Seat chair</p>
                <p id="seat-chair-price">$32.00</p>
              </div>
              <div className="col-lg-4 img-case">
                <img src="seat3.png" alt="" />
              </div>
              <div className="col-lg-6 ">
                <p id="seat-chair">Executive Seat chair</p>
                <p id="seat-chair-price">$32.00</p>
              </div>
              <div className="col-lg-4 img-case">
                <img src="seat.png" alt="" />
              </div>
              <div className="col-lg-6 ">
                <p id="seat-chair">Executive Seat chair</p>
                <p id="seat-chair-price">$32.00</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="featured">Discount Item</h2>

        <div className="ltn-nav">
          <span id="nav-ltn">Wood Chair</span>
          <span id="nav-ltn">Plastic chair</span>
          <span id="nav-ltn">Sofa Collection</span>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h1 className="discount-title">20% Discount Of All Products</h1>
            <h2 className="discount-subTitle">Eams Sofa Compact</h2>
            <p className="discount-sub">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <p className="check-text">
                  <i className="fas fa-check check " />
                  Material expose like metals
                </p>
                <p className="check-text">

                  <i className="fas fa-check check" />
                  Material expose like metals
                </p>
              </div>
              <div className="col-lg-6">
                <p className="check-text">
                  <i className="fas fa-check check" />
                  Material expose like metals
                </p>
                <p className="check-text">
                  {" "}
                  <i className="fas fa-check check" />
                  Material expose like metals
                </p>
              </div>
              <button id="uni-btn">shop now</button>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="../images/brownchair.png" alt="" />
          </div>
        </div>

        <h2 className="featured">Top Categories</h2>

        <div className="row">
          {products.map((product, i) => {
            return (
              <TopCard title="Mini LCW Chair" price="57.88"
                key={i}
                id={product.id}
                pic={product.product_image1}
                productName={product.product_name}
                productPrice={product.product_price}
                oldPrice={product.product_old_price}
                description={product.product_description}
                product={product}
              />

            )
          })}
        </div>
      </div>

      <div className="get-latest">
        <div className="container">
          <h1 className="get-latest-text">
            Get Leatest Update By Subscribing <br /> To 0ur Newsletter
          </h1>
          <button id="uni-btn">shop now</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;
