import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { MdOutlineCancelPresentation } from 'react-icons/md';



function MobileNav({desc}) {

    const [mobileView, setMobileView] = useState(false);

    const changeMobileView = () =>{
        setMobileView(!mobileView);
    }


    return (
        <div className="mobile-nav">
      <nav className="navbar head1  navbar-expand-lg navbar-light bg-light">
        <div className="container">
     <button
            className="navbar-toggler mobile-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={changeMobileView}
          >
            <span  className="navbar-toggler-icon mobile-icon" />

          </button>
         
          {mobileView && <div  className="">
            <ul className="navbar-nav">
              <li className="mobile-nav-item">
                <Link className="nav-link anc" to="#">
                    <i className="fa fa-envelope" /> darasimidcrown@gmail.com
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link className="nav-link anc" to="#">
                    <i className="fa fa-phone-alt" /> +2348067799281
                </Link>
              </li>
            </ul>
            <ul  className="navbar-nav">
              <li className="mobile-nav-item">
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
                <ul className="dropdown-menu">
                  <li>
                    <Link className="" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="" />
                  </li>
                  <li>
                    <Link className="" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mobile-nav-item ">
                <Link
                  className="nav-link anc dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  USD
                </Link>
                <ul className="dropdown-menu" >
                  <li>
                    <Link className="" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="" />
                  </li>
                  <li>
                    <Link className="" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mobile-nav-item">
                <Link className="nav-link anc" to="/login">
                  Login <i className="fa fa-user" />
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link className="nav-link anc" to="#">
                  wishlist <i className="fa fa-heart" />
                </Link>
              </li>
              <li className="mobile-nav-item">
                <Link className="nav-link anc" to="/cart">
                  <i className="fa fa-shopping-cart" />
                </Link>
              </li>
            </ul>
          </div> }
        </div>
      </nav>
      <nav className="navbar head2 navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand navbar-brand-b" to="/home">
            Hekto
          </Link>

          <div className="collapse1 navbar-collapse" id="navbarSupportedContent">
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
              <form className="d-flex" style={{ marginRight: "90px" }}>
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
      <div className="header">
        <div className="container">
          <h1 id="title">{desc}</h1>
          <nav className=" head3 navbar-expand-lg ">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link anc2"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2" to="/pages">
                  pages
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link anc2 active" to="#">
                  {desc}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    )
}

export default MobileNav
