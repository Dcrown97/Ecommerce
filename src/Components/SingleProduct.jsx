import React, { useState } from "react";
import Product from "./Product";

function SingleProduct({product}) {
  const [singleImage, setSingleImage] = useState ("mainpic.png");

  const changeImage = (theImage) =>{
    setSingleImage(theImage);
  }
  console.log(product);
  console.log(`http:\\localhost:8000\ ${product?.image}` )
  return (
    <div className="container">
      <div
        className="row"
        style={{
          boxShadow: "0px 0px 25px 10px #F6F4FD",
          borderRadius: "2px",
          backgroundColor: "#fff",
          marginBlock: "100px",
        }}
      >
        <div className="col-lg-2 single-product-col2">
          <img onClick={() => changeImage("pic1.png")} src={`http://localhost:8000/${product?.product_image2}`} />
          <img onClick={() => changeImage("pic2.png")} className="single-img-middle" src={`http://localhost:8000/${product?.product_image3}`} />
          <img onClick={() => changeImage("pic3.png")} src={`http://localhost:8000/${product?.product_image4}`} alt="bag3" />
        </div>
        <div className="col-lg-4 single-product-col2">
          <img
            // src={`localhost:8000 ${/images/item2.png}`}
            src={`http://localhost:8000/${product?.product_image1}`}
            

            style={{ padding: "8px 4px", width: "375px", height: "487px" }}
            alt="bag4"
          />
        </div>
        <div className="col-lg-6">
          <div className="" style={{ padding: "8px 25px", marginBlock: "15%" }}>
            <div className="">
              <div className="col-lg-12">
                <p
                  className="card-title"
                  style={{ fontFamily: "Josefin Sans", fontSize: "24px" }}
                >
                  {product?.product_name}
                </p>
              </div>
            </div>
            <div className="prices">
              <span>
                <i className="fa fa-star" style={{ color: "yellow" }} />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
                <i
                  className="fa fa-star"
                  style={{ marginLeft: "5px", color: "yellow" }}
                />
              </span>
              <span style={{ color: "blue" }}>(22)</span>
            </div>
            <div>
              <span className="card-price">${product?.product_old_price}</span>
              <span className="card-price-former">${product?.product_price}</span>
            </div>
            <div className="item-description">
              <p
                style={{
                  color: "blue",
                  marginBottom: 0,
                  fontFamily: "Josefin Sans",
                }}
              >
                Color
              </p>
              <p>
                {product?.product_description}
              </p>
            </div>
            <div style={{ marginLeft: "30px" }}>
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  padding: "5px",
                  fontFamily: "Josefin Sans",
                  color: "blue",
                }}
              >
                Add To Cart
              </button>
              <span>
                <i className="fa fa-heart" style={{ padding: "0 8px" }} />
              </span>
            </div>
            <div>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>
                Categories:
              </p>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>Tags:</p>
              <p style={{ fontFamily: "Josefin Sans", color: "blue" }}>
                Share:
                <span>
                  <i
                    className="fa fa-facebook"
                    style={{ color: "blue", paddingLeft: "8px" }}
                  />
                </span>
                <span>
                  <i
                    className="fa fa-instagram"
                    style={{ color: "#FB2E86", paddingLeft: "8px" }}
                  />
                </span>
                <span>
                  <i
                    className="fa fa-twitter-square"
                    style={{ color: "#37DAF3", paddingLeft: "8px" }}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
