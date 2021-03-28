import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
export default function AppointmentSummary(props) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div id="content">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-11 mx-auto">
                            <div className="row widget-steps">
                                <div className="col-3 step complete">
                                    <div className="step-name">Order</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/chooseappointment"} className="step-dot" />
                                </div>
                                <div className="col-3 step active">
                                    <div className="step-name">Summary</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/appointmentsummary"} className="step-dot" />
                                </div>
                                <div className="col-3 step disabled">
                                    <div className="step-name">Payment</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/makepayment"} className="step-dot" />
                                </div>
                                <div className="col-3 step disabled">
                                    <div className="step-name">Done</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/appointmentconfirmation"} className="step-dot" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center mt-5">
                            <h2 className="text-8">Order Summary</h2>
                            <p className="lead">Confirm recharge details</p>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 p-sm-4 mb-0 mb-sm-4">
                                <div className="row">
                                    <p className="col-sm text-muted mb-0 mb-sm-3">Mobile Number:</p>
                                    <p className="col-sm text-sm-right font-weight-500">(+91) 9898989898</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm text-muted mb-0 mb-sm-3">Operator/Circle:</p>
                                    <p className="col-sm text-sm-right font-weight-500">Vodafone | Gujarat</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm text-muted mb-0 mb-sm-3">Plan:</p>
                                    <p className="col-sm text-sm-right font-weight-500">Mobile top-up</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm text-muted mb-0 mb-sm-3">Validity:</p>
                                    <p className="col-sm text-sm-right font-weight-500">Talktime</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm text-muted mb-0 mb-sm-3">Amount:</p>
                                    <p className="col-sm text-sm-right font-weight-500">$150</p>
                                </div>
                                <div className="row">
                                    <p className="col-12 text-muted mb-0">Plan Description:</p>
                                    <p className="col-12 text-1">Local calls free &amp; STD calls free &amp; Roaming Incoming &amp; Outgoing calls free &amp; 300 Local &amp; National SMS &amp; 1 GB 3G/4G Data &amp; Data Validity 28 day(s) &amp; For 3G/4G user - T&amp;C apply</p>
                                </div>
                                <div className="bg-light-4 rounded p-3">
                                    <div className="row">
                                        <div className="col-sm text-3 font-weight-600">Payment Amount</div>
                                        <div className="col-sm text-sm-right text-5 font-weight-500">$150</div>
                                    </div>
                                </div>
                                <p className="text-center my-4"><a className="btn-link" data-toggle="collapse" href="#couponCode" aria-expanded="false" aria-controls="couponCode">Apply a Coupon Code</a></p>
                                <div id="couponCode" className="bg-light-3 p-4 rounded collapse">
                                    <h3 className="text-4">Coupon Code</h3>
                                    <div className="input-group form-group mb-0">
                                        <input className="form-control" placeholder="Coupon Code" aria-label="Promo Code" type="text" />
                                        <span className="input-group-append">
                                            <button className="btn btn-secondary" type="submit">APPLY</button>
                                        </span> </div>
                                </div>
                                <p className="mt-4 mb-0"><Link to={"/makepayment"} className="btn btn-primary btn-block">Make Payment</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}