import React from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { useCart } from "react-use-cart";
import notify from '../Context/notify';

function Product({ id, pic, productName, productPrice, oldPrice, description }) {
  const product = {
    id, pic, productName,
    productPrice,
    price: productPrice,
    oldPrice, description
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
  console.log('add item = ', addItem)
  
    return (

      <div className="card mb-4">

        <div className="card-body">
          <div className="single-item row">

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
            
            <div className="col-4 ">
              <Link to={`/details/${id}`}>
                {/* <img src={`.././${pic}`} alt="" className="card-img-top" /> */}
                <img src={`http://localhost:8000/${pic}`} alt="" className="card-img-top" />
              </Link>
            </div>

            <div className="col-8">
              <div className="row">
                <div className="col-lg-4">
                  <p className="card-title">{productName}</p>
                </div>
                <div className="col-lg-8">
                  <div className>
                    <span className="sm-circle bg-warning " />
                    <span className="sm-circle bg-danger" />
                    <span className="sm-circle bg-primary" />
                  </div>
                </div>
              </div>
              <div className="prices">
                <span className="card-price">${productPrice}.00</span>
                <span className="card-price-former">${oldPrice}</span>
                <span>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </span>
              </div>
              <div className="item-description">
                <p>{description}</p>
              </div>
              <div>
                <i onClick={() => CheckProduct(product)} className="fa fa-cart-plus item-actions" />
                <i className="fa fa-heart item-actions" />
                <i className="fa fa-search-plus item-actions" />
              </div>
            </div>
          </div>
        </div>

      </div >

    )
  }

export default Product
