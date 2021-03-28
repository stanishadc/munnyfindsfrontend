import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import BusinessSidebar from './BusinessSidebar';
export default function CompletedAppointments(props) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Business Profile</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><Link to={"/"}>Home</Link></li>
                                <li className="active">Business Profile</li>
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
                                <h4 className="mb-4">Completed Appointments</h4>
                                <hr className="mx-n4" />
                                <div className="tab-content my-3" id="myTabContent">
                                    <div className="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                                        <div className="table-responsive-md">
                                            <table className="table table-hover border">
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Description</th>
                                                        <th>Order ID</th>
                                                        <th className="text-center">Status</th>
                                                        <th className="text-right">Amount</th>
                                                        <th className="text-center" />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="align-middle">06/06/2018</td>
                                                        <td className="align-middle"><img src="images/brands/operator/vodafone.jpg" className="img-thumbnail d-inline-flex mr-1" /> <span className="text-1 d-inline-flex">Recharge of Vodafone Mobile 9696969696</span></td>
                                                        <td className="align-middle">5286977475</td>
                                                        <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-success" data-toggle="tooltip" data-original-title="Your order is Successful" /></td>
                                                        <td className="align-middle text-right">$150</td>
                                                        <td className="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Repeat Order"><i className="fas fa-redo-alt" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle">02/06/2018</td>
                                                        <td className="align-middle"><img src="images/brands/flights/indigo.png" className="img-thumbnail d-inline-flex mr-1" /> <span className="text-1 d-inline-flex">Booking of Delhi to Sydney flight</span></td>
                                                        <td className="align-middle">5136907172</td>
                                                        <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-success" data-toggle="tooltip" data-original-title="Your order is Successful" /></td>
                                                        <td className="align-middle text-right">$980</td>
                                                        <td className="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Repeat Order"><i className="fas fa-redo-alt" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle">31/05/2018</td>
                                                        <td className="align-middle"><img src="images/brands/operator/vodafone.jpg" className="img-thumbnail d-inline-flex mr-1" /> <span className="text-1 d-inline-flex">Bill Payment of Vodafone Mobile 9898989898</span></td>
                                                        <td className="align-middle">1072317951</td>
                                                        <td className="align-middle text-center"><i className="fas fa-ellipsis-h text-4 text-info" data-toggle="tooltip" data-original-title="Your order is in Progress" /></td>
                                                        <td className="align-middle text-right">$99</td>
                                                        <td className="align-middle text-center" />
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle">25/05/2018</td>
                                                        <td><div className="d-lg-flex align-items-center"> <span className="img-thumbnail d-inline-flex text-8 p-2 mr-2"><i className="fas fa-bus" /></span> <span className="text-1 d-inline-flex">Booking of Mumbai to Surat Bus</span> </div></td>
                                                        <td className="align-middle">4103520927</td>
                                                        <td className="align-middle text-center"><i className="fas fa-check-circle text-4 text-success" data-toggle="tooltip" data-original-title="Your order is Successful" /></td>
                                                        <td className="align-middle text-right">$450</td>
                                                        <td className="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Repeat Order"><i className="fas fa-redo-alt" /></a></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="align-middle">21/05/2018</td>
                                                        <td className="align-middle"><img src="images/brands/operator/vodafone.jpg" className="img-thumbnail d-inline-flex mr-1" /> <span className="text-1 d-inline-flex">Recharge of Vodafone Mobile 9898989898</span></td>
                                                        <td className="align-middle">3079317986</td>
                                                        <td className="align-middle text-center"><i className="fas fa-times-circle text-4 text-danger" data-toggle="tooltip" data-original-title="Your order is Failed" /></td>
                                                        <td className="align-middle text-right">$280</td>
                                                        <td className="align-middle text-center"><a href="#" data-toggle="tooltip" data-original-title="Retry Order"><i className="fas fa-redo-alt " /></a></td>
                                                    </tr>
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
            <Footer></Footer>
        </div>
    )
}