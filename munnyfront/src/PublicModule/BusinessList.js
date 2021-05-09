import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
export default function BusinessList(props) {
    const [businessList, setBusinessList] = useState([])
    const applicationAPI = (url = "https://munnyapi.azurewebsites.net/api/business/") => {
        return {
            fetchAll: () => axios.get(url + 'GetListByType/'+ props.match.params["businesstype"])
        }
    }
    function refreshBusinessList() {
        applicationAPI().fetchAll()
            .then(res => setBusinessList(res.data))
            .catch(err => console.log(err))
        
    }
    useEffect(() => {
        refreshBusinessList();
    }, [])
    return (
               
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>{props.match.params["businesstype"]}</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="booking-hotels.html">Business</a></li>
                                <li className="active">{props.match.params["businesstype"]} List</li>
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
                                    <div className="col-12 col-md-6 mb-2">
                                        <div className="row no-gutters ml-auto">
                                            <label className="col-form-label-sm text-left mr-2 mb-0" htmlFor="input-sort">Search by Venue :</label>
                                            <select id="input-sort" className="custom-select custom-select-sm col">
                                                <option value selected="selected">Popularity</option>
                                                <option value>Price - Low to High</option>
                                                <option value>Price - High to Low</option>
                                                <option value>User Rating - High to Low</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 mb-2">
                                        <div className="row no-gutters ml-auto">
                                            <label className="col-form-label-sm text-right mr-2 mb-0" htmlFor="input-sort">Sort By :</label>
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
                                {businessList.map(bus=>
                                    <div className="col-md-6">
                                        <div className="card shadow-md border-0 mb-4">
                                            <a href="#"><img src={bus.imageSrc} className="card-img-top d-block" alt="..." /></a>
                                            <div className="card-body">
                                                <h5><a href="#" className="text-dark text-5">{bus.businessName}</a></h5>
                                                <p className="mb-2">
                                                    <span className="mr-2">
                                                    <StarRatings rating={bus.rating} starDimension="20px" starSpacing="1px" starRatedColor="#8FCD2E"/>
                                                    </span>
                                                    <span className="text-black-50 mr-2"><i className="fas fa-map-marker-alt" /> {bus.location}, {bus.city}</span>                                                    
                                                </p>
                                                <p className="reviews mb-2">
                                                    <span className="reviews-score px-2 py-1 mr-1 rounded font-weight-600 text-light">{bus.rating}</span><span className="text-black-50" href="#">({bus.totalRatings} reviews)</span>
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
                                                <Link to={"/businessdetails/"+bus.businessUrl} className="btn btn-sm btn-primary ml-auto">Go to venue</Link>
                                            </div>
                                            <div className="card-footer bg-transparent d-flex align-items-center">
                                                <div className="accordion" id="accordionDefault" style={{ width: '100%' }}>
                                                    <div className="card">
                                                        <div className="card-header" id="headingTwo">
                                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">About Venue</a></h5>
                                                        </div>
                                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionDefault">
                                                            <div className="card-body">{bus.about}
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
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer></div>
    )
}