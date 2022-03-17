import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import CalculateShopping from "../Components/CalculateShopping";
import CartProduct from "../Components/CartProduct";
import CartTotals from "../Components/CartTotals";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";

function ShoppingCart() {

  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const handleEmptyCart = () => {
    emptyCart();
  }

  const cart = items.filter(item => item.type !== 'wish')
  console.log('cart', cart);


  // if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>


  return (
    <div>
      <Nav />
      <Header desc="Shopping Cart" />
      <MobileNav desc="Shopping Cart" />
      {
        isEmpty ?
          (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Cart Cleared!</h5>
                <Link to="/products">
                  <button class="card-text btn btn-primary">Please Add a product.</button>
                </Link>
              </div>
            </div>
          )
          :
          (
            <div className="container shopping-div">
              <div className="shopping-cart">

                <div className="row">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-4">
                        <h6 className="mb-4">Product</h6>
                      </div >
                      <div className="col-lg-2">
                        <h6 className="mb-4">Price</h6>
                      </div>
                      <div className="col-lg-2">
                        <h6 className="mb-4">Quantity</h6>
                      </div>
                      <div className="col-lg-2">
                        <h6 className="mb-4">Total</h6>
                      </div>
                      <div className="col-lg-2">

                      </div>
                      {
                        cart.map((item, index) => {
                          return (
                            <CartProduct
                              img={item.pic}
                              price={item.price}
                              qty={item.quantity}
                              productName={item.productName}
                              item={item}
                            />
                          )
                        })
                      }
                    </div >
                    <div className="row">
                      <div className="col-lg-3"><Link to="/products"><button className="update-cart-btn">Update Cart</button></Link></div>
                      <div className="col-lg-3"></div>
                      <div className="col-lg-3"></div>
                      <div className="col-lg-3"><button className="clear-cart-btn" onClick={() => handleEmptyCart()}>Clear Cart</button></div>
                    </div>
                  </div >
                  <div className="col-lg-4">
                    <h6 style={{ textAlign: "center" }} className="mb-4">
                      Cart Totals
                    </h6>
                    <CartTotals />
                    <h6 style={{ textAlign: "center" }} className="mb-4 mt-4">
                      Calculate Shopping
                    </h6>
                    <CalculateShopping />
                  </div>
                </div >

              </div >
            </div >
          )
      }
      <Footer />
    </div>
  );
}
export default ShoppingCart;
