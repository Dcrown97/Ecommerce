import React, { useEffect } from "react";
import { useState } from "react";
import ".././Day1.css";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
import GridProduct from "../Components/GridProduct";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import Product from "../Components/Product";

function ShopList() {

  const [pageT, setPageType] = useState("list");
  const [products, setProducts] = useState([]);

  const togrid = () => {
    localStorage.setItem("pageType", "grid");
    setPageType("grid");
  };

  const tolist = () => {
    localStorage.setItem("pageType", "list");
    setPageType("list");
  };


  let pageType = localStorage.getItem("pageType");

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
  }, [pageType]);

    return (
        <div>
        <Nav />
        <Header desc="Shop List"/>
        <MobileNav desc="Shop List"/>
        
        
        <div className="container">
          <div className="section-4">
            <Filter grid={togrid} list={tolist} />
          </div>
          <div className="main">
            <div className="row">
              
              <div className="col-lg-11" >
                {pageType === "list" ? (
                  <div className="col-lg-9 list-card">
                    {products.map((product, i) => {
                      return (
                        <Product
                          key={i}
                          id={product.id}
                          pic={product.product_image1}
                          productName={product.product_name}
                          productPrice={product.product_price}
                          oldPrice={product.product_old_price}
                          description={product.product_description}
                        />
                      )
                    })}

                  </div>
                ) : pageType === "grid" ? (
                  <div className="col-lg-9">
                    <div className="row">

                      {products.map((product, i) => {
                        return (
                          <GridProduct
                            key={i}
                            id={product.id}
                            pic={product.product_image1}
                            productName={product.product_name}
                            productPrice={product.product_price}
                            oldPrice={product.product_old_price}
                            description={product.product_description}
                          />
                        )
                      })}
                      {/* <GridProduct pic="chair.png" productName="Chair 1" />
                  <GridProduct pic="chair4.png" productName="Chair 4" />
                  <GridProduct pic="chair4.png" productName="Chair 4" />
                  <GridProduct pic="chair3.png" productName="Chair 3" />
                  <GridProduct pic="chair.png" productName="Chair 2" />
                  <GridProduct pic="chair2.png" productName="Chair 2" />
                  <GridProduct pic="chair.png" productName="Chair 2" />
                  <GridProduct pic="chair2.png" productName="Chair 2" /> */}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="supporter">
            <img src="supporters.jpg" alt="" />
          </div>
        </div>
        <Footer/>
    
      </div>
    )
}

export default ShopList;
