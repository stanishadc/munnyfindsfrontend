import React from 'react';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
export default function Support(props) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Support</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bg-light shadow-md rounded p-4">
                                <h2 className="text-6">Send a Request</h2>
                                <p>Please fill out the form below and we promise you to get back to you within a couple of hours.</p>
                                <form id="recharge-bill" method="post">
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <select className="custom-select" id="subject" required>
                                            <option value>Select Your Subject</option>
                                            <option>Recharge &amp; Bill</option>
                                            <option>Booking</option>
                                            <option>Account</option>
                                            <option>Payment</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="yourName">Your Name</label>
                                        <input type="text" className="form-control" id="yourName" required placeholder="Enter Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="yourEmail">Your Email</label>
                                        <input type="email" className="form-control" id="yourEmail" required placeholder="Enter Email Id" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobileNumber">Mobile Number</label>
                                        <input type="text" className="form-control" data-bv-field="number" id="mobileNumber" required placeholder="Enter Mobile Number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="yourProblem">Your Query</label>
                                        <textarea className="form-control" rows={5} id="yourProblem" required placeholder="Specify your query" defaultValue={""} />
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="bg-light shadow-md rounded p-4">
                                <h2 className="text-6">FAQ</h2>
                                <div className="accordion accordion-alternate" id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="heading1">
                                            <h5 className="mb-0"> <a href="#" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">How can I make a account?</a> </h5>
                                        </div>
                                        <div id="collapse1" className="collapse show" aria-labelledby="heading1" data-parent="#accordion">
                                            <div className="card-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading2">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">Is there any registration fee?</a> </h5>
                                        </div>
                                        <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
                                            <div className="card-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading3">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse3" aria-expanded="false" aria-controls="collapse3">Is my account information safe?</a> </h5>
                                        </div>
                                        <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordion">
                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading4">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">How does it work?</a> </h5>
                                        </div>
                                        <div id="collapse4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
                                            <div className="card-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading5">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">I did not receive the cashback</a> </h5>
                                        </div>
                                        <div id="collapse5" className="collapse" aria-labelledby="heading5" data-parent="#accordion">
                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading6">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">Forgot my password! What next?</a> </h5>
                                        </div>
                                        <div id="collapse6" className="collapse" aria-labelledby="heading6" data-parent="#accordion">
                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading7">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">Closing Your Account</a> </h5>
                                        </div>
                                        <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordion">
                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                </div>
                                <a href="faq.html" className="btn btn-link btn-block btn-sm"><u>Click Here for more FAQ</u></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}