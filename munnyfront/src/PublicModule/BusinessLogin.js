import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,useHistory,Redirect } from 'react-router-dom';
import auth from '../CommonFiles/Auth';
const initialLoginValues = {
    email: '',
    password: ''
}
export default function BusinessLogin(props) {
    const history = useHistory();
    const [values, setValues] = useState(initialLoginValues)
    const [errors, setErrors] = useState({})
    const applyErrorClass = field => ((field in errors && errors[field] == false) ? 'form-control-danger' : '')
    const applicationAPI = (url = "http://165.22.216.222/api/business/") => {
        return {
            checkBusiness: newRecord => axios.post(url + "businesslogin", newRecord)
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
                if (res.data.status === "Login Success") {
                    auth.blogin(() => {                        
                        localStorage.setItem('MFFBusinessId', res.data.userId);
                        { 
                            props.handleClose();
                            return <Redirect to='/business/businessprofile'/>
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
            <div className="businessLogin">
                <div className="p-sm-3">
                    <div>
                        <button type="button" className="close" onClick={props.handleClose}> <span aria-hidden="true">×</span> </button>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item"><a id="login-tab" className="nav-link active text-4" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Business Login</a> </li>
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
                                                <Link className="justify-content-end" onClick={props.handleClose}>New Business? Signup</Link>
                                            </div>
                                        </div>
                                        <div className="col-sm text-right"><Link to={"/forgotpassword"} className="justify-content-end">Forgot Password ?</Link></div>
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