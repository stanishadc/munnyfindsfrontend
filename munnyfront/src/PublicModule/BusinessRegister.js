import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import BusinessLogin from './BusinessLogin';
export default function BusinessRegister(props) {
    const [isBOpen, setIsBOpen] = useState(false);
    const toggleBPopup = () => {
        setIsBOpen(!isBOpen);
    }
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div id="content">
                <section className="page-header page-header-text-light bg-secondary">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <h1>Login &amp; Signup</h1>
                            </div>
                            <div className="col-md-4">
                                <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                    <li><a href="index.html">Home</a></li>
                                    <li className="active">Login/Signup</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div id="login-signup-page" className="bg-light shadow-md rounded mx-auto p-4">
                        <ul className="nav nav-tabs nav-justified" role="tablist">                            
                            <li className="nav-item"> <a id="signup-page-tab" className="nav-link text-4">Business Registration</a> </li>
                        </ul>
                        <div className="tab-content pt-4">                            
                            <div className="tab-pane show active">
                                <form id="signupForm" method="post">
                                    <div className="form-group">
                                        <label htmlFor="signupEmail">Email Address</label>
                                        <input type="text" className="form-control" data-bv-field="number" id="signupEmail" required placeholder="Email ID" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="signupMobile">Mobile Number</label>
                                        <input type="text" className="form-control" id="signupMobile" required placeholder="Mobile Number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="signuploginPassword">Password</label>
                                        <input type="password" className="form-control" id="signuploginPassword" required placeholder="Password" />
                                    </div>
                                    <button className="btn btn-primary btn-block" type="submit">Signup</button>
                                </form>
                            </div>
                            <div className="d-flex align-items-center my-4">
                                <hr className="flex-grow-1" />
                                <span className="mx-2">OR</span>
                                <hr className="flex-grow-1" />
                            </div>
                            <div className="form-group">
                            <div className="d-flex align-items-center my-4">
                                <Link className="mx-2" onClick={toggleBPopup}>Already Registered? Login</Link>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            {isBOpen && <BusinessLogin handleClose={toggleBPopup} />}
        </div>
    )
}