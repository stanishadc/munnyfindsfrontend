import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import BusinessSidebar from './BusinessSidebar';
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
    password: ''
}
export default function BusinessProfile(props) {
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
            formData.append('createdDate', values.createdDate)
            formData.append('updatedDate', values.updatedDate)
            formData.append('status', values.status)
            formData.append('password', values.password)
            console.log(values)
            addOrEdit(formData, resetForm)
        }
    }
    const applicationAPI = (url = 'https://localhost:44313/api/business/') => {
        return {

            create: newRecord => axios.post(url + "insert", newRecord),
            update: (id, updateRecord) => axios.put(url + "update/" + id, updateRecord),
            fetchType: () => axios.get('https://localhost:44313/api/businesstype/get'),
            fetchBusinessView: () => axios.get(url + 'getbyid/'+localStorage.getItem('MFFBusinessId'))
        }
    }

    const addOrEdit = (formData, onSuccess) => {
          applicationAPI().update(formData.get("businessId"), formData)
            .then((res) => {
                alert("Business Profile Details Updated");
            });
      };

    const resetForm = () => {
        setValues(initialFieldValues)
    }
    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' form-control-danger' : '')
    function refreshBusinessTypeList() {
        applicationAPI().fetchType()
            .then(res => setBusinessTypeList(res.data))
            .catch(err => console.log(err))
    }
    function refreshBusinessView() {
        applicationAPI().fetchBusinessView()
        .then(res => setValues(res.data[0]))
        .catch(err => console.log(err))
        }
    useEffect(() => {
        refreshBusinessTypeList();
        refreshBusinessView();
    }, [])
    return (
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Business Profile</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li className="active">Business Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>{/* Page Header end */}
            <div id="content">
                <div className="container">
                    <div className="row">
                        <BusinessSidebar></BusinessSidebar>
                        <div className="col-lg-9">
                            <div className="bg-white shadow-md rounded p-4">
                                <h5 className="mb-4">Business Profile</h5>
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item"> <Link to={"/business/businessprofile"} className="nav-link active" id="upcoming" data-toggle="tab" href="#upcoming" role="tab" aria-controls="upcoming" aria-selected="true">Profile</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/services"} className="nav-link" id="completed" data-toggle="tab" href="#completed" role="tab" aria-controls="completed" aria-selected="false">Services</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/availability"} className="nav-link" id="cancelled" data-toggle="tab" href="#cancelled" role="tab" aria-controls="cancelled" aria-selected="false">Availability</Link> </li>
                                </ul>
                                <div className="tab-content my-3" id="myTabContent">
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
                                            </div>
                                            <div className="form-group row">
                                                <div class="col-lg-6">
                                                </div>
                                                <div class="col-lg-6">
                                                    <button className="btn btn-primary mr-2" type="submit">Update Profile</button>
                                                    <button className="btn btn-warning" type="button" onClick={resetForm}>Cancel</button>
                                                </div>
                                            </div>
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