import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import MobileNav from '../Components/MobileNav'
import Nav from '../Components/Nav'
import "../Day1.css";

function Contact() {
    return (
        <div>
            <Nav />
            <Header desc="Contact List" />
            <MobileNav desc="Contact List" />

            <div class="container">
                <div class="row">
                    <div className='col-lg-6' style={{ marginTop: "100px" }}>
                        <div>
                            <div>
                                <h2 id="info">Information About us</h2>
                                <p id='cnt'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.
                                </p>
                            </div>
                            <div className='color'>
                                <div className='blue'>
                                </div>
                                <div className='pink space'>
                                </div>
                                <div className='sky space ml-'>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <h2 id="get">Get In Touch</h2>
                                <p id='ctn'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
                                </p>
                            </div>
                            <div>
                                <form>
                                    <div className="form-row" style={{ marginBottom: "20px" }}>
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <input type="name" className="form-control" id="inputEmail4" placeholder="Your Name*" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input type="email" className="form-control" id="inputPassword4" placeholder="Your E-mail*" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group" style={{ marginBottom: "20px" }}>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Subject*" />
                                    </div>
                                    <div className="form-group" style={{ marginBottom: "20px" }}>
                                        <textarea type="text" className="form-control" id="inputAddress" placeholder="Type Your Messsage*"></textarea>
                                    </div>

                                    <button style={{ marginBottom: "20px" }} type="submit" className="btn btn-primary">Send Mail</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <h1>dfhgyufeyryew</h1>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Contact
