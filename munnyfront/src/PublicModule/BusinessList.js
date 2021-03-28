import React from 'react';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import { Link } from 'react-router-dom';
export default function BusinessList(props) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Salons</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="booking-hotels.html">Business</a></li>
                                <li className="active">Salons List</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <section className="container">
                    <div className="row">
                        <div className="col-lg-12 mt-4 mt-lg-0">
                            <div className="border-bottom mb-3 pb-3">
                                <div className="row align-items-center">
                                    <div className="col-6 col-md-8">
                                        <div className="row no-gutters ml-auto">
                                            <label className="col-form-label-sm text-left mr-2 mb-0" htmlFor="input-sort">Search by Venue:</label>
                                            <select id="input-sort" className="custom-select custom-select-sm col">
                                                <option value selected="selected">Popularity</option>
                                                <option value>Price - Low to High</option>
                                                <option value>Price - High to Low</option>
                                                <option value>User Rating - High to Low</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-4">
                                        <div className="row no-gutters ml-auto">
                                            <label className="col col-form-label-sm text-right mr-2 mb-0" htmlFor="input-sort">Sort By:</label>
                                            <select id="input-sort" className="custom-select custom-select-sm col">
                                                <option value selected="selected">Popularity</option>
                                                <option value>Price - Low to High</option>
                                                <option value>Price - High to Low</option>
                                                <option value>User Rating - High to Low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hotels-list">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src="/images/brands/hotels/hotel-1.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">The Orchid Hotel</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50 mr-2"><i className="fas fa-map-marker-alt" /> Ashram Road, Ahmedabad</span>                                                    
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">9.6</span> <span className="font-weight-600">Excellent</span> <a className="text-black-50" href="#">(1206 reviews)</a>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                </p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-3 font-weight-500 mr-2 mr-lg-3">Boys Hair Cutting</div>
                                                <div className="d-block text-3 text-dark font-weight-500 mr-2 mr-lg-3">- $20</div>
                                                <Link to={"/salons/abc"} className="btn btn-sm btn-primary ml-auto">Go to venue</Link>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="accordion" id="accordionDefault" style={{ width: '100%' }}>
                                                    <div className="card">
                                                        <div className="card-header" id="headingTwo">
                                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">About Venue</a></h5>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionDefault">
                                                            <div className="card-body"> 
                                                            Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. 
                                                            <h5>Timings</h5>
                                                            <table style={{width:'100%'}}>
                                                                <tr><td>Monday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                                <tr><td>Tuesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Wednesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Thursday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Friday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Saturday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Sunday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src="/images/brands/hotels/hotel-1.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">The Orchid Hotel</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50 mr-2"><i className="fas fa-map-marker-alt" /> Ashram Road, Ahmedabad</span>                                                    
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">9.6</span> <span className="font-weight-600">Excellent</span> <a className="text-black-50" href="#">(1206 reviews)</a>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                </p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-3 font-weight-500 mr-2 mr-lg-3">Boys Hair Cutting</div>
                                                <div className="d-block text-3 text-dark font-weight-500 mr-2 mr-lg-3">- $20</div>
                                                <a href="#" className="btn btn-sm btn-primary ml-auto">Go to venue</a>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="accordion" id="accordionDefault" style={{ width: '100%' }}>
                                                    <div className="card">
                                                        <div className="card-header" id="headingTwo">
                                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">About Venue</a></h5>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionDefault">
                                                            <div className="card-body"> 
                                                            Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. 
                                                            <h5>Timings</h5>
                                                            <table style={{width:'100%'}}>
                                                                <tr><td>Monday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                                <tr><td>Tuesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Wednesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Thursday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Friday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Saturday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Sunday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src="/images/brands/hotels/hotel-1.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">The Orchid Hotel</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50 mr-2"><i className="fas fa-map-marker-alt" /> Ashram Road, Ahmedabad</span>                                                    
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">9.6</span> <span className="font-weight-600">Excellent</span> <a className="text-black-50" href="#">(1206 reviews)</a>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                </p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-3 font-weight-500 mr-2 mr-lg-3">Boys Hair Cutting</div>
                                                <div className="d-block text-3 text-dark font-weight-500 mr-2 mr-lg-3">- $20</div>
                                                <a href="#" className="btn btn-sm btn-primary ml-auto">Go to venue</a>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="accordion" id="accordionDefault" style={{ width: '100%' }}>
                                                    <div className="card">
                                                        <div className="card-header" id="headingTwo">
                                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">About Venue</a></h5>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionDefault">
                                                            <div className="card-body"> 
                                                            Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. 
                                                            <h5>Timings</h5>
                                                            <table style={{width:'100%'}}>
                                                                <tr><td>Monday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                                <tr><td>Tuesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Wednesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Thursday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Friday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Saturday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Sunday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src="/images/brands/hotels/hotel-1.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">The Orchid Hotel</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50 mr-2"><i className="fas fa-map-marker-alt" /> Ashram Road, Ahmedabad</span>                                                    
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">9.6</span> <span className="font-weight-600">Excellent</span> <a className="text-black-50" href="#">(1206 reviews)</a>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                </p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-3 font-weight-500 mr-2 mr-lg-3">Boys Hair Cutting</div>
                                                <div className="d-block text-3 text-dark font-weight-500 mr-2 mr-lg-3">- $20</div>
                                                <a href="#" className="btn btn-sm btn-primary ml-auto">Go to venue</a>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="accordion" id="accordionDefault" style={{ width: '100%' }}>
                                                    <div className="card">
                                                        <div className="card-header" id="headingTwo">
                                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">About Venue</a></h5>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionDefault">
                                                            <div className="card-body"> 
                                                            Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. 
                                                            <h5>Timings</h5>
                                                            <table style={{width:'100%'}}>
                                                                <tr><td>Monday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                                <tr><td>Tuesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Wednesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Thursday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Friday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Saturday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Sunday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src="/images/brands/hotels/hotel-1.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">The Orchid Hotel</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50 mr-2"><i className="fas fa-map-marker-alt" /> Ashram Road, Ahmedabad</span>                                                    
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">9.6</span> <span className="font-weight-600">Excellent</span> <a className="text-black-50" href="#">(1206 reviews)</a>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                </p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-3 font-weight-500 mr-2 mr-lg-3">Boys Hair Cutting</div>
                                                <div className="d-block text-3 text-dark font-weight-500 mr-2 mr-lg-3">- $20</div>
                                                <a href="#" className="btn btn-sm btn-primary ml-auto">Go to venue</a>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="accordion" id="accordionDefault" style={{ width: '100%' }}>
                                                    <div className="card">
                                                        <div className="card-header" id="headingTwo">
                                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">About Venue</a></h5>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionDefault">
                                                            <div className="card-body"> 
                                                            Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. 
                                                            <h5>Timings</h5>
                                                            <table style={{width:'100%'}}>
                                                                <tr><td>Monday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                                <tr><td>Tuesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Wednesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Thursday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Friday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Saturday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Sunday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src="/images/brands/hotels/hotel-1.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">The Orchid Hotel</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50 mr-2"><i className="fas fa-map-marker-alt" /> Ashram Road, Ahmedabad</span>                                                    
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">9.6</span> <span className="font-weight-600">Excellent</span> <a className="text-black-50" href="#">(1206 reviews)</a>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                </p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-3 font-weight-500 mr-2 mr-lg-3">Boys Hair Cutting</div>
                                                <div className="d-block text-3 text-dark font-weight-500 mr-2 mr-lg-3">- $20</div>
                                                <a href="#" className="btn btn-sm btn-primary ml-auto">Go to venue</a>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="accordion" id="accordionDefault" style={{ width: '100%' }}>
                                                    <div className="card">
                                                        <div className="card-header" id="headingTwo">
                                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">About Venue</a></h5>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionDefault">
                                                            <div className="card-body"> 
                                                            Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. 
                                                            <h5>Timings</h5>
                                                            <table style={{width:'100%'}}>
                                                                <tr><td>Monday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                                <tr><td>Tuesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Wednesday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Thursday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Friday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Saturday</td><td>10:00 - 19:00</td><td className="text-success">Opened</td></tr>
                                                                <tr><td>Sunday</td><td>10:00 - 19:00</td><td className="text-danger">Closed</td></tr>
                                                            </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer></div>
    )
}