import React from 'react';
import { Link } from 'react-router-dom';
export default function HomeContent(props) {
    return (
        <div>
            <div class="section pt-4 pb-3">
                <div className="container">
                    <h2 className="text-9 font-weight-500 text-center">Featured Offers</h2>
                    <p className="lead text-center mb-4">Get Best Offers &amp; Discounts</p>
                    <div className="row banner">
                        <div className="col-md-6">
                            <div className="item rounded"> <a href="#">
                                <div className="caption">
                                    <h2>Save 20% on Hair Cut</h2>
                                    <p>Use Code: Recharge20</p>
                                </div>
                                <div className="banner-mask" />
                                <img className="img-fluid" src="images/slider/small-banner-11-600x220.jpg" alt="banner" /> </a> </div>
                        </div>
                        <div className="col-md-6">
                            <div className="item rounded"> <a href="#">
                                <div className="caption">
                                    <h2>5% OFF on Bill Payment</h2>
                                    <p>Use Code: Bill5</p>
                                </div>
                                <div className="banner-mask" />
                                <img className="img-fluid" src="images/slider/small-banner-12-600x220.jpg" alt="banner" /> </a> </div>
                        </div>
                    </div>
                    <div className="row banner mt-4 mb-2">
                        <div className="col-md-4">
                            <div className="item rounded"> <a href="#">
                                <div className="caption">
                                    <h2>10% OFF</h2>
                                    <p>On GYM Booking</p>
                                </div>
                                <div className="banner-mask" />
                                <img className="img-fluid" src="images/slider/small-banner-13-600x320.jpg" alt="banner" /> </a> </div>
                        </div>
                        <div className="col-md-4 mt-4 mt-md-0">
                            <div className="item rounded"> <a href="#">
                                <div className="caption">
                                    <h2>15% OFF</h2>
                                    <p>On Salon Bill Payment</p>
                                </div>
                                <div className="banner-mask" />
                                <img className="img-fluid" src="images/slider/small-banner-14-600x320.jpg" alt="banner" /> </a> </div>
                        </div>
                        <div className="col-md-4 mt-4 mt-md-0">
                            <div className="item rounded"> <a href="#">
                                <div className="caption">
                                    <h2>10% OFF</h2>
                                    <p>On Yoga Services</p>
                                </div>
                                <div className="banner-mask" />
                                <img className="img-fluid" src="images/slider/small-banner-15-600x320.jpg" alt="banner" /> </a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section bg-light shadow-md">
                <div className="container">
                    <section className="section px-5">
                        <h2 className="text-9 font-weight-600 text-center">Why choose MunnyFinds?</h2>
                        <p className="lead text-center mb-5">Save Time and Money!</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="featured-box style-4">
                                    <div className="featured-box-icon bg-light-4 text-primary rounded-circle"> <i className="fas fa-bullhorn" /> </div>
                                    <h3>Best Prices</h3>
                                    <p className="text-3">Always get cheapest price with the best in the industry.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-4">
                                    <div className="featured-box-icon bg-light-4 text-primary rounded-circle"> <i className="fas fa-hands-helping" /> </div>
                                    <h3>Trust pay</h3>
                                    <p className="text-3">100% Payment Protection. Easy Return Policy.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-4">
                                    <div className="featured-box-icon bg-light-4 text-primary rounded-circle"> <i className="far fa-life-ring" /> </div>
                                    <h3>24X7 Support</h3>
                                    <p className="text-3">We're here to help. Have a query and need help ?</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pt-4"> <a href="#" className="btn btn-primary">Get Started Earn</a> </div>
                    </section>
                </div>{/* Refer & Earn end */}
            </div>
            <section className="hero-wrap section pb-5 pb-lg-4">
                <div className="hero-bg" style={{ backgroundImage: 'url("./images/bg/image-5.jpg")' }} />
                <div className="hero-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center"> <img className="img-fluid" alt src="images/app-mobile-2.png" /> </div>
                            <div className="col-lg-6 text-center text-lg-left">
                                <h2 className="text-9 font-weight-600 text-light my-4">Download Our Quickai<br className="d-none d-lg-inline-block" />
            Mobile App Now</h2>
                                <p className="lead text-light">Download our app for the fastest, most convenient way to Recharge &amp; Bill Payment, Booking and more....</p>
                                <div className="pt-3"><a href="#" className="mr-4 btn btn-outline-light"><i className="fab fa-apple mr-1" /> App Store</a> <a href="#" className="mr-4 btn btn-outline-light"><i className="fab fa-android mr-1" /> Play Store</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}