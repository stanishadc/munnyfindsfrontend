import React from 'react';
import Footer from './Footer';
import Header from './Header';
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
                        <aside className="col-lg-3">
                            <div className="bg-light shadow-md rounded p-3">
                                <h3 className="text-5">Filter</h3>
                                <div className="accordion accordion-alternate style-2" id="toggleAlternate">
                                    <div className="card">
                                        <div className="card-header" id="hotelName">
                                            <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#togglehotelName" aria-expanded="true" aria-controls="togglehotelName">Salon Name</a> </h5>
                                        </div>
                                        <div id="togglehotelName" className="collapse show" aria-labelledby="hotelName">
                                            <div className="card-body">
                                                <div className="form-row">
                                                    <div className="col-md-12 col-lg form-group mb-0">
                                                        <input type="text" className="form-control form-control-sm" id="searchHotel" placeholder="Search by Hotel Name" />
                                                        <span className="icon-inside"><i className="fas fa-search" /></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="price">
                                            <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#togglePrice" aria-expanded="true" aria-controls="togglePrice">Price</a> </h5>
                                        </div>
                                        <div id="togglePrice" className="collapse show" aria-labelledby="price">
                                            <div className="card-body">
                                                <p>
                                                    <input id="amount" type="text" readOnly className="form-control border-0 bg-transparent p-0" />
                                                </p>
                                                <div id="slider-range" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="propertyTypes">
                                            <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#togglepropertyTypes" aria-expanded="true" aria-controls="togglepropertyTypes">Categories</a> </h5>
                                        </div>
                                        <div id="togglepropertyTypes" className="collapse show" aria-labelledby="propertyTypes">
                                            <div className="card-body">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="hotel" name="propertyTypes" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="hotel">Hotel <small className="text-muted float-right">250</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="resort" name="propertyTypes" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="resort">Resort <small className="text-muted float-right">76</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="villa" name="propertyTypes" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="villa">Villa <small className="text-muted float-right">31</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="heritage" name="propertyTypes" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="heritage">Heritage <small className="text-muted float-right">12</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="motel" name="propertyTypes" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="motel">Motel <small className="text-muted float-right">5</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="guestHouse" name="propertyTypes" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="guestHouse">Guest House <small className="text-muted float-right">107</small></label>                    </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="farmHouse" name="propertyTypes" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="farmHouse">Farm House <small className="text-muted float-right">66</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="palace" name="propertyTypes" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="palace">Palace <small className="text-muted float-right">18</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="sercicedApartments" name="propertyTypes" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="sercicedApartments">Serviced Apartments <small className="text-muted float-right">41</small></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="starCategory">
                                            <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#togglestarCategory" aria-expanded="true" aria-controls="togglestarCategory">Star Category</a> </h5>
                                        </div>
                                        <div id="togglestarCategory" className="collapse show" aria-labelledby="starCategory">
                                            <div className="card-body">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="5Star" name="starCategory" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="5Star">5 Star <i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /> <small className="text-muted float-right">512</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="4Star" name="starCategory" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="4Star">4 Star <i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><small className="text-muted float-right">476</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="3Star" name="starCategory" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="3Star">3 Star <i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /> <small className="text-muted float-right">176</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="2Star" name="starCategory" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="2Star">2 Star <i className="fas fa-star text-warning" /><i className="fas fa-star text-warning" /> <small className="text-muted float-right">231</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="1Star" name="starCategory" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="1Star">1 Star <i className="fas fa-star text-warning" /> <small className="text-muted float-right">5</small></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="userReview">
                                            <h5 className="mb-0"> <a href="#" className="collapse" data-toggle="collapse" data-target="#toggleuserReview" aria-expanded="true" aria-controls="toggleuserReview">User Review</a> </h5>
                                        </div>
                                        <div id="toggleuserReview" className="collapse show" aria-labelledby="userReview">
                                            <div className="card-body">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="excellent" name="userReview" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="excellent">Excellent <small className="text-muted float-right">499</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="good" name="userReview" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="good">Good <small className="text-muted float-right">310</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="fair" name="userReview" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="fair">Fair <small className="text-muted float-right">225</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="poor" name="userReview" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="poor">Poor <small className="text-muted float-right">110</small></label>
                                                </div>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" id="bad" name="userReview" className="custom-control-input" />
                                                    <label className="custom-control-label d-block" htmlFor="bad">Bad <small className="text-muted float-right">44</small></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <div className="col-lg-9 mt-4 mt-lg-0">
                            <div className="border-bottom mb-3 pb-3">
                                <div className="row align-items-center">
                                    <div className="col-6 col-md-8">
                                        <span className="mr-3"><span className="text-4">Ahmedabad:</span> <span className="font-weight-600">860 Salons</span> found</span> <span className="text-warning text-nowrap">Prices inclusive of taxes</span></div>
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
                                            <a href="#"><img src="images/brands/hotels/hotel-1.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">The Orchid Hotel</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50"><i className="fas fa-map-marker-alt" /> Ashram Road, Ahmedabad</span>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                    <span className="cf border rounded-pill text-1 px-2">Couple Friendly</span>
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">8.2</span> <span className="font-weight-600">Excellent</span> <a className="text-black-50" href="#">(245 reviews)</a>
                                                </p>
                                                <p className="text-danger mb-0">Last Booked - 18 hours ago</p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-7 font-weight-500 mr-2 mr-lg-3">$210</div>
                                                <div className="d-block text-3 text-black-50 mr-2 mr-lg-3"><del className="d-block">$250</del></div>
                                                <div className="text-success text-3">16% Off!</div>
                                                <a href="#" className="btn btn-sm btn-primary ml-auto">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src="images/brands/hotels/hotel-2.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">Whistling Meadows Resort</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50"><i className="fas fa-map-marker-alt" /> SG Highway, Ahmedabad</span>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span className="disabled" data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                    <span className="cf border rounded-pill text-1 px-2">Couple Friendly</span>
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">9.6</span> <span className="font-weight-600">Excellent</span> <a className="text-black-50" href="#">(1206 reviews)</a>
                                                </p>
                                                <p className="text-danger mb-0">Last Booked - 9 hours ago</p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-7 font-weight-500 mr-2 mr-lg-3">$675</div>
                                                <div className="d-block text-3 text-black-50 mr-2 mr-lg-3"><del className="d-block">$900</del></div>
                                                <div className="text-success text-3">25% Off!</div>
                                                <a href="#" className="btn btn-sm btn-primary ml-auto">Book Now</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src="images/brands/hotels/hotel-3.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">Radisson Blu Hotel</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50"><i className="fas fa-map-marker-alt" /> Electronic City, Ahmedabad</span>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span className="disabled" data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span className="disabled" data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                    <span className="cf border rounded-pill text-1 px-2">Couple Friendly</span>
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">7.0</span> <span className="font-weight-600">Good</span> <a className="text-black-50" href="#">(420 reviews)</a>
                                                </p>
                                                <p className="text-danger mb-0">Last Booked - 2 days ago</p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-7 font-weight-500 mr-2 mr-lg-3">$280</div>
                                                <div className="d-block text-3 text-black-50 mr-2 mr-lg-3"><del className="d-block">$350</del></div>
                                                <div className="text-success text-3">20% Off!</div>
                                                <a href="#" className="btn btn-sm btn-primary ml-auto">Book Now</a> </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src="images/brands/hotels/hotel-4.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">The Lotus Hotel</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50"><i className="fas fa-map-marker-alt" /> Airport Zone, Ahmedabad</span>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span className="disabled" data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span className="disabled" data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span className="disabled" data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span className="disabled" data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">8.7</span> <span className="font-weight-600">Excellent</span> <a className="text-black-50" href="#">(328 reviews)</a>
                                                </p>
                                                <p className="text-danger mb-0">Last Booked - 1 week ago</p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-7 font-weight-500 mr-2 mr-lg-3">$412</div>
                                                <div className="d-block text-3 text-black-50 mr-3"><del className="d-block">$475</del></div>
                                                <div className="text-success text-3">10% Off!</div>
                                                <a href="#" className="btn btn-sm btn-primary ml-auto">Book Now</a> </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src="images/brands/hotels/hotel-5.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">Eulogia Central Resort</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50"><i className="fas fa-map-marker-alt" /> Sanad Highway, Ahmedabad</span>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span className="disabled" data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                    <span className="cf border rounded-pill text-1 px-2">Couple Friendly</span>
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">9.5</span> <span className="font-weight-600">Excellent</span> <a className="text-black-50" href="#">(444 reviews)</a>
                                                </p>
                                                <p className="text-danger mb-0">Last Booked - 5 hours ago</p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-7 font-weight-500 mr-2 mr-lg-3">$721</div>
                                                <div className="d-block text-3 text-black-50 mr-2 mr-lg-3"><del className="d-block">$820</del></div>
                                                <div className="text-success text-3">12% Off!</div>
                                                <a href="#" className="btn btn-sm btn-primary ml-auto">Book Now</a> </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src="images/brands/hotels/hotel-6.jpg" className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">Fortune Hotel Landmark</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                        <i className="fas fa-star text-warning" />
                                                    </span>
                                                    <span className="text-black-50"><i className="fas fa-map-marker-alt" /> Drive Inn Road, Ahmedabad</span>
                                                </p>
                                                <p className="hotels-amenities d-flex align-items-center mb-2 text-4">
                                                    <span data-toggle="tooltip" data-original-title="Internet/Wi-Fi"><i className="fas fa-wifi" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Restaurant"><i className="fas fa-utensils" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Bar"><i className="fas fa-glass-martini" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Swimming Pool"><i className="fas fa-swimmer" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Business Facilities"><i className="fas fa-chalkboard-teacher" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Spa"><i className="fas fa-spa" /></span>
                                                    <span data-toggle="tooltip" data-original-title="Gym"><i className="fas fa-dumbbell" /></span>
                                                    <span className="cf border rounded-pill text-1 px-2">Couple Friendly</span>
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">8.0</span> <span className="font-weight-600">Excellent</span> <a className="text-black-50" href="#">(180 reviews)</a>
                                                </p>
                                                <p className="text-danger mb-0">Last Booked - 48 min ago</p>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="text-dark text-7 font-weight-500 mr-2 mr-lg-3">$326</div>
                                                <div className="d-block text-3 text-black-50 mr-2 mr-lg-3"><del className="d-block">$430</del></div>
                                                <div className="text-success text-3">24% Off!</div>
                                                <a href="#" className="btn btn-sm btn-primary ml-auto">Book Now</a> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="pagination justify-content-center mt-3">
                                <li className="page-item disabled"> <a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></a> </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active"> <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a> </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"> <a className="page-link" href="#"><i className="fas fa-angle-right" /></a> </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        <Footer></Footer></div>
    )
}