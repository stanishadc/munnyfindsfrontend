import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import OwlCarousel from 'react-owl-carousel2';
export default function BusinessDetails(props) {
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
                            <h1 className="text-6 mb-1 d-flex flex-wrap align-items-center">The Orchid Hotel <span className="ml-2 text-2" data-toggle="tooltip" data-original-title="4 Star Hotel"> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> </span> </h1>
                            <p className="opacity-8 mb-0"><i className="fas fa-map-marker-alt" /> Ashram Road, Ahmedabad, Gujarat, India.</p>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="booking-hotels.html">Hotels</a></li>
                                <li className="active">Hotel Detail</li>
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
                                <OwlCarousel options={options} >
                                    <div className="item"><a href="#"><img className="img-fluid" src="/images/brands/hotels/hotel-1.jpg" alt="Hotel photo" /></a></div>
                                    <div className="item"><a href="#"><img className="img-fluid" src="/images/brands/hotels/hotel-room-1.jpg" alt="Standard Room photo" /></a></div>
                                    <div className="item"><a href="#"><img className="img-fluid" src="/images/brands/hotels/hotel-room-2.jpg" alt="Deluxe Room photo" /></a></div>
                                    <div className="item"><a href="#"><img className="img-fluid" src="/images/brands/hotels/hotel-room-3.jpg" alt="Premium Room photo" /></a></div>
                                </OwlCarousel>
                                <p id="known-for">Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. Mediocrem qualisque in has. Enim utroque perfecto id mei, ad eam tritani labores facilisis, ullum sensibus no cum. Eius eleifend in quo. At mei alia iriure propriae.</p>
                                <div className="row">
                                    <div className="col-md-12">
                                        <h5 className="mb-4">Services</h5>
                                        <div className="accordion" id="accordionDefault">
                                            <div className="card">
                                                <div className="card-header" id="headingOne">
                                                    <h5 className="mb-0"> <a href="#" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How can I make a account?</a> </h5>
                                                </div>
                                                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionDefault">
                                                    <div className="card-body">
                                                        <div className="plans page">
                                                            <div className="table-responsive-md">
                                                                <table className="table table-hover border">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="text-3 text-left align-middle" style={{width:'70%'}}>fsdkj djsdl kjdfls</td>
                                                                            <td className="text-5 text-primary text-center align-middle"  style={{width:'10%'}}>$10</td>
                                                                            <td className="align-middle"  style={{width:'20%'}}><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Select</button></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-3 text-left align-middle" style={{width:'70%'}}>fsdkj djsdl kjdfls</td>
                                                                            <td className="text-5 text-primary text-center align-middle"  style={{width:'10%'}}>$10</td>
                                                                            <td className="align-middle"  style={{width:'20%'}}><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Select</button></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-3 text-left align-middle" style={{width:'70%'}}>fsdkj djsdl kjdfls</td>
                                                                            <td className="text-5 text-primary text-center align-middle"  style={{width:'10%'}}>$10</td>
                                                                            <td className="align-middle"  style={{width:'20%'}}><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Select</button></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="text-3 text-left align-middle" style={{width:'70%'}}>fsdkj djsdl kjdfls</td>
                                                                            <td className="text-5 text-primary text-center align-middle"  style={{width:'10%'}}>$10</td>
                                                                            <td className="align-middle"  style={{width:'20%'}}><button className="btn btn-sm btn-outline-primary shadow-none text-nowrap" type="submit">Select</button></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingTwo">
                                                    <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Is there any registration fee?</a> </h5>
                                                </div>
                                                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionDefault">
                                                    <div className="card-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-header" id="headingThree">
                                                    <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Is my account information safe?</a> </h5>
                                                </div>
                                                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionDefault">
                                                    <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <h2 id="reviews" className="text-6 mb-3 mt-2">Reviews</h2>
                                <div className="row">
                                    <div className="col-sm-4 col-md-3">
                                        <div id="review-summary" className="bg-primary text-light rounded px-2 py-4 mb-4 mb-sm-0 text-center">
                                            <div className="text-10 font-weight-600 line-height-1 d-block">4.5</div>
                                            <div className="font-weight-500 my-1">Excellent</div>
                                            <small className="d-block">Based on 245 reviews</small> </div>
                                    </div>
                                    <div className="col-sm-8 col-md-9">
                                        <div className="row">
                                            <div className="col-8 col-sm-9 col-lg-10">
                                                <div className="progress mb-3">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            <div className="col-4 col-sm-3 col-lg-2"><small className="font-weight-600 align-text-top line-height-1">Excellent</small></div>
                                        </div>
                                        {/* /row */}
                                        <div className="row">
                                            <div className="col-lg-10 col-9">
                                                <div className="progress mb-3">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-3"><small className="font-weight-600 align-text-top line-height-1">Good</small></div>
                                        </div>
                                        {/* /row */}
                                        <div className="row">
                                            <div className="col-lg-10 col-9">
                                                <div className="progress mb-3">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-3"><small className="font-weight-600 align-text-top line-height-1">Fair</small></div>
                                        </div>
                                        {/* /row */}
                                        <div className="row">
                                            <div className="col-lg-10 col-9">
                                                <div className="progress mb-3">
                                                    <div className="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-3"><small className="font-weight-600 align-text-top line-height-1">Poor</small></div>
                                        </div>
                                        {/* /row */}
                                        <div className="row">
                                            <div className="col-lg-10 col-9">
                                                <div className="progress mb-3">
                                                    <div className="progress-bar" role="progressbar" style={{ width: 0 }} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-3"><small className="font-weight-600 align-text-top line-height-1">Bad</small></div>
                                        </div>
                                        {/* /row */}
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <div className="row">
                                    <div className="col-12 col-sm-3 text-center">
                                        <div className="review-tumb bg-dark-5 text-light rounded-circle d-inline-block mb-2 text-center text-8">R</div>
                                        <p className="mb-0 line-height-1">Ruby Clinton</p>
                                        <small><em>Jan 25, 2019</em></small> </div>
                                    <div className="col-12 col-sm-9 text-center text-sm-left"> <span className="text-2"> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-muted opacity-4" /> </span>
                                        <p className="font-weight-600 mb-1">Excellent hotel with great location</p>
                                        <p>We stayed in this hotel for one night and were happy that we booked this hotel. Location is excellent and hotel has a lovely ambience . Rooms are very spacious with a decent decor. Overall experience was good.</p>
                                        <hr />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-3 text-center">
                                        <div className="review-tumb text-light rounded-circle d-inline-block mb-2 text-center text-8"> <img className="rounded-circle" alt src="images/brands/hotels/tumb.jpg" /> </div>
                                        <p className="mb-0 line-height-1">James Maxwell</p>
                                        <small><em>Dec 19, 2018</em></small> </div>
                                    <div className="col-12 col-sm-9 text-center text-sm-left"> <span className="text-2"> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> </span>
                                        <p className="font-weight-600 mb-1">Safe for Family &amp; Good service</p>
                                        <p>It was a nice experience the hotel was neat and clean. Good location nice staffs. food items specially Curry needs to be more tastier. this is my third stay in this hotel. great experience, Safe for Family.</p>
                                        <hr />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-sm-3 text-center">
                                        <div className="review-tumb bg-dark-5 text-light rounded-circle d-inline-block mb-2 text-center text-8">N</div>
                                        <p className="mb-0 line-height-1">Neil Patel</p>
                                        <small><em>Nov 03, 2018</em></small> </div>
                                    <div className="col-12 col-sm-9 text-center text-sm-left"> <span className="text-2"> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-warning" /> <i className="fas fa-star text-muted opacity-4" /> <i className="fas fa-star text-muted opacity-4" /> </span>
                                        <p className="font-weight-600 mb-1">Staff is very helpful but rooms are bit small</p>
                                        <p>Staff is very helpful and courteous but rooms are bit small, smelly and you have to share your stay with cockroaches.</p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="col-lg-4 mt-4 mt-lg-0">
                            <div className="bg-light shadow-md rounded p-3 sticky-top">
                                <p className="reviews text-center"> <span className="reviews-score px-2 py-1 rounded font-weight-600 text-light">4.5</span> <span className="font-weight-600">Excellent</span> <span className="text-black-50">(245 reviews)</span> </p>
                                <form id="bookingHotels" method="post">
                                    <div className="form-row">
                                        <div className="col-lg-6 form-group">
                                            <input id="hotelsCheckIn" type="text" className="form-control" placeholder="Check In" />
                                            <span className="icon-inside"><i className="far fa-calendar-alt" /></span> </div>
                                        <div className="col-lg-6 form-group">
                                            <input id="hotelsCheckOut" type="text" className="form-control" placeholder="Check Out" />
                                            <span className="icon-inside"><i className="far fa-calendar-alt" /></span> </div>
                                    </div>
                                    
                                    <Link className="btn btn-primary btn-block" to={"/chooseappointment"}>Book Now</Link>
                                </form>
                                <p className="text-center mt-3 mb-1"><span className="text-uppercase font-weight-700">Checkin</span> : 12:00 PM / <span className="text-uppercase font-weight-700">Checkout</span> : 11:00 AM</p>
                                <p className="text-danger text-center mb-1"><i className="far fa-clock" /> Last Booked - 18 hours ago</p>
                            </div>
                        </aside>{/* Side Panel End */}
                    </div>
                </div>


            </div>

            <Footer></Footer>
        </div>
    )
}