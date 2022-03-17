import React, { useContext, useEffect } from "react";
import { PaystackConsumer } from "react-paystack";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { UserContext } from "../Context";
import Button from "./Button";

function CartTotals({ items, paystackprop }) {

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  let paystack = paystackprop;

  const hhu = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, [])

  const {
    totalUniqueItems,
    item,
    totalItems,
    cartTotal,
    updateItemQuantity,
    emptyCart,
  } = useCart();


  // you can call this function anything
  const handleSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    // console.log("loading")
    // console.log('payload', emailNumber, firstName, lastName, address, apartment, city, country, postalCode,);
    // let payload = {
    //   emailNumber,
    //   firstName,
    //   lastName,
    //   address,
    //   apartment,
    //   city,
    //   country,
    //   postalCode,
    // }


    // fetch('http://localhost:8000/api/shipping', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', },
    //   body: JSON.stringify(payload)
    // })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(res => {
    //     console.log('res is back', res)
    //     alert(res.msg);
    //     navigate('/order-completed');
    //   })
    //   .catch(error => {
    //     console.log('error', error)
    //   });



    // console.log('payment', user_id, product_id, price, quantity, productTotal, transTotal, tranStatus, transRef,);
    let payment = {
      // user_id
      reference,
      items,
      cartTotal,
    }

    console.log(payment);



    items.forEach((e, i) => {
      fetch(`http://localhost:8000/api/payments/${e.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ tranStatus: reference.status, transRef: reference.reference })
      })
        .then(response => {
          return response.json()
        })
        .then(response => {

          if (items.length===i+1) {

            alert(response.message);
            emptyCart();
          }
          navigate("/")
        })
    })

    // // console.log(reference);

  };

  const handlePayment = () => {
    items.forEach((e) => {
      fetch('http://localhost:8000/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify({ user_id: user.id, product_id: e.id, price: e.price, quantity: e.quantity, productTotal: e.itemTotal, transTotal: cartTotal, tranStatus: "pending", })
      })
        .then(response => {
          return response.json()
        })
        .then(response => {
          console.log(response);
        })
    })
  }


  // you can call this function anything
  const handleClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  // const checkUser = (initializePayment) => {
  //   if (hhu) {

  //     initializePayment(handleSuccess, handleClose)
  //     // navigate("/proceed");
  //   } else {
  //     navigate("/login");
  //   }

  // }


  const checkUser = () => {
    if (hhu) {

      // initializePayment(handleSuccess, handleClose)
      navigate("/proceed");
    } else {
      navigate("/login");
    }

  }



  const config = {
    reference: (new Date()).getTime().toString(),
    email: "user@example.com",
    amount: cartTotal * 100,
    publicKey: 'pk_test_fd4c241bcb811f50ac1a86c65663afb7b247ad45',

  };

  const componentProps = {
    ...config,
    text: 'Paystack Button Implementation',
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose
  };

  return (
    <div className="total-checkout">
      <h4 className="mt-2 cart-total-txt">Total Unique Items <span style={{ float: "right" }}>{totalUniqueItems}</span></h4>
      <hr />
      <h4 className="mt-2 cart-total-txt">Total Items <span style={{ float: "right" }}>{totalItems}</span></h4>
      <hr />
      <h4 className="mt-4 cart-total-txt2">Totals <span style={{ float: "right" }}>£{cartTotal}</span></h4>
      <hr />
      <input className="mt-4" type="checkbox" />
      <label
        style={{ marginLeft: "4px" }}
        htmlFor=""
        className="cart-total-txt3"
      >
        Shipping & taxes calculated at checkout
      </label>
      {paystack ? (<PaystackConsumer {...componentProps} >
        {({ initializePayment }) =>
          <Button btnClass="proceed-btn2 mt-4" btnText="Buy Now" btnFunc={() => {
            handlePayment()
            initializePayment(handleSuccess, handleClose)
          }} />}
      </PaystackConsumer>) : (<Button btnClass="proceed-btn2 mt-4" btnText="Proceed To Checkout" btnFunc={checkUser} />)}







    </div>
  );
}

export default CartTotals;
