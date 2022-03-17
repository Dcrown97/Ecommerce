import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Description from "../Components/Description";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import RelatedProduct from "../Components/RelatedProduct";
import SingleProduct from "../Components/SingleProduct";

function ProductDetails() {

  const [ product, setProducts ] = useState();
  const { id } = useParams();

  const getSingleProduct = (id) => {

    fetch(`http://localhost:8000/api/single_product/${id}`)
      .then(res => res.json())
      .then(json => {

        console.log('json', json)
        // localStorage.setItem('data',JSON.stringify(json));
        setProducts(json);
      })

  }

  useEffect(() => {
    console.log('product_id is', id)
    getSingleProduct(id);
  }, [])

  return (
    <div>
      <Nav  />
      <Header desc="Product Details"/>
      <MobileNav desc="Product Details" />
      <SingleProduct product={product}/>
      <Description />
      <RelatedProduct/>
      <Footer />
    </div>
  );
}

export default ProductDetails;
