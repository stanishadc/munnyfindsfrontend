import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import auth from '../CommonFiles/Auth'
export default function UserSidebar(props) {
    const history = useHistory();
    return (
        <div className="col-lg-3 bg-white shadow-md rounded p-4">
            <ul className="nav nav-pills alternate flex-lg-column sticky-top">
                <li className="nav-item"><Link className="nav-link active" to={"/user/profile"}><i className="fas fa-user" />Profile</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/user/appointments"}><i className="fas fa-history" />Appointments</Link></li>
                <li className="nav-item"><Link className="nav-link" to={"/user/changepassword"}><i className="fas fa-key" />Change Password</Link></li>
                <li className="nav-item"><Link className="nav-link" to={props.myroute} onClick={() => {
                    auth.ulogout(() => {
                        history.push("/")
                    })
                }}><i className="fas fa-sign-out-alt" />Logout</Link></li>
            </ul>
        </div>
    ) 
}