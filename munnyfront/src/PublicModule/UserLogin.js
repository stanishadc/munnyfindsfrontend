import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useHistory } from 'react-router-dom';
import auth from '../CommonFiles/Auth';
const initialLoginValues = {
    email: '',
    password: ''
}
export default function UserLogin(props) {
    const history = useHistory();
    const [values, setValues] = useState(initialLoginValues)
    const [errors, setErrors] = useState({})
    const applyErrorClass = field => ((field in errors && errors[field] == false) ? 'form-control-danger' : '')
    const applicationAPI = (url = 'https://localhost:44313/api/customer/') => {
        return {
            checkBusiness: newRecord => axios.post(url + "customerlogin", newRecord)
        }
    }
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const validate = () => {
        let temp = {}
        temp.email = values.email == "" ? false : true;
        temp.password = values.password == "" ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            try {
                initialLoginValues.email = values.email
                initialLoginValues.password = values.password
                checkUser(initialLoginValues)
            } catch (err) {
                console.log(err);
            }
        }
    }
    const checkUser = (loginData) => {
        applicationAPI().checkBusiness(loginData)
            .then(res => {
                console.log(res.data)
                if (res.data.status === "Login Success") {
                    auth.blogin(() => {                        
                        localStorage.setItem('MFFUserId', res.data.userId);
                        { 
                            props.handleClose();
                            // props.history.push({
                            //     pathname: '/business/businessprofile'
                            // })
                        }
                    });
                }
                else {
                    alert("Invalid credentails");
                }
            })
    }
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
                            <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                                    <div className="form-group">
                                    <input className={"form-control" + applyErrorClass('email')} name="email" type="text" value={values.email} onChange={handleInputChange} placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                    <input className={"form-control" + applyErrorClass('password')} name="password" type="password" value={values.password} onChange={handleInputChange} placeholder="Password" />
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-sm">
                                            <div className="form-group">
                                                
                                            </div>
                                        </div>
                                        <div className="col-sm text-right"><Link to={"/forgotpassword"} className="justify-content-end">Forgot Password ?</Link></div>
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