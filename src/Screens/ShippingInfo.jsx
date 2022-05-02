import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import Button from "../Components/Button";
import CartTotals from "../Components/CartTotals";
import CheckoutProduct from "../Components/CheckoutProduct";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import { PaystackConsumer } from 'react-paystack';


function ShippingInfo() {

  const [isLoading, setIsLoading] = useState(false)

  const user = JSON.parse(localStorage.getItem("user"));
  const [first, last] = user.name.split(" ");
  console.log("user", first)

  // const [emailNumber, setEmailNumber] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [address, setAddress] = useState("");
  // const [apartment, setApartment] = useState("");
  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  // const [postalCode, setPostalCode] = useState("");
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    emailNumber: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    postalCode: "",
    user_id: `${user.id}`
  })


  const handleChange = (e) => {
    setShipping({ ...shipping, [e.target.id]: e.target.value })
  }

  const {
    items,
    totalItems,
    cartTotal,
  } = useCart();

  const handleShopping = () => {

    const data = {
      ...shipping,
      "emailNumber": shipping.emailNumber,
      "firstName": shipping.firstName,
      "lastName": shipping.lastName,
      "address": shipping.address,
      "apartment": shipping.apartment,
      "city": shipping.city,
      "country": shipping.country,
      "postalCode": shipping.postalCode,
      "user_id": `${user.id}`
      
    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("AuthoriZation", "Bearer " + JSON.parse(localStorage.getItem('jwt')));?

    fetch('http://localhost:8000/api/shipping', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log('res is back', res)
        alert(res.msg);
      })
      .catch(error => {
        console.log('error', error)
      });

  }


  const ship = () => {

    fetch(`http://localhost:8000/api/shipping/${user.id}`, {

    })

    .then(response => {
      return response.json();
    })
    .then(res => {
      console.log('ship is back', res)
      if (res.length > 0) {
        
        setShipping(res[0]);
        setIsLoading(true);

      }
    })
    .catch(error => {
      console.log('error', error)
    });

  }

  const handleUpdateshipping = () => {

    const data = {
      ...shipping,
      "emailNumber": shipping.emailNumber,
      "firstName": shipping.firstName,
      "lastName": shipping.lastName,
      "address": shipping.address,
      "apartment": shipping.apartment,
      "city": shipping.city,
      "country": shipping.country,
      "postalCode": shipping.postalCode,
      "user_id": `${user.id}`

    };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("AuthoriZation", "Bearer " + JSON.parse(localStorage.getItem('jwt')));

    fetch(`http://localhost:8000/api/updateshippings/${user.id}`, {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(data)
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log('res is back', res)
      })
      .catch(error => {
        console.log('error', error)
      });

  }

  useEffect(() => {
    ship();
   
  }, [])




  // const {
  //   isEmpty,
  //   totalUniqueItems,
  //   items,
  //   totalItems,
  //   cartTotal,
  //   updateItemQuantity,
  //   removeItem,
  //   emptyCart,
  // } = useCart();


  return (
    <div>
      <Nav />
      <Header desc="Hekto Demo" />
      <MobileNav desc="Hekto Demo" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h4 className="demo-txt">Hecto Demo</h4>
            <p className="demo-Ptxt">Cart/ Information/ Shipping/ Payment</p>
            <div className="info-div">
              <h5 className="contact-info">Contact Information</h5>




              <h6 className="contact-info-p">

                {
                  user ? user.name : 'Already have an account? Log in'
                }

              </h6>



              <div>
                <input
                  className="checkout-input"
                  type="text"
                  placeholder="Email or mobile phone number"
                  name=""
                  value={shipping.emailNumber}
                  id="emailNumber"
                  onChange={handleChange}
                />

                <input className="checkout-input-checkbox" type="checkbox" />
                <label className="input-checkbox-label" htmlFor="">
                  Keep me up to date on news and excluive offers
                </label>

                <div className="row shipping-add-div">
                  <h4 className="shipping-txt">Shipping Address</h4>
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="First name (optional)"
                      onChange={handleChange}
                      value={shipping.firstName}
                      id="firstName"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="Last name"
                      onChange={handleChange}
                      value={shipping.lastName}
                      id="lastName"
                    />
                  </div>
                </div>

                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="Address"
                  name=""
                  value={shipping.address}
                  id="address"
                  onChange={handleChange}
                />
                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="Appaetnentment,suit,e.t.c (optional)"
                  name=""
                  value={shipping.apartment}
                  id="apartment"
                  onChange={handleChange}
                />
                <input
                  className="checkout-input2"
                  type="text"
                  placeholder="City"
                  name=""
                  value={shipping.city}
                  id="city"
                  onChange={handleChange}
                />

                <div className="row">
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="Bangladesh"
                      value={shipping.country}
                      id="country"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="checkout-input2"
                      type="text"
                      placeholder="Postal Code"
                      value={shipping.postalCode}
                      id="postalCode"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div style={{ marginTop: "20px", width: "20%" }}>
                  {isLoading ? (<Button btnClass="login-btn" btnText="Update Info" btnFunc={handleUpdateshipping} />)
                    : (<Button btnClass="login-btn" btnText="Save Shipping Info" btnFunc={handleShopping} />) }
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 checked-out-prod" >
            {
              items.map((item, i) => {
                return (
                  <CheckoutProduct
                    key={i}
                    img={item.pic}
                    price={item.price}
                    qty={item.quantity}
                    productName={item.productName}
                    item={item}
                  />

                )
              })
            }

            <CartTotals
              items={items}
              paystackprop={true}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShippingInfo;
