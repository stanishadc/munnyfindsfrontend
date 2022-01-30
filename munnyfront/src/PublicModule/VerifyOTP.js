import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import Footer from '../CommonFiles/Footer';
import auth from '../CommonFiles/Auth';
const initialLoginValues = {
    customerEmail: '',
    customerOTP: '',
    customerOTP1: '',
    customerOTP1: '',
    customerOTP2: '',
    customerOTP4: ''
}
export default function VerifyOTP(props) {
    const [values, setValues] = useState(initialLoginValues)
    const [errors, setErrors] = useState({})
    const applyErrorClass = field => ((field in errors && errors[field] == false) ? 'form-control-danger' : '')
    const applicationAPI = (url = "http://munnyapi.azurewebsites.net/api/customer/") => {
        return {
            checkOTP: newRecord => axios.post(url + "verifyCustomer", newRecord)
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
        //temp.email = values.email == "" ? false : true;
        //temp.password = values.password == "" ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            try {
                initialLoginValues.customerEmail = "tanishasayyad@gmail.com";//values.match.params["email"]
                initialLoginValues.customerOTP = values.customerOTP1+values.customerOTP2+values.customerOTP3+values.customerOTP4;
                alert(initialLoginValues.customerOTP)
                VerifyUser(initialLoginValues)
                
            } catch (err) {
                console.log(err);
            }
        }
    }
    const VerifyUser = (loginData) => {
        applicationAPI().checkOTP(loginData)
            .then(res => {
                console.log(res.data)
                if (res.data.status === "Account Verified") {
                    alert("Account Verified");
                    auth.blogin(() => {
                        localStorage.setItem('MFFUserId', res.data.userId);
                        {
                            props.history.push({
                                pathname: '/'
                            })
                        }
                    });
                }
                else {
                    alert("Invalid OTP");
                }
            })
    }
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div id="content">
                <div className="container pt-5 pb-4">
                    <div className="row">
                        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto">
                            <div className="bg-white shadow-md rounded p-3 pt-sm-4 pb-sm-5 px-sm-5">
                                <h3 className="text-center mt-3 mb-4">Two-Step Verification</h3>
                                <p className="text-center"><img className="img-fluid" src="images/otp-icon.png" alt="verification" /></p>
                                <p className="text-muted text-3 text-center">Please enter the OTP (one time password) to verify your account. A Code has been sent to your email</p>
                                <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                                    <div className="form-row">
                                        <div className="col form-group">
                                        <input className="form-control border-2 text-center text-6 px-0 py-2" name="customerOTP1" type="text" value={values.customerOTP1} onChange={handleInputChange} maxLength={1} required autoComplete="off" />
                                        </div>
                                        <div className="col form-group">
                                        <input className="form-control border-2 text-center text-6 px-0 py-2" name="customerOTP2" type="text" value={values.customerOTP2} onChange={handleInputChange} maxLength={1} required autoComplete="off" />
                                        </div>
                                        <div className="col form-group">
                                        <input className="form-control border-2 text-center text-6 px-0 py-2" name="customerOTP3" type="text" value={values.customerOTP3} onChange={handleInputChange} maxLength={1} required autoComplete="off" />
                                        </div>
                                        <div className="col form-group">
                                        <input className="form-control border-2 text-center text-6 px-0 py-2" name="customerOTP4" type="text" value={values.customerOTP4} onChange={handleInputChange} maxLength={1} required autoComplete="off" />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary btn-block shadow-none my-4" type="submit">Verify</button>
                                </form>
                                <p className="text-2 text-center">Not received your code? <a className="btn-link" href="#">Resend code</a></p>
                                <p className="text-2 text-center mb-0"><a className="btn-link" href="#">Call me</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}