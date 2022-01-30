import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import BusinessSidebar from './BusinessSidebar';
import { Link } from 'react-router-dom';
import moment from 'moment'
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
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    const handleInputChange = e => {
      const { name, value } = e.target;
      setValues({
        ...values,
        [name]: value
      })
    }
    const applicationAPI = (url = "http://munnyapi.azurewebsites.net/api/appointments/") => {
      return {
        fetchAppointmentDetails: () => axios.get(url + 'getbyid/' + props.match.params["appointmentId"]),
        update: (id, updateRecord) => axios.put(url + "update/" + id, updateRecord),
      }
    }
    const handleSubmit = (e) => {
      e.preventDefault();
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
      addOrEdit(formData);
    };
    const addOrEdit = (formData) => {
      applicationAPI()
        .update(formData.get("appointmentId"), formData)
        .then((res) => {
          alert("Appointment Details Updated");
        });
    };
    function GetAppointment() {
      applicationAPI()
        .fetchAppointmentDetails()
        .then(res => setValues(res.data[0]))
        .catch((err) => console.log(err));
    }
    useEffect(() => {
      GetAppointment();
    }, [])
    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' form-control-danger' : '')
    return (
      <div id="main-wrapper">
        <Header></Header>
        <section className="page-header page-header-text-light bg-secondary">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1>Appointment Details</h1>
              </div>
              <div className="col-md-4">
                <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                  <li><Link to={"/"}>Home</Link></li>
                  <li className="active">Appointment Details</li>
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
                  <h4 className="mb-4">Appointment Details</h4>
                  <hr className="mx-n4 mb-4" />
                  <div className="row">
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                      <div className="form-group row">
                        <div className="col-sm-4 col-12">
                          <label htmlFor="appointmentNo">Appointment No</label>
                          <input className={"form-control" + applyErrorClass('appointmentNo')} name="appointmentNo" type="text" value={values.appointmentNo} onChange={handleInputChange} disabled />
                        </div>
                        <div className="col-sm-4 col-12">
                          <label htmlFor="appointmentDate">Appointment Date</label>
                          <input className={"form-control" + applyErrorClass('appointmentDate')} name="appointmentDate" type="text" value={moment(values.appointmentDate).format("MMMM Do yyyy")} onChange={handleInputChange} disabled />
                        </div>
                        <div className="col-sm-4 col-12">
                          <label htmlFor="bookingStatus">Booking Status</label>
                          <select name="bookingStatus" value={values.bookingStatus} onChange={handleInputChange} className="form-control" disabled={values.bookingStatus == "Completed" ? true : false}>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-4 col-12">
                          <label htmlFor="paymentStatus">Payment Status</label>
                          <select name="paymentStatus" value={values.paymentStatus} onChange={handleInputChange} className="form-control" disabled>
                            <option value="Pending">Pending</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>
                        <div className="col-sm-4 col-12">
                          <label htmlFor="modeOfPayment"> ModeOfPayment</label>
                          <input className={"form-control" + applyErrorClass('modeOfPayment')} name="modeOfPayment" type="text" value={values.modeOfPayment} onChange={handleInputChange} disabled />
                        </div>
                        <div className="col-sm-4 col-12">
                          <label htmlFor="startTime">StartTime</label>
                          <input className={"form-control" + applyErrorClass('startTime')} name="startTime" type="text" value={values.startTime} onChange={handleInputChange} disabled />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-4 col-12">
                          <label htmlFor="endTime">EndTime</label>
                          <input className={"form-control" + applyErrorClass('endTime')} name="endTime" type="text" value={values.endTime} onChange={handleInputChange} disabled />
                        </div>
                        <div className="col-sm-4 col-12">
                          <label htmlFor="subTotal">SubTotal</label>
                          <input className={"form-control" + applyErrorClass('subTotal')} name="subTotal" type="text" value={values.subTotal} onChange={handleInputChange} disabled />
                        </div>
                        <div className="col-sm-4 col-12">
                          <label htmlFor="discount">Discount</label>
                          <input className={"form-control" + applyErrorClass('discount')} name="discount" type="text" value={values.discount} onChange={handleInputChange} disabled />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-4 col-12">
                          <label htmlFor="total">Total</label>
                          <input className={"form-control" + applyErrorClass('total')} name="total" type="text" value={values.total} onChange={handleInputChange} disabled />
                        </div>
                        <div className="col-sm-4 col-12">
                          <label htmlFor="tax">Tax</label>
                          <input className={"form-control" + applyErrorClass('tax')} name="tax" type="text" value={values.tax} onChange={handleInputChange} disabled />
                        </div>
                        <div className="col-sm-4 col-12">
                          <label htmlFor="review">Review</label>
                          <input className={"form-control" + applyErrorClass('review')} name="review" type="text" value={values.review} onChange={handleInputChange} disabled={values.bookingStatus == "Completed" ? false : true} />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-4 col-12">
                          <label htmlFor="rating">Rating</label>
                          <select name="paymentStatus" value={values.paymentStatus} onChange={handleInputChange} className="form-control" disabled={values.bookingStatus == "Completed" ? false : true}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                        </div>
                        <div className="col-sm-4 col-12">
                          <label htmlFor="duration">Duration</label>
                          <input className={"form-control" + applyErrorClass('duration')} name="duration" type="text" value={values.duration} onChange={handleInputChange} disabled />
                        </div>
                        <div className="col-sm-4 col-12">
                          <label htmlFor="appointmentTime">Appointment Time</label>
                          <input className={"form-control" + applyErrorClass('appointmentTime')} name="appointmentTime" type="text" value={values.appointmentTime} onChange={handleInputChange} disabled />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-4 col-12">
                          <label htmlFor="userServices">UserServices</label>
                          <input className={"form-control" + applyErrorClass('userServices')} name="userServices" type="text" value={values.userServices} onChange={handleInputChange} disabled />
                        </div>
                        <div className="col-sm-4 col-12">
                          <label htmlFor="paymentPlace">PaymentPlace</label>
                          <input className={"form-control" + applyErrorClass('paymentPlace')} name="paymentPlace" type="text" value={values.paymentPlace} onChange={handleInputChange} disabled />
                        </div>
                      </div>
                      <button className="btn btn-primary" type="submit">Update Now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div></div></div>
        <Footer></Footer>
      </div>
    )
  }