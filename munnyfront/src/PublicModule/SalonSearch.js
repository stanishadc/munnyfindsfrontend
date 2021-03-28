import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import Footer from '../CommonFiles/Footer';
import ServiceTabs from '../CommonFiles/ServiceTabs';
import HomeSlider from './HomeSlider';
import HomeContent from './HomeContent';
export default function SalonSearch(props) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div id="content">
                <div className="bg-secondary">
                    <ServiceTabs pagename="salon"></ServiceTabs>
                </div>
                <section className="container">
                    <div className="bg-light shadow-md rounded p-4">
                        <div className="row">
                            <div class="col-lg-5 mb-4 mb-lg-0">
                                <h2 className="text-4 mb-3">Search Salon Services</h2>
                                <form id="recharge-bill" method="post">
                                    <div class="form-row">
                                        <div class="col-lg-12 form-group">
                                            <select className="custom-select" id="operator" required>
                                                <option value>Select Services</option>
                                                <option>Hair</option>
                                                <option>Massage</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-lg-12 form-group">
                                            <div>
                                                <input type="text" className="form-control" id="hotelsFrom" required placeholder="Enter Locality, City" />
                                                <span className="icon-inside"><i className="fas fa-map-marker-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-lg-12 form-group">
                                            <div>
                                                <input id="hotelsCheckIn" type="text" className="form-control" required placeholder="Appointment Date" />
                                                <span className="icon-inside"><i className="far fa-calendar-alt" /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <Link className="btn btn-primary btn-block" type="submit" to={"/business/salonslist"}>Search</Link>
                                </form>
                            </div>
                            <HomeSlider></HomeSlider>
                        </div>
                    </div>
                </section>
                <HomeContent></HomeContent>
            </div>
            <Footer></Footer>
        </div>
    )
}