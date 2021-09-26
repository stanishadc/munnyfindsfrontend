import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import UserSidebar from './UserSidebar';
const initialFieldValues = {
    customerId: 0,
    customerName: '',
    customerMobile: '',
    customerEmail: '',
    password: '',
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
    status: "true",
    createdDate: new Date().toLocaleString(),
    updatedDate: new Date().toLocaleString()
}
export default function UserChangePasword(props) {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const validate = () => {
        let temp = {};
        //temp.oldPassword = values.password !== values.oldPassword ? false : true;
        setErrors(temp);
        return Object.values(temp).every((x) => x === true);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData();
            formData.append("customerId", values.customerId);
            formData.append("customerName", values.customerName);
            formData.append("customerMobile", values.customerMobile);
            formData.append("customerEmail", values.customerEmail);
            formData.append("password", values.newPassword);
            formData.append("createdDate", values.createdDate);
            formData.append("updatedDate", values.updatedDate);
            formData.append("status", values.status);
            formData.append("businessTypeURL", values.businessTypeURL);
            console.log(values);
            addOrEdit(formData,);
        }
    };
    const addOrEdit = (formData) => {
        
        applicationAPI().update(formData.get("customerId"), formData)
            .then((res) => {
                   alert("Profile Updated");
            });
    };
    const applicationAPI = (url = "https://api.munnyfinds.com/api/customer/") => {
        return {
            fetchCustomerView: () => axios.get(url + 'getbyid/' + localStorage.getItem('MFFUserId')),
            update: (id, updateRecord) => axios.put(url + "update/" + id, updateRecord)
        }
    }
    function refreshCustomerView() {
        applicationAPI().fetchCustomerView()
            .then(res => setValues(res.data[0]))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        refreshCustomerView();
    }, [])
    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' form-control-danger' : '')
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
                                        <form onSubmit={handleSubmit} id="personalInformation" method="post">
                                                <div className="form-group">
                                                    <label htmlFor="oldPassword">Existing Password</label>
                                                    <input className={"form-control" + applyErrorClass('oldPassword')} name="oldPassword" type="password" value={values.oldPassword} onChange={handleInputChange} placeholder="Existing Password" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="newPassword">New Password</label>
                                                    <input className={"form-control" + applyErrorClass('newPassword')} name="newPassword" type="password" value={values.newPassword} onChange={handleInputChange} placeholder="New Password" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                                    <input className={"form-control" + applyErrorClass('confirmPassword')} name="confirmPassword" type="password" value={values.confirmPassword} onChange={handleInputChange} placeholder="Confirm Password"/>
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