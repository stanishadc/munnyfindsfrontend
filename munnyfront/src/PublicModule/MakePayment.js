import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import axios from 'axios'
import moment from 'moment';
const appointmentFieldValues = {
    appointmentId: 0,
    appointmentNo: 0,
    startTime: moment(new Date()).format('LT'),
    endTime: moment(new Date()).add(60, 'minutes').format('LT'),
    duration: '',
    appointmentTime: moment().format('LT'),
    customerId: 0,
    businessId: 0,
    userServices: '',
    bookingStatus: 'Pending',
    paymentStatus: 'Pending',
    modeOfPayment: '',
    subTotal: 0,
    discount: 0,
    total: 0,
    tax: 0,
    appointmentDate: moment(new Date()),
    startDate: moment(new Date()),
    endDate: moment(new Date()),
    createdDate: moment(new Date()),
    updatedDate: moment(new Date()),
    review: '',
    rating: 0,
    businessEmployeeId: 0
}
export default function MakePayment(props) {
    const [servicesData, setServicesData] = useState([])
    const [loop, setloop] = useState(0)
    const [values, setValues] = useState(JSON.parse(localStorage.getItem('userAppointmentData')))
    if (localStorage.getItem('userAppointmentData') === undefined) {
        return (<Redirect to={"/"} />);
    }
    else {
        if (loop === 0) {
            setloop(1);
            setServicesData(values.user)
        }
    }
    const applicationAPI = (url = "https://munnyapi.azurewebsites.net/api/appointments/") => {
        return {
            create: newRecord => axios.post(url + "insert", newRecord)
        }
    }
    const addAppointment = (paymentPlace, bookingStatus, paymentStatus) => {
        if (localStorage.getItem('MFFUserId')!==null) {
            const formData = new FormData()
            formData.append('appointmentId', values.appointmentId)
            formData.append('appointmentNo', values.appointmentNo)
            formData.append('startTime', values.startTime)
            formData.append('endTime', values.endTime)
            formData.append('duration', values.duration)
            formData.append('appointmentTime', values.appointmentTime)
            formData.append('customerId', localStorage.getItem('MFFUserId'))
            formData.append('businessId', values.businessId)
            formData.append('businessEmployeeId', values.businessEmployeeId)
            formData.append('userServices', JSON.stringify(values.userServices))
            formData.append('bookingStatus', bookingStatus)
            formData.append('paymentStatus', paymentStatus)
            formData.append('modeOfPayment', values.modeOfPayment)
            formData.append('subTotal', values.subTotal)
            formData.append('discount', values.discount)
            formData.append('total', values.total)
            formData.append('tax', values.tax)
            formData.append('appointmentDate', values.appointmentDate)
            formData.append('startDate', values.startDate)
            formData.append('endDate', values.endDate)
            formData.append('duration', values.duration)
            formData.append('createdDate', values.createdDate)
            formData.append('updatedDate', values.updatedDate)
            formData.append('review', values.review)
            formData.append('rating', values.rating)
            formData.append('paymentPlace', paymentPlace)
            formData.append('businessEmployeeId', values.businessEmployeeId)
            applicationAPI().create(formData)
                .then(res => {
                    console.log(res)
                    if (res.data.status === "Success") {
                        var NewObject = {};
                        NewObject = JSON.parse(localStorage.getItem('userAppointmentData'));
                        NewObject.appointmentNo = res.data.data;
                        NewObject.bookingStatus = bookingStatus;
                        NewObject.paymentStatus = paymentStatus;
                        localStorage.setItem('userAppointmentData', JSON.stringify(NewObject));
                        props.history.push({
                            pathname: '/appointmentconfirmation'
                        })
                    }
                }).catch(function (error) {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    }
                });
        }
        else {
            alert("Please login");
        }
    }
    function payatvenue() {
        addAppointment("Pay at Venue", "Confirmed", "Pending")
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
                                            <li className="nav-item"> <a className="nav-link active" id="first-tab" data-toggle="tab" href="#firstTab" role="tab" aria-controls="firstTab" aria-selected="true">Pay at Venue</a> </li>
                                        </ul>
                                        <div className="tab-content my-3" id="myTabContentVertical">
                                            <div className="tab-pane fade show active" id="firstTab" role="tabpanel" aria-labelledby="first-tab">
                                                <p className="text-info mb-4"><i className="fas fa-info-circle" /> Please pay the amount at venue using cash or card</p>
                                                <Link onClick={() => payatvenue()} className="btn btn-primary btn-block d-flex align-items-center justify-content-center">Pay at Venue</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 col-lg-5 order-0 order-md-1">
                                        <div className="bg-light-2 rounded p-4 mb-4">
                                            <h3 className="text-4 mb-4">Payable Amount</h3>
                                            <ul className="list-unstyled">
                                                <li className="mb-2">Amount <span className="float-right text-4 font-weight-500 text-dark">{values.subTotal}</span></li>
                                                {/* <li className="mb-2">Discount <span className="text-success">(10% Off!)</span> <span className="float-right text-4 font-weight-500 text-dark">-$15</span></li> */}
                                            </ul>
                                            <hr />
                                            <div className="text-dark text-4 font-weight-500 py-1"> Total Amount<span className="float-right text-7">{values.total}</span></div>
                                        </div>
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