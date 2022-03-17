import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import Nav from "../Components/Nav";
import { useContext } from "react";
import { UserContext } from "../Context";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);


  const handleLogin = () => {

    console.log("loading")
    console.log('payload', email, password);
    let payload = {
      email,
      password
    }


    fetch('http://localhost:8000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', },
      body: JSON.stringify(payload)
    })
      .then(response => {
        // console.log('res is back', response.json())
        return response.json();
      })
      .then(res => {
        console.log('res is back', res)
        if (res.error == "invalid_credentials") {
          toast("Email or Password Not Valid!");
        }
        else {

          localStorage.setItem("user", JSON.stringify(res.user));
          localStorage.setItem("welcome", "welcome");
          localStorage.setItem("token", JSON.stringify(res.token));
          setUser(res.user);
          navigate('/home');
        }

      })
      .catch(error => {
        console.log('error', error)
      });

  }

  useEffect(() => {
    // toast("Registration Successfully!, Pls Login");
  }, []);

  return (
    <div>
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
      <Nav />
      <Header desc="My Account" />
      <MobileNav desc="My Account" />
      <div className="login">
        <h4 style={{ textAlign: "center" }} id="login-txt">
          Login
        </h4>
        <p style={{ textAlign: "center" }} className="login-txt mb-4">
          Please login using account details below
        </p>
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
        <Button btnText="Sign in" btnClass="login-btn" btnFunc={handleLogin} />
        {/* <button className='login-btn' style={{color: "white"}}>Sign in</button> */}
        <p className="login-txt mt-4" style={{ textAlign: "center" }}>
          Don’t have an Account?  <Link to="/register">Create account</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
