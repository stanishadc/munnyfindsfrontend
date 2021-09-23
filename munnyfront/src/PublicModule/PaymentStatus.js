import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import moment from 'moment';
export default function PaymentStatus(props) {
    const [servicesData, setServicesData] = useState([])
    const [values, setValues] = useState([])
    const [loop, setloop] = useState(0)
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div id="content">
                <div className="container">
                    <div className="row my-5">
                        <div className="col-lg-12 text-center mt-5">
                            <p className="text-success text-16 line-height-07"><i className="fas fa-check-circle" /></p>
                            <h2 className="text-8">Congratulations</h2>
                            <p className="lead">We have received your business application.Your application status will be notified via email.</p>
                        </div></div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}