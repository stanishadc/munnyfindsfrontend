import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import BusinessSidebar from './BusinessSidebar';
import { Link } from 'react-router-dom';
const initialFieldValues = {
    appointmentId: 0,
    appointmentNo: '',
    appointmentDate: '',
    customerId: '',
    businessId: '',
    bookingStatus: '',
    paymentStatus: '',
    modeOfPayment: '',
    subTotal: '',
    discount: '',
    total: '',
    tax: '',
    review: '',
    rating: '',
    createdDate: new Date().toLocaleString(),
    updatedDate: new Date().toLocaleString(),
    startTime: '',
    endTime: '',
    duration: '',
    appointmentTime: '',
    startDate: new Date().toLocaleString(),
    endDate: new Date().toLocaleString(),
    userServices: '',
    paymentPlace: ''
}
export default function BusinessAppointmentsView(props) {
    const [bookingStatusList, setBookingStatusList] = useState([]);
    const [paymentStatusList, setPaymentStatusList] = useState([]);
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
        temp.business = values.business === "" ? false : true;
        temp.status = values.status === "0" ? false : true;
        setErrors(temp);
        return Object.values(temp).every((x) => x === true);
    };
    const applicationAPI = (url = 'https://localhost:44313/api/appointments/') => {
        return {
            fetchAppointmentsView: () => axios.get(url + 'getbyid/' + props.match.params["appointmentId"]),
            fetchBookingStatusList: (id) =>
                axios.get("https://localhost:44313/api/appointments/Get/"),
            fetchPaymentStatusList: (id) =>
                axios.get("https://localhost:44313/api/appointments/Get/"),
            update: (id, updateRecord) =>
                axios.put(url + "update/" + id, updateRecord),
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData();
            formData.append("appointmentId", values.appointmentId);
            formData.append("appointmentNo", values.appointmentNo);
            formData.append("appointmentDate", values.appointmentDate);
            formData.append("customerId", values.customerId);
            formData.append("businessId", values.businessId);
            formData.append("bookingStatus", values.bookingStatus);
            formData.append("paymentStatus", values.paymentStatus);
            formData.append("modeOfPayment", values.modeOfPayment);
            formData.append("subTotal", values.subTotal);
            formData.append("discount", values.discount);
            formData.append("total", values.total);
            formData.append("tax", values.tax);
            formData.append("review", values.review);
            formData.append("rating", values.rating);
            formData.append("createdDate", values.createdDate);
            formData.append("updatedDate", values.updatedDate);
            formData.append("startTime", values.startTime);
            formData.append("endTime", values.endTime);
            formData.append("duration", values.duration);
            formData.append("appointmentTime", values.appointmentTime);
            formData.append("startDate", values.startDate);
            formData.append("endDate", values.endDate);
            formData.append("userServices", values.userServices);
            formData.append("paymentPlace", values.paymentPlace);
            console.log(values);
            addOrEdit(formData,);
        }
    };
    const addOrEdit = (formData, onSuccess) => {
        if (formData.get("appointmentId") === "0") {
            applicationAPI()
                .create(formData)
                .then((res) => {
                    // handleSuccess("New Appointment Added");
                });
        } else {
            applicationAPI()
                .update(formData.get("appointmentId"), formData)
                .then((res) => {
                    // handleSuccess("Appointment Details Updated");
                });
        }
    };
    function refreshBookingStatus() {
        applicationAPI()
            .fetchBookingStatusList()
            .then((res) => setBookingStatusList(res.data))
            .catch((err) => console.log(err));
    }
    function refreshPaymentStatus() {
        applicationAPI()
            .fetchPaymentStatusList()
            .then((res) => setPaymentStatusList(res.data))
            .catch((err) => console.log(err));
    }
    function refreshAppointmentsView() {
        applicationAPI().fetchAppointmentsView()
            .then(res => setValues(res.data[0]))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        refreshAppointmentsView();
        refreshBookingStatus();
        refreshPaymentStatus();
    }, [])
    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' form-control-danger' : '')
    return (
        <div className="container-fluid">
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
                                <li className="active">Upcoming Appointments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>{/* Page Header end */}
            <div className="row main-content">
                <div className="col-sm-3 col-xs-6 BusinessSidebar pl-0">
                    <BusinessSidebar />
                </div>
                <div className="col-sm-9 col-xs-12 content pt-3 pl-0">
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                        <div className="row mt-3">
                            <div className="col-sm-12">
                                <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                                    <h6 className="mb-3">Appointments Details</h6>
                                    <div className="form-group row floating-label">
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="appointmentNo">Appointment No</label>
                                            <input className={"form-control" + applyErrorClass('appointmentNo')} name="appointmentNo" type="text" value={values.appointmentNo} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="appointmentDate">Appointment Date</label>
                                            <input className={"form-control" + applyErrorClass('appointmentDate')} name="appointmentDate" type="text" value={values.appointmentDate} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="bookingStatus">Booking Status</label>
                                            <select
                                                name="appointmentId"
                                                type="text"
                                                value={values.appointmentId}
                                                onChange={handleInputChange}
                                                className="form-control"
                                            >
                                                <option value="0">Please Select</option>
                                                {bookingStatusList.map((bus) => (
                                                    <option value={bus.appointmentId}>
                                                        {bus.bookingStatus}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row floating-label">
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="paymentStatus">Payment Status</label>
                                            <select
                                                name="appointmentId"
                                                type="text"
                                                value={values.appointmentId}
                                                onChange={handleInputChange}
                                                className="form-control"
                                            >
                                                <option value="0">Please Select</option>
                                                {paymentStatusList.map((bus) => (
                                                    <option value={bus.appointmentId}>
                                                        {bus.paymentStatus}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="modeOfPayment"> ModeOfPayment</label>
                                            <input className={"form-control" + applyErrorClass('modeOfPayment')} name="modeOfPayment" type="text" value={values.modeOfPayment} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="startTime">StartTime</label>
                                            <input className={"form-control" + applyErrorClass('startTime')} name="startTime" type="text" value={values.startTime} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row floating-label">
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="endTime">EndTime</label>
                                            <input className={"form-control" + applyErrorClass('endTime')} name="endTime" type="text" value={values.endTime} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="subTotal">SubTotal</label>
                                            <input className={"form-control" + applyErrorClass('subTotal')} name="subTotal" type="text" value={values.subTotal} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="discount">Discount</label>
                                            <input className={"form-control" + applyErrorClass('discount')} name="discount" type="text" value={values.discount} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row floating-label">
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="total">Total</label>
                                            <input className={"form-control" + applyErrorClass('total')} name="total" type="text" value={values.total} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="tax">Tax</label>
                                            <input className={"form-control" + applyErrorClass('tax')} name="tax" type="text" value={values.tax} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="review">Review</label>
                                            <input className={"form-control" + applyErrorClass('review')} name="review" type="text" value={values.review} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row floating-label">
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="rating">Rating</label>
                                            <input className={"form-control" + applyErrorClass('rating')} name="rating" type="text" value={values.rating} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="duration">Duration</label>
                                            <input className={"form-control" + applyErrorClass('duration')} name="duration" type="text" value={values.duration} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="appointmentTime">Appointment Time</label>
                                            <input className={"form-control" + applyErrorClass('appointmentTime')} name="appointmentTime" type="text" value={values.appointmentTime} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row floating-label">
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="userServices">UserServices</label>
                                            <input className={"form-control" + applyErrorClass('userServices')} name="userServices" type="text" value={values.userServices} onChange={handleInputChange} />
                                        </div>
                                        <div className="col-sm-4 col-12">
                                            <label htmlFor="paymentPlace">PaymentPlace</label>
                                            <input className={"form-control" + applyErrorClass('paymentPlace')} name="paymentPlace" type="text" value={values.paymentPlace} onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <button className="btn btn-primary" type="submit">Update Now</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}