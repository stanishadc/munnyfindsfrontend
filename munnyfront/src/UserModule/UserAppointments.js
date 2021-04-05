import React,{useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import UserSidebar from './UserSidebar';
export default function UserAppointments(props) {
    const [appointmentList, setAppointmentList] = useState([])
    const applicationAPI = (url = 'https://localhost:44313/api/appointments/') => {
    return {
    fetchByCustomer: () => axios.get(url + 'GetByCustomer/2'),
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
                                        <table className="table table-bordered table-striped mt-3" id="appointmentList">
                                         <thead>
                                          <tr>
                                           <th>Appointment No</th>
                                            <th>Appointment Status</th>
                                            <th>Booking Date</th>
                                            <th>Payment Status</th> 
                                           </tr>
                                            </thead>
                                               <tbody>
                                             {appointmentList.map(app =>
                                                <tr key={app.appointmentId}>
                                                <td>{app.appointmentNo}</td>
                                                 <td>{app.appointmentStatus}</td>
                                                 <td>{app.bookingDate}</td>
                                                 <td>{app.paymentStatus}</td>
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