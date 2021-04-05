import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import BusinessSidebar from './BusinessSidebar';
export default function UpcomingAppointments(props) {
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
                                <li className="active">Upcoming Appointments</li>
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
                                    <li className="nav-item"> <Link to={"/business/upcomingappointments"} className="nav-link active" id="upcoming" data-toggle="tab" href="#upcoming" role="tab" aria-controls="upcoming" aria-selected="true">Upcoming</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/completedappointments"} className="nav-link" id="completed" data-toggle="tab" href="#completed" role="tab" aria-controls="completed" aria-selected="false">Completed</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/cancelledappointments"} className="nav-link" id="cancelled" data-toggle="tab" href="#cancelled" role="tab" aria-controls="cancelled" aria-selected="false">Cancelled</Link> </li>
                                </ul>
                                <div className="tab-content my-3" id="myTabContent">
                                    <div className="tab-pane fade show active" id="upcoming" role="tabpanel" aria-labelledby="upcoming">
                                        <div className="table-responsive-md">
                                            <table className="table table-hover border">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>Appointment No</th>
                                                        <th>Appointment Date & Time</th>                                                        
                                                        <th>Customer Name</th>
                                                        <th>Service</th>
                                                        <th className="text-right">Amount</th>
                                                        <th className="text-right">Payment</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td className="align-middle">MF254578</td>
                                                        <td className="align-middle">06/06/2021 10:30</td>
                                                        <td className="align-middle">Tanisha</td>
                                                        <td className="align-middle">Boys Hair Cutting</td>
                                                        <td className="align-middle text-right">$150</td>
                                                        <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-warning" data-toggle="Customer will pay at venue" data-original-title="Customer will pay at venue" /></td>
                                                    </tr>
                                                    <tr>
                                                    <td className="align-middle">MF254578</td>
                                                        <td className="align-middle">06/06/2021 10:30</td>
                                                        <td className="align-middle">Tanisha</td>
                                                        <td className="align-middle">Boys Hair Cutting</td>
                                                        <td className="align-middle text-right">$150</td>
                                                        <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-warning" data-toggle="Customer will pay at venue" data-original-title="Customer will pay at venue" /></td>
                                                    </tr>
                                                    <tr>
                                                    <td className="align-middle">MF254578</td>
                                                        <td className="align-middle">06/06/2021 10:30</td>
                                                        <td className="align-middle">Tanisha</td>
                                                        <td className="align-middle">Boys Hair Cutting</td>
                                                        <td className="align-middle text-right">$150</td>
                                                        <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-warning" data-toggle="Customer will pay at venue" data-original-title="Customer paid online" /></td>
                                                    </tr>
                                                    <tr>
                                                    <td className="align-middle">MF254578</td>
                                                        <td className="align-middle">06/06/2021 10:30</td>
                                                        <td className="align-middle">Tanisha</td>
                                                        <td className="align-middle">Boys Hair Cutting</td>
                                                        <td className="align-middle text-right">$150</td>
                                                        <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-success" data-toggle="Customer will pay at venue" data-original-title="Customer paid online" /></td>
                                                    </tr>
                                                    <tr>
                                                    <td className="align-middle">MF254578</td>
                                                        <td className="align-middle">06/06/2021 10:30</td>
                                                        <td className="align-middle">Tanisha</td>
                                                        <td className="align-middle">Boys Hair Cutting</td>
                                                        <td className="align-middle text-right">$150</td>
                                                        <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-success" data-toggle="Customer will pay at venue" data-original-title="Customer will pay at venue" /></td>
                                                    </tr>
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