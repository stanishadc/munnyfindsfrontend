import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import moment from 'moment';
export default function AppointmentSummary(props) {
    const [servicesData, setServicesData] = useState([])
    const [loop, setloop] = useState(0)
    const [values, setValues] = useState(JSON.parse(localStorage.getItem('userAppointmentData')))
    if (localStorage.getItem('userAppointmentData') === undefined) {
        return (<Redirect to={"/"} />);
    }
    else {
        //console.log(JSON.parse(localStorage.getItem('userAppointmentData')))
        if (loop === 0) {
            setloop(1);
            setServicesData(values.userServices)
        }
    }
    function movetopayment() {
        props.history.push({
            pathname: '/makepayment'
        })
    }
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
                            <p className="lead">Confirm appointment details</p>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 p-sm-4 mb-0 mb-sm-4">                                
                                <div className="row">
                                    <p className="col-sm text-muted mb-0 mb-sm-3">Appointment Date</p>
                                    <p className="col-sm text-sm-right font-weight-500">{moment(values.appointmentDate).format('MMMM Do YYYY')}</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm text-muted mb-0 mb-sm-3">Appointment Time</p>
                                    <p className="col-sm text-sm-right font-weight-500">{values.appointmentTime}</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm text-muted mb-0 mb-sm-3">Service provider:</p>
                                    <p className="col-sm text-sm-right font-weight-500">{values.businessName}</p>
                                </div>
                                <div className="row">
                                    <p className="col-sm text-muted mb-0 mb-sm-3">Amount:</p>
                                    <p className="col-sm text-sm-right font-weight-500">${values.subTotal}</p>
                                </div>
                                <div className="row">
                                    <table className="table">
                                        <thead>
                                            <th>ServiceName</th>
                                            <th>Duration</th>
                                            <th>Price</th>
                                            <th></th>
                                        </thead>
                                        <tbody>
                                            {servicesData && servicesData.map(cart =>
                                                <tr Key={cart.servicePriceId}>
                                                    <td>{cart.servicePriceName}</td>
                                                    <td>{cart.duration}</td>
                                                    <td>{cart.price}</td>
                                                    <td></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="bg-light-4 rounded p-3">
                                    <div className="row">
                                        <div className="col-sm text-3 font-weight-600">Payment Amount</div>
                                        <div className="col-sm text-sm-right text-5 font-weight-500">${values.total}</div>
                                    </div>
                                </div>
                                <p className="mt-4 mb-0">
                                    <Link onClick={() => movetopayment()} className="btn btn-primary btn-block">Make Payment</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}