import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import moment from 'moment';
import { Redirect } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
const AvailabilityFieldValues = {
    businessAvailabilityId: "0",
    businessId: "0",
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
    mondayOpeningTime: "9:00",
    tuesdayOpeningTime: "9:00",
    wednesdayOpeningTime: "9:00",
    thursdayOpeningTime: "9:00",
    fridayOpeningTime: "9:00",
    saturdayOpeningTime: "9:00",
    sundayOpeningTime: "9:00",
    mondayClosingTime: "20:00",
    tuesdayClosingTime: "20:00",
    wednesdayClosingTime: "20:00",
    thursdayClosingTime: "20:00",
    fridayClosingTime: "20:00",
    saturdayClosingTime: "20:00",
    sundayClosingTime: "20:00"
}
const appointmentFieldValues = {
    appointmentId: 0,
    appointmentNo: 0,
    startTime: moment(new Date()).format('LT'),
    endTime: moment(new Date()).add(60, 'minutes').format('LT'),
    duration: '',
    appointmentTime: moment().format('LT'),
    customerId: 0,
    businessId: 0,
    userServices: [],
    bookingStatus: 'Pending',
    paymentStatus: 'Pending',
    modeOfPayment: '',
    paymentPlace: '',
    subTotal: 0,
    discount: 0,
    total: 0,
    tax: 0,
    appointmentDate: moment(new Date()),
    startDate: moment(new Date()),
    endDate: moment(new Date()),
    createdDate: moment(new Date()),
    updatedDate: moment(new Date()),
    review: '',
    rating: 0,
    businessEmployeeId: 0,
    businessUserId: 0
}
const TimingFieldValues = {
    isOpened: 0,
    startTime: moment(new Date()).format('hh'),
    endTime: moment(new Date()).add(60, 'minutes').format('hh'),
    day: '',
    dayNo: 0
}
export default function ChooseAppointment(props) {
    const [OpenDays, setOpenDays] = useState([])
    const [Timings, setTimings] = useState([])
    const [values, setValues] = useState(JSON.parse(localStorage.getItem('userAppointmentData')))
    const [cValue, setCValue] = useState(new Date());
    const [tValue, setTValue] = useState(0);
    const [appointmentDuration, setAppointmentDuration] = useState(0);
    const [offlineDate, setOfflineDate] = useState([])
    const [servicesData, setServicesData] = useState([])
    const [loop, setloop] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)
    const [appointmentOfflineData, setAppointmentOfflineData] = useState([])
    const [businessEmployeeList, setBusinessEmployeeList] = useState([]);
    const [errors, setErrors] = useState({});
    const fetchOpeningHours = (formData) => {
        applicationAPI()
            .create(formData)
            .then((res) => {
                setTimings(res.data.intervals);
            });
    };
    const applicationAPI = (url = "https://munnyapi.azurewebsites.net/api/businessavailability/") => {
        return {
            create: newRecord => axios.post(url + "GetOpeningTimings", newRecord)
        }
    }
    async function fetchBusinessEmployee() {
        const response = await fetch("https://munnyapi.azurewebsites.net/api/BusinessEmployee/GetById/" + values.businessId);
        const json = await response.json();
        setBusinessEmployeeList(json)
        //fetchBusinessEmployee()
    }
    async function fetchOffline() {
        const response = await fetch("https://munnyapi.azurewebsites.net/api/BusinessOffline/GetById/" + values.businessId);
        const json = await response.json();
        {
            json && json.map(d =>
                setOfflineDate((de) => ([...de, new Date(d.offlineDate)]))
            )
        }
    }
    async function fetchOpeningDays() {
        const response = await fetch("https://munnyapi.azurewebsites.net/api/BusinessAvailability/GetOpeningDays/" + values.businessUserId);
        const json = await response.json();
        setOpenDays(json)
        return json;
        //setAppointmentOfflineData(json)
        //bindTimings(new Date())
        //fetchOffline()        
    };
    const isWeekday = (date: Date) => {
        const day = date.getDay()
        const length = OpenDays.length;
        if (length == 1) {
            return day !== OpenDays[0];
        }
        else if (length == 2) {
            return day !== OpenDays[0] && day !== OpenDays[1];
        }
        else if (length == 3) {
            return day !== OpenDays[0] && day !== OpenDays[1] && day !== OpenDays[2];
        }
        else if (length == 4) {
            return day !== OpenDays[0] && day !== OpenDays[1] && day !== OpenDays[2] && day !== OpenDays[3];
        }
        else if (length == 5) {
            return day !== OpenDays[0] && day !== OpenDays[1] && day !== OpenDays[2] && day !== OpenDays[3] && day !== OpenDays[4];
        }
        else if (length == 6) {
            return day !== OpenDays[0] && day !== OpenDays[1] && day !== OpenDays[2] && day !== OpenDays[3] && day !== OpenDays[4] && day !== OpenDays[5];
        }
    };
    function movetoCart() {
        if (tValue == undefined) {
            alert("Please Select Time");
        }
        else if (values.businessEmployeeId === undefined) {
            alert("Please select Employee");
        }
        else {
            appointmentFieldValues.appointmentDate = moment(cValue);
            appointmentFieldValues.customerId = localStorage.getItem('MFFUserId');
            appointmentFieldValues.businessId = values.businessId;
            appointmentFieldValues.businessName = values.businessName;
            appointmentFieldValues.bookingStatus = 'Pending';
            appointmentFieldValues.paymentStatus = 'Pending';
            appointmentFieldValues.modeOfPayment = 'Cash';
            appointmentFieldValues.subTotal = totalAmount;
            appointmentFieldValues.tax = 0;
            appointmentFieldValues.total = totalAmount;
            appointmentFieldValues.discount = 0;
            appointmentFieldValues.appointmentTime = tValue
            appointmentFieldValues.startTime = tValue
            appointmentFieldValues.endTime = (Number(tValue) + 1)
            appointmentFieldValues.startDate = moment(cValue).format();
            appointmentFieldValues.userServices = values.userServices;
            appointmentFieldValues.duration = appointmentDuration;
            appointmentFieldValues.businessEmployeeId = values.businessEmployeeId;
            appointmentFieldValues.businessUserId = values.businessUserId;
            localStorage.setItem('userAppointmentData', JSON.stringify(appointmentFieldValues));
            props.history.push({
                pathname: '/appointmentsummary'
            })
        }
    }
    function getTime() {
        return (
            <select className="form-control-time" value={tValue} onChange={handleTimeChange}>
                {Timings.map((value, index) => {
                    return <option value={value}>{value}</option>
                })}
            </select>
        )
    }
    const handleTimeChange = e => {
        setTValue(e.target.value);
    }
    const handleDateChange = (newdate) => {
        const formData = new FormData()
        formData.append('searchDate', moment(newdate).format('LL'))
        formData.append('businessUserId', values.businessUserId)
        fetchOpeningHours(formData);
        setCValue(newdate);
        getTime();
        //bindTimings(newdate);
    }
    function bindTimings(sdate) {
        var duration = 30;//initialFieldValues.duration;        
        var starttime = "9";//OpenTimings.startTime;
        var endtime = 20;//OpenTimings.endTime;
        var todayee = new Date();
        var ap = ['AM', 'PM']; // AM-PM
        var times = []; // time array
        var x = Number(duration); //minutes interval
        var tt;
        var today = new Date();
        var todaydate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var selecteddate = sdate.getFullYear() + '-' + (sdate.getMonth() + 1) + '-' + sdate.getDate();
        if (todaydate == selecteddate) {
            if (starttime < todayee.getHours()) {
                tt = (60 * Number(todayee.getHours() + 1));
            }
            else {
                tt = (60 * Number(starttime));
            }
        }
        else {
            tt = (60 * Number(starttime));
        }

        for (var i = 0; tt < Number(Number(endtime)) * 60; i++) {
            var hh = Math.floor(tt / 60);
            var mm = (tt % 60);
            times[i] = ("" + ((hh == 12) ? 12 : hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)];
            //times[i] = ("" + ((hh == 24) ? 24 : hh % 24)).slice(-2);
            tt = tt + x;
        }
        {
            const filteredItems = appointmentOfflineData.filter(book => moment(book.startDate).format('MM/DD/yyyy') === moment(sdate).format('MM/DD/yyyy'))
            if (filteredItems.length > 0) {
                filteredItems.map(b => {
                    setTValue(times[0])
                    setTimings(times.filter(item => item !== b.startTime));
                })
            }
            else {
                setTValue(times[0])
                setTimings(times)
            }
        }
        setAppointmentDuration(duration);
        getTime();
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const applyErrorClass = (field) =>
        field in errors && errors[field] === false ? " form-control-danger" : "";
    useEffect(() => {
        if (localStorage.getItem('userAppointmentData') === undefined) {
            return (<Redirect to={"/"} />);
        }
        else {
            console.log(JSON.parse(localStorage.getItem('userAppointmentData')))
            if (loop === 0) {
                setloop(1);
                setServicesData(values.userServices)
                const formData = new FormData()
                formData.append('searchDate', moment(new Date()).format('LL'))
                formData.append('businessUserId', values.businessUserId)
                fetchOpeningHours(formData);
                fetchOpeningDays();
                //fetchAppointment();
                setTotalAmount(values.total)
                fetchBusinessEmployee();
            }
        }
    }, []);
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div id="content">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-11 mx-auto">
                            <div className="row widget-steps">
                                <div className="col-3 step active">
                                    <div className="step-name">Appointment</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/chooseappointment"} className="step-dot" />
                                </div>
                                <div className="col-3 step disabled">
                                    <div className="step-name">Summary</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/appointmentsummary"} className="step-dot" />
                                </div>
                                <div className="col-3 step">
                                    <div className="step-name">Payment</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/makepayment"} className="step-dot" />
                                </div>
                                <div className="col-3 step disabled">
                                    <div className="step-name">Done</div>
                                    <div className="progress"><div className="progress-bar" /></div>
                                    <Link to={"/appointmentconfirmation"} className="step-dot" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center mt-5">
                            <h2 className="text-8">Choose Appointment Date and Time</h2>
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-5 mx-auto">
                            <div className="bg-white shadow-sm rounded p-3 p-sm-4 mb-0 mb-sm-4">
                                <div className="row">
                                    <table className="table">
                                        <thead>
                                            <th>ServiceName</th>
                                            <th>Duration</th>
                                            <th>Price</th>
                                            <th></th>
                                        </thead>
                                        <tbody>
                                            {servicesData && servicesData.map(cart =>
                                                <tr Key={cart.servicePriceId}>
                                                    <td>{cart.servicePriceName}</td>
                                                    <td>{cart.duration}</td>
                                                    <td>{cart.price}</td>
                                                    <td></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-md-5">
                                        <label className="text-muted mb-0 mb-sm-3">Select Employee :</label>
                                    </div>

                                    <div class="col-12 col-md-7">
                                        <select className={"form-control text-muted mb-0 mb-sm-3" + applyErrorClass('businessEmployeeId')} value={values.businessEmployeeId} name="businessEmployeeId" onChange={handleInputChange}>
                                            <option value="0">Select Employee</option>
                                            {businessEmployeeList.map(data =>
                                                <option value={data.businessEmployeeId}>{data.name}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-md-5">
                                        <label className="text-muted mb-0 mb-sm-3">Appointment Date :</label>
                                    </div>
                                    <div class="col-12 col-md-7">
                                        <DatePicker filterDate={isWeekday} selected={cValue} onChange={date => handleDateChange(date)} inline minDate={new Date()} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12 col-md-7">
                                        <label className="text-muted mb-0 mb-sm-3">Time :</label>
                                    </div>

                                    <div class="col-12 col-md-5">
                                        <span className="col-sm text-sm-right font-weight-500">{getTime()}</span>
                                    </div>
                                </div>
                                <div className="bg-light-4 rounded p-3">
                                    <div className="row">
                                        <div className="col-sm text-3 font-weight-600">Payment Amount</div>
                                        <div className="col-sm text-sm-right text-5 font-weight-500">{totalAmount}</div>
                                    </div>
                                </div>
                                {/* <p className="text-center my-4"><a className="btn-link" data-toggle="collapse" href="#couponCode" aria-expanded="false" aria-controls="couponCode">Apply a Coupon Code</a></p>
                                <div id="couponCode" className="bg-light-3 p-4 rounded collapse">
                                    <h3 className="text-4">Coupon Code</h3>
                                    <div className="input-group form-group mb-0">
                                        <input className="form-control" placeholder="Coupon Code" aria-label="Promo Code" type="text" />
                                        <span className="input-group-append">
                                            <button className="btn btn-secondary" type="submit">APPLY</button>
                                        </span> </div>
                                </div> */}
                                <p className="mt-4 mb-0">
                                    <button className="btn btn-primary btn-block" onClick={movetoCart}>Proceed to checkout</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}