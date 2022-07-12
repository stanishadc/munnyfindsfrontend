import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link,useHistory,Redirect } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import Footer from '../CommonFiles/Footer';
const initialforgotValues = {
    email: '',
    type: 'business'
}
export default function ForgotPassword(props) {
    const history = useHistory();
    const [values, setValues] = useState(initialforgotValues)
    const [errors, setErrors] = useState({})
    const applyErrorClass = field => ((field in errors && errors[field] == false) ? 'form-control-danger' : '')
    const applicationAPI = (url = "https://munnyapi.azurewebsites.net/api/user/") => {
        return {
            checkBusiness: newRecord => axios.post(url + "forgotpassword", newRecord)
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
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            try {
                initialforgotValues.email = values.email
                initialforgotValues.type = values.type
                forgotpass(initialforgotValues)
            } catch (err) {
                console.log(err);
            }
        }
    }
    const forgotpass = (loginData) => {
        applicationAPI().checkBusiness(loginData)
            .then(res => {
                if (res.data === "ok") {
                    alert("please check ur email for password");
                }
                else {
                    alert("Error in sending email");
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
                                <h3 className="text-center mt-3 mb-4">Forgot your password?</h3>
                                <p className="text-center text-3 text-muted">Enter your Email and we’ll help you reset your password.</p>
                                <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                                    <div className="form-group">
                                        <input className={"form-control" + applyErrorClass('email')} name="email" type="text" value={values.email} onChange={handleInputChange} placeholder="Email" />
                                    </div>
                                    <button className="btn btn-primary btn-block my-4" type="submit">Continue</button>
                                </form>
                                <p className="text-center mb-0"><Link className="btn-link" to={"/"}>Return to Home Page</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}