import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
export default function MakePayment(props) {
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
                                    <div className="progress">
                                        <div className="progress-bar" />
                                    </div>
                                    <Link to={"/chooseappointment"} className="step-dot" /> </div>
                                <div className="col-3 step complete">
                                    <div className="step-name">Summary</div>
                                    <div className="progress">
                                        <div className="progress-bar" />
                                    </div>
                                    <Link to={"/appointmentsummary"} className="step-dot" /> </div>
                                <div className="col-3 step active">
                                    <div className="step-name">Payment</div>
                                    <div className="progress">
                                        <div className="progress-bar" />
                                    </div>
                                    <Link to={"/makepayment"} className="step-dot" />
                                </div>
                                <div className="col-3 step disabled">
                                    <div className="step-name">Done</div>
                                    <div className="progress">
                                        <div className="progress-bar" />
                                    </div>
                                    <Link to={"/appointmentconfirmation"} className="step-dot" />
                                    </div>
                            </div>
                            {/* Steps Progress bar end */}
                        </div>
                        <div className="col-lg-12 text-center mt-5">
                            <h2 className="text-8">Select a Payment Mode</h2>
                        </div>
                        <div className="col-lg-10 col-xl-9 mx-auto mt-3">
                            <div className="bg-white shadow-sm rounded p-4">
                                <div className="row">
                                    <div className="col-md-7 col-lg-7 order-1 order-md-0">
                                        <ul className="nav nav-tabs mb-4 nav-fill" id="myTab" role="tablist">
                                            <li className="nav-item"> <a className="nav-link active" id="first-tab" data-toggle="tab" href="#firstTab" role="tab" aria-controls="firstTab" aria-selected="true">Credit/Debit Cards</a> </li>
                                            <li className="nav-item"> <a className="nav-link" id="second-tab" data-toggle="tab" href="#secondTab" role="tab" aria-controls="secondTab" aria-selected="false">PayPal</a> </li>
                                        </ul>
                                        <div className="tab-content my-3" id="myTabContentVertical">
                                            <div className="tab-pane fade show active" id="firstTab" role="tabpanel" aria-labelledby="first-tab">
                                                <h3 className="text-4 mb-4">Enter Card Details</h3>
                                                <form id="payment" method="post">
                                                    <div className="form-group">
                                                        <label htmlFor="cardNumber">Enter Debit / Credit Card Number</label>
                                                        <input type="text" className="form-control" data-bv-field="cardnumber" id="cardNumber" required placeholder="Card Number" />
                                                    </div>
                                                    <div className="form-row">
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="expiryMonth">Expiry Month</label>
                                                                <select id="expiryMonth" className="custom-select" required>
                                                                    <option value>Expiry Month</option>
                                                                    <option value={1}>January</option>
                                                                    <option value={2}>February</option>
                                                                    <option value={3}>March</option>
                                                                    <option value={1}>April</option>
                                                                    <option value={1}>May</option>
                                                                    <option value={1}>June</option>
                                                                    <option value={1}>July</option>
                                                                    <option value={1}>August</option>
                                                                    <option value={1}>September</option>
                                                                    <option value={1}>October</option>
                                                                    <option value={1}>November</option>
                                                                    <option value={1}>December</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="expiryYear">Expiry Year</label>
                                                                <select id="expiryYear" className="custom-select" required>
                                                                    <option value>Expiry Year</option>
                                                                    <option>2018</option>
                                                                    <option>2019</option>
                                                                    <option>2020</option>
                                                                    <option>2021</option>
                                                                    <option>2022</option>
                                                                    <option>2023</option>
                                                                    <option>2024</option>
                                                                    <option>2025</option>
                                                                    <option>2026</option>
                                                                    <option>2027</option>
                                                                    <option>2028</option>
                                                                    <option>2029</option>
                                                                    <option>2030</option>
                                                                    <option>2031</option>
                                                                    <option>2032</option>
                                                                    <option>2033</option>
                                                                    <option>2034</option>
                                                                    <option>2035</option>
                                                                    <option>2036</option>
                                                                    <option>2037</option>
                                                                    <option>2038</option>
                                                                    <option>2039</option>
                                                                    <option>2040</option>
                                                                    <option>2041</option>
                                                                    <option>2042</option>
                                                                    <option>2043</option>
                                                                    <option>2044</option>
                                                                    <option>2045</option>
                                                                    <option>2046</option>
                                                                    <option>2047</option>
                                                                    <option>2048</option>
                                                                    <option>2049</option>
                                                                    <option>2050</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <div className="form-group">
                                                                <label htmlFor="cvvNumber">CVV</label>
                                                                <input type="text" className="form-control" data-bv-field="cvvnumber" id="cvvNumber" required placeholder="CVV Number" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="cardHolderName">Card Holder Name</label>
                                                        <input type="text" className="form-control" data-bv-field="cardholdername" id="cardHolderName" required placeholder="Card Holder Name" />
                                                    </div>
                                                    <div className="form-group custom-control custom-checkbox">
                                                        <input id="save-card" name="savecard" className="custom-control-input" type="checkbox" />
                                                        <label className="custom-control-label" htmlFor="save-card">Save my card Details.</label>
                                                    </div>
                                                    <Link className="btn btn-primary btn-block" to={"/appointmentconfirmation"}>Proceed to Pay $135</Link>
                                                </form>
                                            </div>
                                            {/* Cards Details end */}
                                            {/* Pay via Paypal
          ============================================= */}
                                            <div className="tab-pane fade" id="secondTab" role="tabpanel" aria-labelledby="second-tab"> <img className="img-fluid" src="images/paypal-logo.png" alt="Paypal Logo" title="Pay easily, fast and secure with PayPal." />
                                                <p className="lead">Pay easily, fast and secure with PayPal.</p>
                                                <p className="text-info mb-4"><i className="fas fa-info-circle" /> You will be redirected to PayPal to complete your payment securely.</p>
                                                <a className="btn btn-primary btn-block d-flex align-items-center justify-content-center" href="recharge-payment-success.html"><i className="fab fa-paypal fa-2x mr-2" /> Pay via PayPal</a> </div>
                                            {/* Pay via Paypal end */}
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-lg-5 order-0 order-md-1">
                                        {/* Payable Amount
          ============================================= */}
                                        <div className="bg-light-2 rounded p-4 mb-4">
                                            <h3 className="text-4 mb-4">Payable Amount</h3>
                                            <ul className="list-unstyled">
                                                <li className="mb-2">Amount <span className="float-right text-4 font-weight-500 text-dark">$150</span></li>
                                                <li className="mb-2">Discount <span className="text-success">(10% Off!)</span> <span className="float-right text-4 font-weight-500 text-dark">-$15</span></li>
                                            </ul>
                                            <hr />
                                            <div className="text-dark text-4 font-weight-500 py-1"> Total Amount<span className="float-right text-7">$135</span></div>
                                        </div>
                                        {/* Payable Amount end */}
                                        {/* Pay via Paypal
          ============================================= */}
                                        <div className="bg-light-2 rounded p-4 d-none d-md-block">
                                            <h3 className="text-4 mb-3">We value your Privacy.</h3>
                                            <p className="mb-0">We will not sell or distribute your information. Read our <a href="#">Privacy Policy</a>.</p>
                                        </div>
                                        {/* Cards Details end */}
                                    </div>
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