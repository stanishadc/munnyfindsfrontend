import React from 'react';
import { Link } from 'react-router-dom';
export default function UserLogin(props) {
    return (
        <div className="popup-box">
            <div className="userLogin">
                <div className="p-sm-3">
                    <div>
                        <button type="button" className="close" onClick={props.handleClose}> <span aria-hidden="true">×</span> </button>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item"> <a id="login-tab" className="nav-link active text-4" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Login</a> </li>
                            <li className="nav-item"> <a id="signup-tab" className="nav-link text-4" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="false">Sign Up</a> </li>
                        </ul>
                        <div className="tab-content pt-4">
                            <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                <form id="loginForm" method="post">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="loginMobile" required placeholder="Mobile or Email ID" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="loginPassword" required placeholder="Password" />
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm">
                                            <div className="form-check custom-control custom-checkbox">
                                                <input id="remember-me" name="remember" className="custom-control-input" type="checkbox" />
                                                <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
                                            </div>
                                        </div>
                                        <div className="col-sm text-right"> <a className="justify-content-end" href="#">Forgot Password ?</a> </div>
                                    </div>
                                    <button className="btn btn-primary btn-block" type="submit">Login</button>
                                </form>
                            </div>
                            <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                                <form id="signupForm" method="post">
                                    <div className="form-group">
                                        <input type="text" className="form-control" data-bv-field="number" id="signupEmail" required placeholder="Email ID" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="signupMobile" required placeholder="Mobile Number" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="signuploginPassword" required placeholder="Password" />
                                    </div>
                                    <button className="btn btn-primary btn-block" type="submit">Signup</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}