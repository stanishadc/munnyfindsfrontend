import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import auth from '../CommonFiles/Auth'
export default function BusinessSidebar(props) {
    const history = useHistory();
    return (
        <div className="col-lg-3 bg-white shadow-md rounded p-4">
            <ul className="nav nav-pills alternate flex-lg-column sticky-top">
                <li className="nav-item mt-2"><Link className="nav-link active" to={"/business/businessprofile"}><i className="fas fa-user" />Profile</Link></li>
                <li className="nav-item mt-2"><Link className="nav-link" to={"/business/upcomingappointments"}><i className="fas fa-history" />Appointments</Link></li>
                <li className="nav-item"><Link className="nav-link" to={props.myroute} onClick={() => {
                    auth.blogout(() => {
                        history.push("/")
                    })
                }}><i className="fas fa-sign-out-alt" />Logout</Link></li>
            </ul>
        </div>
    )
}