import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
export default function UserAppointment(props) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>404 - Page not found</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">404 - Page Not Found</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>{/* Page Header end */}
            <div id="content">
            </div>
            <Footer></Footer>
        </div>
    )
}