import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import BusinessSidebar from './BusinessSidebar';
import { handleSuccess, handleError } from "../CommonFiles/CustomAlerts";
const initialFieldValues = {
  servicePriceId: 0,
  servicePriceName: "",
  duration: "",
  price: "",
  description: "",
  status: "true",
  serviceId: "",
    // createdDate: new Date().toLocaleString(),
    // updatedDate: new Date().toLocaleString(),
}
export default function BusinessServicePrices(props) {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    const [serviceList, setServiceList] = useState([])
    const [servicePriceList, setServicePriceList] = useState([])
    const [recordForEdit, setRecordForEdit] = useState(null)
    useEffect(() => {
        if (recordForEdit !== null)
            setValues(recordForEdit);
    }, [recordForEdit])
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const validate = () => {
        let temp = {}
        temp.price = values.price === "0" ? false : true;
        temp.duration = values.duration === "" ? false : true;
        temp.servicePriceName = values.servicePriceName === "" ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData()
            if (values.servicePriceId === 0)
            {
                formData.append('servicePriceId', values.servicePriceId)
                formData.append('servicePriceName', values.servicePriceName)            
                formData.append('duration', values.duration)
                formData.append('price', values.price)
                formData.append('description', values.description)
                formData.append('serviceId', values.serviceId)
                formData.append('businessId', localStorage.getItem('MFFBusinessId'))
                formData.append('status', values.status)
                add(formData)
            }
            else
            {
                formData.append('servicePriceId', values.servicePriceId)
                formData.append('servicePriceName', values.servicePriceName)
                formData.append('duration', values.duration)            
                formData.append('price', values.price)
                formData.append('description', values.description)
                formData.append('serviceId', values.serviceId)
                formData.append('businessId', localStorage.getItem('MFFBusinessId'))
                formData.append('createdDate', values.createdDate)
                formData.append('updatedDate', values.updatedDate)
                formData.append('status', values.status)
                update(formData)
            }
        }
    }
    const applicationAPI = (url = "https://localhost:44368/api/serviceprice/") => {
        return {
             fetchAll: () => axios.get(url + 'GetById/'+localStorage.getItem('MFFBusinessId')),
            create: newRecord => axios.post(url + "insert", newRecord),
            update: (id, updateRecord) => axios.put(url + "update/" + id, updateRecord),
            delete: id => axios.delete(url + "delete/" + id),
            fetchservice: () => axios.get('https://localhost:44368/api/service/GetById/'+localStorage.getItem('MFFBusinessId')),
        }
    }
    const showEditDetails = data => {
        setRecordForEdit(data)
    }
   
    const onDelete = (e, id) => {
        if (window.confirm('Are you sure to delete this record?'))
            applicationAPI().delete(id)
                .then(res => {
                    handleSuccess("Service Price Deleted Succesfully");
                    refreshServicePriceList()
                })
                .catch(err => handleError("Service price Deleted Failed"))
    }
    const add = (formData) => {
            applicationAPI()
                .create(formData)
                .then((res) => {
                    alert("New Service price Added");
                    resetForm();
                    refreshServicePriceList();
                });
        } 
    const update = (formData) => {
            applicationAPI()
                .update(formData.get("servicePriceId"), formData)
                .then((res) => {
                    alert("Service price Details Updated");
                    resetForm();
                    refreshServicePriceList();
                });
    };
    const resetForm = () => {
        setValues(initialFieldValues)
    }
    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' form-control-danger' : '')

    function refreshServiceList() {
        applicationAPI().fetchservice()
            .then(res => setServiceList(res.data))
            .catch(err => console.log(err))
    }
    function refreshServicePriceList() {
        applicationAPI().fetchAll()
            .then(res => setServicePriceList(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        refreshServiceList();
        refreshServicePriceList();
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
                                <li className="active">Business Services</li>
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
                                    <li className="nav-item"> <Link to={"/business/businessprofile"} className="nav-link " id="businessprofile" data-toggle="tab" href="#businessprofile" role="tab" aria-controls="businessprofile" aria-selected="false">Profile</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/services"} className="nav-link" id="services" data-toggle="tab" href="#services" role="tab" aria-controls="services" aria-selected="false">Services</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/serviceprices"} className="nav-link active" id="serviceprices" data-toggle="tab" href="#serviceprices" role="tab" aria-controls="serviceprices" aria-selected="true">ServicePrices</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/availability"} className="nav-link" id="availability" data-toggle="tab" href="#availability" role="tab" aria-controls="availability" aria-selected="false">Availability</Link> </li>
                                </ul>
                                <div className="tab-content my-3" id="myTabContent">
                                    <div className="tab-pane show active">
                                        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                                            <div className="form-group row">
                                                <div class="col-lg-6">
                                                    <label htmlFor="serviceId">Service</label>
                                                    <select className={"form-control" + applyErrorClass('serviceId')} value={values.serviceId} name="serviceId" onChange={handleInputChange}>
                                                        <option value="0">Select Service</option>
                                                        {serviceList.map(data =>
                                                            <option value={data.serviceId}>{data.serviceName}</option>
                                                        )}
                                                    </select>
                                                </div>
                                                <div class="col-lg-6">
                                                    <label htmlFor="price">ServicePriceName</label>
                                                    <input className={"form-control" + applyErrorClass('servicePriceName')} name="servicePriceName" type="text" value={values.servicePriceName} onChange={handleInputChange} placeholder="ServicePriceName" />
                                                </div>
                                                </div>
                                                <div className="form-group row">
                                                <div class="col-lg-6">
                                                    <label htmlFor="price">Price</label>
                                                    <input className={"form-control" + applyErrorClass('price')} name="price" type="text" value={values.price} onChange={handleInputChange} placeholder="Price" />
                                                </div>
                                                <div class="col-lg-6">
                                                    <label htmlFor="duration">Duration</label>
                                                    <select className={"form-control" + applyErrorClass('duration')} type="text" value={values.duration} name="duration" onChange={handleInputChange}>
                                                        <option value="0">Select Duration</option>
                                                        <option  value="30">30 mins</option>
                                                        <option value="60">1 Hour</option>
                                                        <option value="90">1 Hour 30 mins</option>
                                                        <option value="120">2 Hours</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div class="col-lg-12">
                                                    <label htmlFor="description">Description</label>
                                                    <input className={"form-control" + applyErrorClass('description')} name="description" type="text" value={values.description} onChange={handleInputChange} placeholder="Please Enter Description" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div class="col-lg-7">
                                                </div>
                                                <div class="col-lg-5">
                                                    <button className="btn btn-primary mr-2" type="submit">Submit</button>
                                                    <button className="btn btn-danger" type="button" onClick={resetForm}>Cancel</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="table-responsive product-list">
                                <table className="table table-bordered table-striped mt-3" id="servicePriceList">
                                    <thead>
                                        <tr>
                                            <th>Service Name</th>
                                            <th>Service Price Name</th>
                                            <th>Duration</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {servicePriceList.map(servicePrice =>
                                            <tr key={servicePrice.servicePriceId}>
                                                <td>{servicePrice.service.serviceName}</td>
                                                <td>{servicePrice.servicePriceName}</td>
                                                <td>{servicePrice.duration}</td>
                                                <td>{servicePrice.price}</td>
                                                <td>
                                                    <button className="btn btn-success btn-sm mr-2" onClick={() => { showEditDetails(servicePrice) }}><i className="fas fa-pencil-alt" /></button>
                                                    <button className="btn btn-danger btn-sm" onClick={e => onDelete(e, parseInt(servicePrice.servicePriceId))}><i className="fas fa-trash-alt" /></button></td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
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