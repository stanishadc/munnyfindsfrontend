import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
export default function AppointmentConfirmation(props) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div id="content">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-md-11 mx-auto">
                            <div className="row widget-steps">
                                <div className="col-3 step complete">
                                    <div className="step-name">Order</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/chooseappointment"} className="step-dot" />
                                </div>
                                <div className="col-3 step complete">
                                    <div className="step-name">Summary</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/appointmentsummary"} className="step-dot" />
                                </div>
                                <div className="col-3 step complete">
                                    <div className="step-name">Payment</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/makepayment"} className="step-dot" />
                                </div>
                                <div className="col-3 step complete">
                                    <div className="step-name">Done</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/appointmentconfirmation"} className="step-dot" />
                                </div>
                            </div>
                        </div>
                        {/* Steps Progress bar end */}
                        <div className="col-lg-12 text-center mt-5">
                            <p className="text-success text-16 line-height-07"><i className="fas fa-check-circle" /></p>
                            <h2 className="text-8">Recharge Successful</h2>
                            <p className="lead">We are processing the same and you will be notified via email.</p>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 p-sm-4 mb-4">
                                <div className="row">
                                    <div className="col-sm text-muted">Transactions ID</div>
                                    <div className="col-sm text-sm-right font-weight-600">PHDF173076359</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Date</div>
                                    <div className="col-sm text-sm-right font-weight-600">06-Feb-2019</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Mode of Payment</div>
                                    <div className="col-sm text-sm-right font-weight-600">Credit Card</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Transaction Status</div>
                                    <div className="col-sm text-sm-right font-weight-600 text-success">Success</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Customer Name</div>
                                    <div className="col-sm text-sm-right font-weight-600">Johne Cary</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Mobile No</div>
                                    <div className="col-sm text-sm-right font-weight-600">(+91) 9898989898</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Subject</div>
                                    <div className="col-sm text-sm-right font-weight-600">Mobile Recharge</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Payment Amount</div>
                                    <div className="col-sm text-sm-right text-6 font-weight-500">$135</div>
                                </div>
                            </div>
                            <div className="text-center">
                                <a href="#" className="btn-link text-muted mx-3 my-2 align-items-center d-inline-flex"><span className="text-5 mr-2"><i className="far fa-file-pdf" /></span>Save as PDF</a>
                                <a href="#" className="btn-link text-muted mx-3 my-2 align-items-center d-inline-flex"><span className="text-5 mr-2"><i className="fas fa-print" /></span>Print Receipt</a>
                                <a href="#" className="btn-link text-muted mx-3 my-2 align-items-center d-inline-flex"><span className="text-5 mr-2"><i className="far fa-envelope" /></span>Email Receipt</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
    )
}