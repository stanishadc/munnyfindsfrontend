import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import Footer from '../CommonFiles/Footer';
export default function VerifyOTP(props) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div id="content">
                <div className="container pt-5 pb-4">
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <div className="bg-white shadow-md rounded p-3 pt-sm-4 pb-sm-5 px-sm-5">
                                <h3 className="text-center mt-3 mb-4">Two-Step Verification</h3>
                                <p className="text-center"><img className="img-fluid" src="images/otp-icon.png" alt="verification" /></p>
                                <p className="text-muted text-3 text-center">Please enter the OTP (one time password) to verify your account. A Code has been sent to <span className="text-dark text-4">+1*******179</span></p>
                                <form id="otp-screen" className="form-border" method="post">
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <input type="text" className="form-control border-2 text-center text-6 px-0 py-2" maxLength={1} required autoComplete="off" />
                                        </div>
                                        <div className="col form-group">
                                            <input type="text" className="form-control border-2 text-center text-6 px-0 py-2" maxLength={1} required autoComplete="off" />
                                        </div>
                                        <div className="col form-group">
                                            <input type="text" className="form-control border-2 text-center text-6 px-0 py-2" maxLength={1} required autoComplete="off" />
                                        </div>
                                        <div className="col form-group">
                                            <input type="text" className="form-control border-2 text-center text-6 px-0 py-2" maxLength={1} required autoComplete="off" />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-block shadow-none my-4" type="submit">Verify</button>
                                </form>
                                <p className="text-2 text-center">Not received your code? <a className="btn-link" href="#">Resend code</a></p>
                                <p className="text-2 text-center mb-0"><a className="btn-link" href="#">Call me</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}