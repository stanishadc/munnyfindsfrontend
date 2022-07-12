import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import OwlCarousel from 'react-owl-carousel2';
import StarRatings from 'react-star-ratings';
import moment from 'moment';
const appointmentFieldValues = {
    appointmentId: 0,
    appointmentNo: 0,
    startTime: moment(new Date()).format('LT'),
    endTime: moment(new Date()).add(60, 'minutes').format('LT'),
    duration: '',
    appointmentTime: moment().format('LT'),
    customerId: 0,
    customerName: '',
    businesssId: 0,
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
    businessName: '',
    businessTypeName: ''
}
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
    businessurl: ''
}
const selectedServices = {
    servicePriceId: 0,
    servicePriceName: '',
    duration: '',
    servicePrice: 0
}
export default function BusinessDetails(props) {
    const [values, setValues] = useState(initialFieldValues)
    const [reviewList, setReviewList] = useState([])
    const [businessImagesList, setBusinessImagesList] = useState([])
    const [servicesList, setServicesList] = useState([])
    const [itemSelected, setItemSelected] = useState([])
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const applicationAPI = () => {
        return {
            fetchBusinessDetails: () => axios.get('https://munnyapi.azurewebsites.net/api/business/GetByURL/' + props.match.params["businessurl"]),
            fetchBusinessImages: (id) => axios.get('https://munnyapi.azurewebsites.net/api/BusinessImages/GetByBusiness/' + id),
            fetchServices: (id) => axios.get('https://munnyapi.azurewebsites.net/api/ServicePrice/GetByBusinessId/' + id),
            fetchReviews: (id) => axios.get('https://munnyapi.azurewebsites.net/api/appointments/GetByBusinessId/' + id),
        }
    }
    function refreshBusinessList() {
        applicationAPI().fetchBusinessDetails()
            .then(res =>
            (
                setValues(res.data[0]),
                console.log(res.data[0]),
                refreshBusinessImagesList(res.data[0].businessId),
                refreshServiceList(res.data[0].businessId),
                refreshReviewsList(res.data[0].businessId)
            ))
            .catch(err => console.log(err))
    }
    function refreshBusinessImagesList(id) {
        applicationAPI().fetchBusinessImages(id)
            .then(res => setBusinessImagesList(res.data))
            .catch(err => console.log(err))
    }
    function refreshServiceList(id) {
        applicationAPI().fetchServices(id)
            .then(res => (setServicesList(res.data),
                console.log(res.data)))
            .catch(err => console.log(err))
    }
    function refreshReviewsList(id) {
        applicationAPI().fetchReviews(id)
            .then(res => setReviewList(res.data))
            .catch(err => console.log(err))
    }
    function AddToCart(serviceData) {
        setCart(current => [...current, serviceData]);
        setTotal(current => current + serviceData.price);
        setItemSelected(current => [...current, serviceData.servicePriceId]);
    }
    function RemoveFromCart(serviceData) {
        setItemSelected(itemSelected.filter(item => item.servicePriceId !== serviceData.servicePriceId))
        setCart(cart.filter(item => item.servicePriceId !== serviceData.servicePriceId))
        setTotal(current => current - serviceData.price);
    }
    function movetoCart() {
        if (total != "0") {
            appointmentFieldValues.total = total;
            appointmentFieldValues.userServices = cart;
            appointmentFieldValues.businessId = values.businessId;
            appointmentFieldValues.businessName = values.businessName;
            localStorage.setItem('userAppointmentData', JSON.stringify(appointmentFieldValues));
            props.history.push({
                pathname: '/chooseappointment'
            })
        }
        else {
            alert("Please select service. your cart is empty");
        }
    }
    useEffect(() => {
        refreshBusinessList();
    }, [])
    const options = {
        items: 1,
        nav: false,
        rewind: true,
        autoplay: true
    };
    return (
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="text-6 mb-1 d-flex flex-wrap align-items-center">{values.businessName} <span className="ml-2 text-2" data-toggle="tooltip" data-original-title="4 Star Hotel"><StarRatings rating={values.rating} starDimension="20px" starSpacing="1px" starRatedColor="#8FCD2E" /></span> </h1>
                            <p className="opacity-8 mb-0"><i className="fas fa-map-marker-alt" /> {values.location}, {values.city}, {values.country}</p>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/businesslist"}>Business</Link></li>
                                <li className="active">Business Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bg-light shadow-md rounded p-3 p-sm-4 confirm-details">
                                {businessImagesList.length > 0 &&
                                    <OwlCarousel options={options} >
                                        {businessImagesList.map(businessimage =>
                                            <div className="item"><a href="#"><img className="img-fluid" src={businessimage.imageSrc} alt="Hotel photo" /></a></div>
                                        )}
                                    </OwlCarousel>
                                }
                                <p id="known-for">{values.about}</p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h5 className="mb-4">Services</h5>
                                        <div className="accordion" id="accordionDefault">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0"> <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Our Services</a> </h5>
                                                </div>
                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionDefault">
                                                    <div className="card-body">
                                                        <div className="plans page">
                                                            <div className="table-responsive-md">
                                                                <table className="table table-hover border">
                                                                    <tbody>
                                                                        {servicesList.map(services =>
                                                                            <tr>
                                                                                <td className="text-2 text-left align-middle" style={{ width: '50%' }}>{services.servicePriceName}</td>
                                                                                <td className="text-2 text-primary text-center align-middle" style={{ width: '20%' }}>{services.duration} Duration</td>
                                                                                <td className="text-2 text-primary text-center align-middle" style={{ width: '10%' }}>${services.price}</td>
                                                                                <td className="align-middle" style={{ width: '20%' }}><button className="btn btn-sm btn-primary shadow-none text-nowrap" type="button" disabled={itemSelected.indexOf(services.servicePriceId) !== -1} onClick={() => { AddToCart(services) }}>{itemSelected.indexOf(services.servicePriceId) !== -1 ? "Selected" : "Select"}</button></td>
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
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <h2 id="reviews" className="text-6 mb-3 mt-2">Reviews</h2>
                                {reviewList && reviewList.filter(customer => customer.rating > 0).map(customer =>
                                    <div className="row">
                                        <div className="col-12 col-sm-3 text-center">
                                            <div className="review-tumb bg-dark-5 text-light rounded-circle d-inline-block mb-2 text-center text-8">R</div>
                                            <p className="mb-0 line-height-1">{customer.customer.customerName}</p>
                                            <small><em>{moment(customer.updatedDate).format('MMMM Do YYYY')}</em></small>
                                        </div>
                                        <div
                                            className="col-12 col-sm-9 text-center text-sm-left"> <span className="text-2">  <StarRatings rating={customer.rating} starDimension="20px" starSpacing="1px" starRatedColor="#8FCD2E" />  </span>
                                            <p className="font-weight-600 mb-1">{customer.review}</p>                                            
                                            <hr />
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                        <aside className="col-lg-4 mt-4 mt-lg-0">
                            <div className="bg-light shadow-md rounded p-3 sticky-top">
                                <h5 className="mb-4">Order Summary</h5>
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Duration</th>
                                            <th>Price</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map(services =>
                                            <tr>
                                                <td className="text-2 text-left align-middle" style={{ width: '50%' }}>{services.servicePriceName}</td>
                                                <td className="text-2 text-primary text-center align-middle" style={{ width: '20%' }}>{services.duration}</td>
                                                <td className="text-2 text-primary text-center align-middle" style={{ width: '10%' }}>${services.price}</td>
                                                <td className="align-middle" style={{ width: '20%' }}>
                                                    <button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="button" onClick={() => { RemoveFromCart(services) }}><i class="fas fa-trash-alt"></i></button></td>
                                            </tr>
                                        )}
                                    </tbody>
                                    <tfoot>
                                        <tr><td></td><td></td><td><b>Total</b></td><td><b>$ {total}</b></td></tr>
                                    </tfoot>
                                </table>
                                {/* <Link className="btn btn-primary btn-block" to={{ pathname: '/chooseappointment', cartData: { appointmentData: cart,totalAmount:total}}}>Book Now</Link> */}
                                <Link className="btn btn-primary btn-block" onClick={() => movetoCart()}>Book Now</Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}