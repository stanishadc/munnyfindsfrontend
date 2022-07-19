import React,{useState} from 'react';
import { Link,Redirect } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import moment from 'moment';
export default function AppointmentConfirmation(props) {
    const [servicesData, setServicesData] = useState([])
    const [loop, setloop] = useState(0)
    const [values, setValues] = useState(JSON.parse(localStorage.getItem('userAppointmentData')))
    if (localStorage.getItem('userAppointmentData') === undefined) {
        return (<Redirect to={"/"} />);
    }
    else {
        if (loop === 0) {
            setloop(1);
            if(values !==null)
            {
                if(values.userServices !==null)
                {
                    setValues(values.userServices)
                }
            }
        }
        localStorage.removeItem("userAppointmentData");
    }
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
                            <h2 className="text-8">Appointment Successful</h2>
                            <p className="lead">We are processing the same and you will be notified via email.</p>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 p-sm-4 mb-4">
                                <div className="row">
                                    <div className="col-sm text-muted">Appointment No</div>
                                    <div className="col-sm text-sm-right font-weight-600">{values.appointmentNo}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Appointment Date</div>
                                    <div className="col-sm text-sm-right font-weight-600">{moment(values.appointmentDate).format('MMMM Do YYYY')}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Appointment Time</div>
                                    <div className="col-sm text-sm-right font-weight-600">{values.appointmentTime}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Payment Status</div>
                                    <div className="col-sm text-sm-right font-weight-600">{values.paymentStatus}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Booking Status</div>
                                    <div className="col-sm text-sm-right font-weight-600">{values.bookingStatus}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Service Provider</div>
                                    <div className="col-sm text-sm-right font-weight-600">{values.businessName}</div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm text-muted">Payment Amount</div>
                                    <div className="col-sm text-sm-right text-6 font-weight-500">{values.total}</div>
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
                            </div>
                            <div className="text-center">
                                {/* <a href="#" className="btn-link text-muted mx-3 my-2 align-items-center d-inline-flex"><span className="text-5 mr-2"><i className="far fa-file-pdf" /></span>Save as PDF</a>
                                <a href="#" className="btn-link text-muted mx-3 my-2 align-items-center d-inline-flex"><span className="text-5 mr-2"><i className="fas fa-print" /></span>Print Receipt</a> */}
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