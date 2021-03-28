import React from 'react';
import { Link } from 'react-router-dom';
export default function UserSidebar(props) {
    return (
        <div className="col-lg-3">
            <ul className="nav nav-pills alternate flex-lg-column sticky-top">
                <li className="nav-item"><Link className="nav-link active" to={"/user/profile"}><i className="fas fa-user" />Profile</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/user/appointments"}><i className="fas fa-history" />Appointments</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/user/changepassword"}><i className="fas fa-key" />Change Password</Link></li>
            </ul>
        </div>

    )
}