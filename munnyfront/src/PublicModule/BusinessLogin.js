import React from 'react';
import { Link } from 'react-router-dom';
export default function BusinessLogin(props) {
    return (
        <div className="popup-box">
            <div className="businessLogin">
                <div className="p-sm-3">
                    <div>
                        <button type="button" className="close" onClick={props.handleClose}> <span aria-hidden="true">×</span> </button>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item"><a id="login-tab" className="nav-link active text-4" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Business Login</a> </li>
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
                                            <div className="form-group">
                                                <Link className="justify-content-end" to={"/registerbusiness"}>New Business? Signup</Link>
                                            </div>
                                        </div>
                                        <div className="col-sm text-right"><a className="justify-content-end" href="#">Forgot Password ?</a></div>
                                    </div>
                                    <button className="btn btn-primary btn-block" type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}