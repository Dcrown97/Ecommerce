import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context";
import { useContext } from "react";
import { useCart } from "react-use-cart";
import { useEffect } from "react";

function Nav() {

  const [drop, setDrop] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, [])


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

  let cart = items.filter(item => item.type !== 'wish')
  let cartNumber = cart.length;
  console.log(cartNumber)

  const test = () => {

    alert("Happy New Year");
  }

  const handleLogout = () => {
    setUser({})
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    emptyCart();
    navigate("/home")
  }

  // console.log("user  ", user)
  return (
    <div >
      <nav className="navbar close head1 navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link anc" to="#">
                  <i className="fa fa-envelope" /> {user?.email || "Default email"}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc" to="#">
                  <i className="fa fa-phone-alt" /> +2348067799281
                </Link>
              </li>
            </ul>
            <ul style={{ paddingLeft: "55px" }} className="navbar-nav ul1 me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle  anc"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link anc dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={test}
                >
                  USD
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {user?.id ?
                  <Link className="nav-link anc" to="/" onClick={handleLogout}>

                    Logout <i className="fa fa-user" />

                  </Link>
                  :
                  <Link className="nav-link anc" to="/login">
                    Login <i className="fa fa-user" />
                  </Link>
                }
              </li>

              <li className="nav-item">
                <Link className="nav-link anc" to="/wish_list">
                  wishlist <i className="fa fa-heart" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc" to="/cart">
                  <div ><i className="fa fa-shopping-cart cart-num" />{cartNumber}</div>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link anc" to="#">
                  <h6 className="cart-num">88</h6>
                  
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar head2 close navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand navbar-brand-b" to="/home">
            Hekto
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link anc2 active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <form className="d-flex" >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn2 btn-outline-success" type="submit">
                <i className="fa btn-search fa-search" />
              </button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Nav;
