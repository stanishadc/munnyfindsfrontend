import React from 'react';
import Footer from './Footer';
import Header from './Header';
export default function Contactus(props) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div class="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bg-light shadow-md rounded h-100 p-3">
                                <iframe className="h-100 w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1530885071349" allowFullScreen />
                            </div>
                        </div>
                        <div className="col-md-6 mt-4 mt-md-0">
                            <div className="bg-light shadow-md rounded p-4">
                                <h2 className="text-6">Get in touch</h2>
                                <p className="text-3">For Customer Support and Query, Get in touch with us: <a href="#">Help</a></p>
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-map-marker-alt" /></div>
                                    <h3>Quickai Inc.</h3>
                                    <p>4th Floor, Plot No.22, Above Public Park<br />
              145 Murphy Canyon Rd.<br />
              Suite 100-18<br />
              San Diego CA 2028 </p>
                                </div>
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-phone" /> </div>
                                    <h3>Telephone</h3>
                                    <p>(+060) 9898980098, (+060) 8898880088</p>
                                </div>
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-envelope" /> </div>
                                    <h3>Business Inquiries</h3>
                                    <p>info@quickai.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </div>
    )
}