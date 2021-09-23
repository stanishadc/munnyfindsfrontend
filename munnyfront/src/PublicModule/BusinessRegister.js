import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link,Redirect } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import BusinessLogin from './BusinessLogin';
const defaultProductImage = "/assets/img/default-avatar.jpg";
const initialFieldValues = {
    businessId: 0,
    businessName: '',
    businessTypeId: 0,
    contactName: '',
    landline: '',
    mobileNo: '',
    email: '',
    address: '',
    googleMapURL: '',
    latitude: '',
    longitude: '',
    location: '',
    zipCode: '',
    city: '',
    country: '',
    totalRatings: 0,
    rating: 0,
    status: "true",
    createdDate: new Date().toLocaleString(),
    updatedDate: new Date().toLocaleString(),
    businessurl: '',
    password: '',
    imageName: '',
    imageSrc: defaultProductImage,
    imageFile: null,
}
export default function BusinessRegister(props) {
    const [isBOpen, setIsBOpen] = useState(false);
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    const [businessTypeList, setBusinessTypeList] = useState([])
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                })
            }
            reader.readAsDataURL(imageFile)
        }
        else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultProductImage
            })
        }
    }
    const validate = () => {
        let temp = {}
        temp.businessName = values.businessName === "" ? false : true;
        temp.contactName = values.contactName === "" ? false : true;
        temp.email = values.email === "" ? false : true;
        temp.mobileNo = values.mobileNo === "" ? false : true;
        temp.password = values.password === "" ? false : true;
        temp.businessTypeId = values.businessTypeId === "0" ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData()
            formData.append('businessId', values.businessId)
            formData.append('businessName', values.businessName)
            formData.append('businessTypeId', values.businessTypeId)
            formData.append('businessurl', values.businessurl)
            formData.append('contactName', values.contactName)
            formData.append('landline', values.landline)
            formData.append('mobileNo', values.mobileNo)
            formData.append('email', values.email)
            formData.append('address', values.address)
            formData.append('googleMapURL', values.googleMapURL)
            formData.append('latitude', values.latitude)
            formData.append('longitude', values.longitude)
            formData.append('location', values.location)
            formData.append('zipCode', values.zipCode)
            formData.append('city', values.city)
            formData.append('country', values.country)
            formData.append('totalRatings', values.totalRatings)
            formData.append('rating', values.rating)
            //formData.append('createdDate', values.createdDate)
            //formData.append('updatedDate', values.updatedDate)
            formData.append('status', values.status)
            formData.append('password', values.password)
            formData.append("imageName", values.imageName);
            formData.append('imageFile', values.imageFile);
            //console.log(values)
            addOrEdit(formData, resetForm)
        }
    }
    const applicationAPI = (url = 'https://localhost:44368/api/business/') => {
        return {
            create: newRecord => axios.post(url + "insert", newRecord),
            fetchType: () => axios.get('https://localhost:44368/api/businesstype/Get/'),
        }
    }
    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('businessId') === "0") {
            applicationAPI().create(formData)
                .then(res => {
                    //alert("New Business Added");
                    resetForm();
                    props.history.push({
                        pathname: '/subscription',
                    })
                })
        }
    }
    const resetForm = () => {
        setValues(initialFieldValues)
    }
    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' form-control-danger' : '')
    const toggleBPopup = () => {
        setIsBOpen(!isBOpen);
    }
    function refreshBusinessTypeList() {
        applicationAPI().fetchType()
            .then(res => setBusinessTypeList(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        refreshBusinessTypeList();
    }, [])
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div id="content">
                <section className="page-header page-header-text-light bg-secondary">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <h1>New Business Registration</h1>
                            </div>
                            <div className="col-md-4">
                                <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li className="active">Business Registration</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container">
                    <div id="businessRegister" className="bg-light shadow-md rounded mx-auto p-4">
                        <div>
                            <h2 class="text-4 mb-3 text-center font-weight-500">Please Enter Business Details
                                <Link className="mx-2 text-primary" onClick={toggleBPopup}>Already Registered ? Login</Link></h2>
                        </div><hr />
                        <div className="tab-content pt-4">
                            <div className="tab-pane show active">
                                <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label htmlFor="businessTypeId">Business Type</label>
                                            <select className={"form-control" + applyErrorClass('businessName')} value={values.businessTypeId} name="businessTypeId" onChange={handleInputChange}>
                                                <option value="0">Select Business Type</option>
                                                {businessTypeList.map(data =>
                                                    <option value={data.businessTypeId}>{data.business}</option>
                                                )}
                                            </select>
                                        </div>
                                        <div class="col-lg-4">
                                            <label htmlFor="businessName">Business Name</label>
                                            <input className={"form-control" + applyErrorClass('businessName')} name="businessName" type="text" value={values.businessName} onChange={handleInputChange} placeholder="Business Name" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label htmlFor="contactName">Contact Name</label>
                                            <input className={"form-control" + applyErrorClass('contactName')} name="contactName" type="text" value={values.contactName} onChange={handleInputChange} placeholder="Contact Name" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label htmlFor="email">Email</label>
                                            <input className={"form-control" + applyErrorClass('email')} name="email" type="text" value={values.email} onChange={handleInputChange} placeholder="Email" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label htmlFor="landline">Landline No</label>
                                            <input className={"form-control" + applyErrorClass('landline')} name="landline" type="text" value={values.landline} onChange={handleInputChange} placeholder="Landline No" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label htmlFor="mobileNo">Mobile</label>
                                            <input className={"form-control" + applyErrorClass('mobileNo')} name="mobileNo" type="text" value={values.mobileNo} onChange={handleInputChange} placeholder="Mobile" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-8">
                                            <label htmlFor="address">Address</label>
                                            <input className={"form-control" + applyErrorClass('address')} name="address" type="text" value={values.address} onChange={handleInputChange} placeholder="Please Enter Address" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label htmlFor="location">Location/Area</label>
                                            <input className={"form-control" + applyErrorClass('location')} name="location" type="text" value={values.location} onChange={handleInputChange} placeholder="Location/Area" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label htmlFor="latitude">Latitude</label>
                                            <input className={"form-control" + applyErrorClass('latitude')} name="latitude" type="text" value={values.latitude} onChange={handleInputChange} placeholder="Latitude" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label htmlFor="longitude">Longitude</label>
                                            <input className={"form-control" + applyErrorClass('longitude')} name="longitude" type="text" value={values.longitude} onChange={handleInputChange} placeholder="Longitude" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label htmlFor="city">City</label>
                                            <input className={"form-control" + applyErrorClass('city')} name="city" type="text" value={values.city} onChange={handleInputChange} placeholder="City" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                            <label htmlFor="country">Country</label>
                                            <input className={"form-control" + applyErrorClass('country')} name="country" type="text" value={values.country} onChange={handleInputChange} placeholder="Country" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label htmlFor="zipCode">Zip Code/Postal Code</label>
                                            <input className={"form-control" + applyErrorClass('zipCode')} name="zipCode" type="text" value={values.zipCode} onChange={handleInputChange} placeholder="ZipCode/Postal Code" />
                                        </div>
                                        <div class="col-lg-4">
                                            <label htmlFor="Password">Password</label>
                                            <input className={"form-control" + applyErrorClass('password')} name="password" type="text" value={values.password} onChange={handleInputChange} placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div class="col-lg-4">
                                        </div>
                                        <div class="col-lg-4"></div>
                                        <div class="col-lg-4">
                                            <button className="btn btn-primary mr-2" type="submit">Register</button>
                                            <button className="btn btn-danger" type="button" onClick={resetForm}>Cancel</button>
                                        </div>
                                    </div>
                                </form>
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