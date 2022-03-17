import React, { useEffect, useState } from "react";
import ".././Day1.css";
import Filter from "../Components/Filter";
import Footer from "../Components/Footer";
import GridProduct from "../Components/GridProduct";
import Header from "../Components/Header";
import Leftbar from "../Components/Leftbar";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import Product from "../Components/Product";

function Pages() {
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
    togrid();
  }, [pageType]);

  return (
    <div>
      <Nav />
      <Header desc="shop left sidebar" />
      <MobileNav desc="shop left sidebar" />

      <div className="container">
        <div className="section-4">
          <Filter grid={togrid} list={tolist} />
        </div>
        <div className="main">
          <div className="row">
            <Leftbar />
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
                      product={product}
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
        <div className="supporter">
          <img src="supporters.jpg" alt="" />
        </div>
      </div>
      <Footer />

      {/* JavaScript Bundle with Popper */}
    </div>
  );
}

export default Pages;
