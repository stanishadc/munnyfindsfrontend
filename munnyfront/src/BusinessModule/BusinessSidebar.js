import React from 'react';
import { Link } from 'react-router-dom';
export default function BusinessSidebar(props) {
    return (
        <div className="col-lg-3 bg-white shadow-md rounded p-4">
            <ul className="nav nav-pills alternate flex-lg-column sticky-top">
                <li className="nav-item mt-2"><Link className="nav-link active" to={"/business/businessprofile"}><i className="fas fa-user" />Profile</Link></li>
                <li className="nav-item mt-2"><Link className="nav-link" to={"/business/upcomingappointments"}><i className="fas fa-history" />Appointments</Link></li>
                <li className="nav-item mt-2"><Link className="nav-link" to={"/business/reports"}><i className="fas fa-key" />Reports</Link></li>
            </ul>
        </div>
    )
}