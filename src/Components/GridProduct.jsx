import React from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useCart } from "react-use-cart";
import notify from "../Context/notify";

function GridProduct({ id, productName, pic, oldPrice, productPrice }) {

  const product = {
    id, pic, productName,
    productPrice,
    price: productPrice,
    oldPrice,
  }

  const { items, addItem, removeItem } = useCart();

  const CheckProduct = (product) => {
    const checkItem = (item) => {
      return item.id === product.id
    };

    const inCart = items.findIndex(checkItem);

    if (inCart > -1) {
      notify("Product Already In Cart", "warn");
    } else {
      addItem(product);
      notify("Product Added Successfully", "success");
    }
  }

  return (
    
    <div className="col-lg-4 grid-main-div">
      
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

        <div className="row grid-div">
          <div className="col-lg-2 icon-div">
            <div className="grid-icons">
            <i onClick={() => CheckProduct(product)} className="fa fa-cart-plus item-actions " />
              <i className="fa fa-heart item-actions" />
              <i className="fa fa-search-plus item-actions" />
            </div>
          </div>
          <div className="col-lg-10 grid-img-div">
          <div className="grid-product">
            <Link to={`/details/${id}`}>
              <img
                src={`http://localhost:8000/${pic}`}
                alt=""
                className="card-img-top"
              />
            </Link>
            </div>
            <div className="grid-product-content">
              <h6>{productName}</h6>
              <div>
                <span className="sm-circle bg-warning " />
                <span className="sm-circle bg-danger" />
                <span className="sm-circle bg-primary" />
              </div>
              <p>
                ${productPrice}.00{" "}
                <span style={{ textDecoration: "line-through" }}>
                  ${oldPrice}.00
                </span>
              </p>
            </div>
          </div>
      </div>
      </div>
    
  );
}

export default GridProduct;
