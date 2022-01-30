import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import BusinessSidebar from './BusinessSidebar';
import { handleSuccess, handleError } from "../CommonFiles/CustomAlerts";
import AddDuration from './AddDuration';
const OpeningHoursField={
    day:true,
    openingHour:'',
    closingHour:''
}
const initialFieldValues = {
    businessAvailabilityId: 0,
    businessId: "0",
    monday: true,
    tuesday: "true",
    wednesday: "true",
    thursday: "true",
    friday: "true",
    saturday: "true",
    sunday: "true",
    mondayOpeningTime:"9:00",
    tuesdayOpeningTime:"9:00",
    wednesdayOpeningTime:"9:00",
    thursdayOpeningTime:"9:00",
    fridayOpeningTime:"9:00",
    saturdayOpeningTime:"9:00",
    sundayOpeningTime:"9:00",
    mondayClosingTime:"20:00",
    tuesdayClosingTime:"20:00",
    wednesdayClosingTime:"20:00",
    thursdayClosingTime:"20:00",
    fridayClosingTime:"20:00",
    saturdayClosingTime:"20:00",
    sundayClosingTime:"20:00"
}
export default function BusinessAvailability(props) {
    const [values, setValues] = useState(initialFieldValues)
    const [openingHours, setOpeningHours] = useState(initialFieldValues)
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('businessAvailabilityId', values.businessAvailabilityId)
        formData.append('businessId', localStorage.getItem('MFFBusinessUserId'))
        formData.append('monday', values.monday)
        formData.append('tuesday', values.tuesday)
        formData.append('wednesday', values.wednesday)
        formData.append('thursday', values.thursday)
        formData.append('friday', values.friday)
        formData.append('saturday', values.saturday)
        formData.append('sunday', values.sunday)
        formData.append('mondayOpeningTime', values.mondayOpeningTime)
        formData.append('tuesdayOpeningTime', values.tuesdayOpeningTime)
        formData.append('monday', values.wednesdayOpeningTime)
        formData.append('wednesdayOpeningTime', values.thursdayOpeningTime)
        formData.append('fridayOpeningTime', values.fridayOpeningTime)
        formData.append('saturdayOpeningTime', values.saturdayOpeningTime)
        formData.append('sundayOpeningTime', values.sundayOpeningTime)
        formData.append('mondayClosingTime', values.mondayClosingTime)
        formData.append('tuesdayClosingTime', values.tuesdayClosingTime)
        formData.append('wednesdayClosingTime', values.wednesdayClosingTime)
        formData.append('thursdayClosingTime', values.thursdayClosingTime)
        formData.append('fridayClosingTime', values.fridayClosingTime)
        formData.append('saturdayClosingTime', values.saturdayClosingTime)
        formData.append('sundayClosingTime', values.sundayClosingTime)
        console.log(values)
        addOrEdit(formData, resetForm)
    }
    const applicationAPI = (url = "https://munnyfindsapi.azurewebsites.net/api/businessavailability/") => {
        return {
            fetchAll: () => axios.get(url + 'GetByBusinessId/'+localStorage.getItem('MFFBusinessId')),
            create: newRecord => axios.post(url + "insert", newRecord),
            update: (id, updateRecord) => axios.put(url + "update/" + id, updateRecord)
        }
    }
    const addOrEdit = (formData, onSuccess) => {
        if (formData.get("businessAvailabilityId") === "0") {
            applicationAPI()
                .create(formData)
                .then((res) => {
                    console.log(res)
                    handleSuccess("New Settings Added");
                    resetForm();
                });
        } else {
            applicationAPI()
                .update(formData.get("businessAvailabilityId"), formData)
                .then((res) => {
                    handleSuccess("Settings Updated");
                    resetForm();
                });
        }
    };
    const resetForm = () => {
        setValues(initialFieldValues)
    }
    function refreshBusinessTypeList() {
        applicationAPI().fetchAll()
            .then(res => setValues(res.data[0]))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        refreshBusinessTypeList();
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
                                <li className="active">Business Availability</li>
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
                                    <li className="nav-item"> <Link to={"/business/businessprofile"} className="nav-link" id="upcoming" data-toggle="tab" href="#upcoming" role="tab" aria-controls="upcoming" aria-selected="true">Profile</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/services"} className="nav-link" id="completed" data-toggle="tab" href="#completed" role="tab" aria-controls="completed" aria-selected="false">Services</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/serviceprices"} className="nav-link" id="serviceprices" data-toggle="tab" href="#serviceprices" role="tab" aria-controls="serviceprices" aria-selected="false">ServicePrices</Link> </li>
                                    <li className="nav-item"> <Link to={"/business/availability"} className="nav-link active" id="cancelled" data-toggle="tab" href="#cancelled" role="tab" aria-controls="cancelled" aria-selected="false">Availability</Link> </li>
                                </ul>
                                <div className="tab-content my-3" id="myTabContent">
                                    <div className="tab-pane show active">
                                        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <h4 className="text-5">Business Hours Settings</h4>
                                                    <div className="table-responsive">
                                                        <table className="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <th>Day</th>
                                                                    <th>Opening Hour</th>
                                                                    <th>Closing Hour</th>
                                                                    <th>Is Open?</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{verticalAlign:'middle'}}>Monday</td>
                                                                    <td>
                                                                        <select className="form-control" value={values.mondayOpeningTime} name="mondayOpeningTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td>
                                                                        <select className="form-control" value={values.mondayClosingTime} name="mondayClosingTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td style={{verticalAlign:'middle'}}>
                                                                            <input type="checkbox" value={values.monday} checked={values.monday} name="monday" className="form-control" onChange={handleInputChange}/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{verticalAlign:'middle'}}>Tuesday</td>
                                                                    <td>
                                                                        <select className="form-control" value={values.tuesdayOpeningTime} name="tuesdayOpeningTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td>
                                                                        <select className="form-control" value={values.tuesdayClosingTime} name="tuesdayClosingTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td style={{verticalAlign:'middle'}}>
                                                                            <input type="checkbox" value={values.tuesday} checked={values.tuesday} name="tuesday" className="form-control" onChange={handleInputChange}/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{verticalAlign:'middle'}}>Wednesday</td>
                                                                    <td>
                                                                        <select className="form-control" value={values.wednesdayOpeningTime} name="wednesdayOpeningTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td>
                                                                        <select className="form-control" value={values.wednesdayClosingTime} name="wednesdayClosingTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td style={{verticalAlign:'middle'}}>
                                                                            <input type="checkbox" value={values.wednesday} checked={values.wednesday} name="wednesday" className="form-control" onChange={handleInputChange}/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{verticalAlign:'middle'}}>Thursday</td>
                                                                    <td>
                                                                        <select className="form-control" value={values.thursdayOpeningTime} name="thursdayOpeningTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td>
                                                                        <select className="form-control" value={values.thursdayClosingTime} name="thursdayClosingTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td style={{verticalAlign:'middle'}}>
                                                                            <input type="checkbox" value={values.thursday} checked={values.thursday} name="thursday" className="form-control" onChange={handleInputChange}/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{verticalAlign:'middle'}}>Friday</td>
                                                                    <td>
                                                                        <select className="form-control" value={values.fridayOpeningTime} name="fridayOpeningTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td>
                                                                        <select className="form-control" value={values.fridayClosingTime} name="fridayClosingTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td style={{verticalAlign:'middle'}}>
                                                                            <input type="checkbox" value={values.friday} checked={values.friday} name="friday" className="form-control" onChange={handleInputChange}/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{verticalAlign:'middle'}}>Saturday</td>
                                                                    <td>
                                                                        <select className="form-control" value={values.saturdayOpeningTime} name="saturdayOpeningTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td>
                                                                        <select className="form-control" value={values.saturdayClosingTime} name="saturdayClosingTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td style={{verticalAlign:'middle'}}>
                                                                            <input type="checkbox" value={values.saturday} checked={values.saturday} name="saturday" className="form-control" onChange={handleInputChange}/>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{verticalAlign:'middle'}}>Sunday</td>
                                                                    <td>
                                                                        <select className="form-control" value={values.sundayOpeningTime} name="sundayOpeningTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td>
                                                                        <select className="form-control" value={values.sundayClosingTime} name="sundayClosingTime" onChange={handleInputChange}>
                                                                            <AddDuration></AddDuration>
                                                                        </select></td>
                                                                    <td style={{verticalAlign:'middle'}}>
                                                                            <input type="checkbox" value={values.sunday} checked={values.sunday} name="sunday" className="form-control" onChange={handleInputChange}/>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}