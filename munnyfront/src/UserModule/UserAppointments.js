import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import UserSidebar from './UserSidebar';
import moment from 'moment'
export default function UserAppointments(props) {
    const [appointmentList, setAppointmentList] = useState([])
    const applicationAPI = (url = "https://munnyapi.azurewebsites.net/api/appointments/") => {
        return {
            fetchByCustomer: () => axios.get(url + 'GetByCustomer/'+localStorage.getItem('MFFUserId'))
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
                            <h1>User Profile</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li className="active">User Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>{/* Page Header end */}
            <div id="content">
                <div className="container">
                    <div className="row">
                        <UserSidebar></UserSidebar>
                        <div className="col-lg-9">
                            <div className="bg-white shadow-md rounded p-4">
                                <h4 className="mb-4">Orders History</h4>
                                <hr className="mx-n4" />
                                <div className="tab-content my-3" id="myTabContent">
                                    <div className="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                                        <div className="table-responsive-md">
                                        <table className="table table-hover border">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>AppointmentNo</th>
                                                        <th>Business Name</th>
                                                        <th>Appointment Date & Time</th>
                                                        <th>Payment Status</th>
                                                        <th>Booking Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {appointmentList.map(app =>
                                                        <tr key={app.appointmentId}>
                                                            <td><Link to={"/user/appointment/"+app.appointmentId}>{app.appointmentNo}</Link></td>
                                                            <td>{app.business.businessName}</td>
                                                            <td>{moment(app.appointmentDate).format('MMMM Do yyyy')} - {app.startTime}</td>
                                                            <td>{app.paymentStatus}</td>
                                                            <td>{app.bookingStatus}</td>
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