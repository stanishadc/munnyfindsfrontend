import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import UserSidebar from './UserSidebar';
export default function UserChangePasword(props) {
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
                                    <h4 className="mb-4">Change Password</h4>
                                    <hr className="mx-n4 mb-4" />
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <form id="changePassword" method="post">
                                                <div className="form-group">
                                                    <label htmlFor="existingPassword">Existing Password</label>
                                                    <input type="text" className="form-control" data-bv-field="existingpassword" id="existingPassword" required placeholder="Existing Password" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="newPassword">New Password</label>
                                                    <input type="text" className="form-control" data-bv-field="newpassword" id="newPassword" required placeholder="New Password" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="existingPassword">Confirm Password</label>
                                                    <input type="text" className="form-control" data-bv-field="confirmgpassword" id="confirmPassword" required placeholder="Confirm Password" />
                                                </div>
                                                <button className="btn btn-primary" type="submit">Update Password</button>
                                            </form>
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