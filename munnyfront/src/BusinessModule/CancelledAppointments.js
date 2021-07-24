import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import BusinessSidebar from './BusinessSidebar';
import moment from 'moment'
export default function CancelledAppointments(props) {
    const [appointmentList, setAppointmentList] = useState([])
    const applicationAPI = (url = "http://165.22.216.222/api/appointments/") => {
        return {
            fetchByCustomer: () => axios.get(url + 'GetCancelledAppointments/'+localStorage.getItem('MFFBusinessId'))
        }
    }
    function refreshAppointmentList() {
        applicationAPI().fetchByCustomer()
            .then(res => setAppointmentList(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        refreshAppointmentList();
    }, [])
    return (
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Business Profile</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li className="active">Cancelled Appointments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>{/* Page Header end */}
            <div id="content">
                <div className="container">
                    <div className="row">
                        <BusinessSidebar></BusinessSidebar>
                        <div className="col-lg-9">
                            <div className="bg-white shadow-md rounded p-4">
                                <h5 className="mb-4">Appointments</h5>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item"> <Link to={"/business/upcomingappointments"} className="nav-link" id="upcoming" data-toggle="tab" href="#upcoming" role="tab" aria-controls="upcoming" aria-selected="true">Upcoming</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/completedappointments"} className="nav-link" id="completed" data-toggle="tab" href="#completed" role="tab" aria-controls="completed" aria-selected="false">Completed</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/cancelledappointments"} className="nav-link active" id="cancelled" data-toggle="tab" href="#cancelled" role="tab" aria-controls="cancelled" aria-selected="false">Cancelled</Link> </li>
                                </ul>
                                <div className="tab-content my-3" id="myTabContent">
                                    <div className="tab-pane fade show active" id="cancelled" role="tabpanel" aria-labelledby="cancelled">
                                        <div className="table-responsive-md">
                                        <table className="table table-hover border">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>AppointmentNo</th>
                                                        <th>Customer</th>
                                                        <th>mobileNo</th>
                                                        <th>Appointment Date & Time</th>
                                                        <th>Payment Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {appointmentList.map(app =>
                                                        <tr key={app.appointmentId}>
                                                             <td><Link to={"/business/appointment/"+app.appointmentId}>{app.appointmentNo}</Link></td>
                                                            <td>{app.customer.customerName}</td>
                                                            <td>{app.customer.customerMobile}</td>
                                                            <td>{moment(app.appointmentDate).format('MMMM Do yyyy')} - {app.startTime}</td>
                                                            <td className="">{app.paymentStatus}</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
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