import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {

    console.log("loading")
    console.log('payload', name, email, password);
    let payload = {
      name,
      email,
      password
    }


    fetch('http://localhost:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(payload)
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        // alert("successfull")
        toast("Registration Successfully!, Pls Login");
        const timer = setTimeout(() => {
          navigate('/login');
        }, 5000)

        
      })
      .catch(error => {
        console.log('error', error)
        toast("Registration Failed!");
      });

  }

  return (
    <div>
      <Nav  />
      <Header desc="My Account"/>
      <MobileNav desc="My Account" />
      <div>
        {/* <button onClick={notify}>Notify !</button> */}
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
      </div>
      <div className="login">
        <h4 style={{ textAlign: "center" }} id="login-txt">
          Register
        </h4>
        <p style={{ textAlign: "center" }} className="login-txt mb-4">
          Please register using account details below
        </p>
        <input
          onChange={(e) => setName(e.target.value)}
          className="login-input "
          type="name"
          placeholder="Full Name"
          value={name}
        />
        <br /> <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="login-input "
          type="email"
          placeholder="Email address"
          value={email}
        />
        <br /> <br />
        <input className="login-input" onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
        <p className="login-txt mt-4 mb-4">Forgot your password?</p>
        <Button btnText="Sign Up" btnClass="login-btn" btnFunc={handleRegister}/>
        <p className="login-txt mt-4" style={{ textAlign: "center" }}>
          Already have an Account? <Link to="/login">Login</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
