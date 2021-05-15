import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import Footer from '../CommonFiles/Footer';
export default function ForgotPassword(props) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div id="content">
                <div className="container pt-5 pb-4">
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <div className="bg-white shadow-md rounded p-3 pt-sm-4 pb-sm-5 px-sm-5">
                                <h3 className="text-center mt-3 mb-4">Forgot your password?</h3>
                                <p className="text-center text-3 text-muted">Enter your Email and we’ll help you reset your password.</p>
                                <form id="forgotForm" className="form-border" method="post">
                                    <div className="form-group">
                                        <input type="text" className="form-control border-2" id="emailAddress" required placeholder="Enter Email" />
                                    </div>
                                    <button className="btn btn-primary btn-block my-4" type="submit">Continue</button>
                                </form>
                                <p className="text-center mb-0"><Link className="btn-link" to={"/"}>Return to Home Page</Link> <span className="text-muted mx-3">|</span><Link className="btn-link" href={"/verifyotp"}>Request OTP</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}