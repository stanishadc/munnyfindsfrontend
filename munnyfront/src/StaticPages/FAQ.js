import React from 'react';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
export default function FAQ(props) {
    return (
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>FAQ</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <div className="container">
                    <div className="bg-light shadow-md rounded p-4">
                        <h3 className="text-6">Get answers to your queries</h3>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <h3 className="text-5 font-weight-400">Business Registration</h3>
                            </div>
                            <div className="col-md-9">
                                <div className="accordion accordion-alternate" id="accordion">
                                    <div className="card">
                                        <div className="card-header" id="heading1">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq1" aria-expanded="false" aria-controls="faq1">Recharge not done but my money deducted.</a> </h5>
                                        </div>
                                        <div id="faq1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
                                            <div className="card-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading2">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="false" aria-controls="faq2">I was recharging and got this message: ‘Pending State’</a> </h5>
                                        </div>
                                        <div id="faq2" className="collapse" aria-labelledby="heading2" data-parent="#accordion">
                                            <div className="card-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading3">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq3" aria-expanded="false" aria-controls="faq3">I was not able to recharge</a> </h5>
                                        </div>
                                        <div id="faq3" className="collapse" aria-labelledby="heading3" data-parent="#accordion">
                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading4">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq4" aria-expanded="false" aria-controls="faq4">I recharged on a wrong number.</a> </h5>
                                        </div>
                                        <div id="faq4" className="collapse" aria-labelledby="heading4" data-parent="#accordion">
                                            <div className="card-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <h3 className="text-5 font-weight-400">Booking</h3>
                            </div>
                            <div className="col-md-9">
                                <div className="accordion accordion-alternate" id="accordionBooking">
                                    <div className="card">
                                        <div className="card-header" id="heading5">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq5" aria-expanded="false" aria-controls="faq5">How can i cancel my booking?</a> </h5>
                                        </div>
                                        <div id="faq5" className="collapse" aria-labelledby="heading5" data-parent="#accordionBooking">
                                            <div className="card-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading6">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq6" aria-expanded="false" aria-controls="faq6">How do I print my e-ticket? </a> </h5>
                                        </div>
                                        <div id="faq6" className="collapse" aria-labelledby="heading6" data-parent="#accordionBooking">
                                            <div className="card-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet.</div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading7">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq7" aria-controls="faq7">Do I need an ID Proof while booking a train ticket?</a> </h5>
                                        </div>
                                        <div id="faq7" className="collapse" aria-labelledby="heading7" data-parent="#accordionBooking">
                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading8">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq8" aria-expanded="false" aria-controls="faq8"> Why are seats priced differently on the same bus?</a> </h5>
                                        </div>
                                        <div id="faq8" className="collapse" aria-labelledby="heading8" data-parent="#accordionBooking">
                                            <div className="card-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <h3 className="text-5 font-weight-400">Payments</h3>
                            </div>
                            <div className="col-md-9">
                                <div className="accordion accordion-alternate" id="accordionPayments">
                                    <div className="card">
                                        <div className="card-header" id="heading9">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq9" aria-expanded="false" aria-controls="faq9">How do I pay?</a> </h5>
                                        </div>
                                        <div id="faq9" className="collapse" aria-labelledby="heading9" data-parent="#accordionPayments">
                                            <div className="card-body"> Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading10">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq10" aria-expanded="false" aria-controls="faq10">How do I pay using a credit/debit card?</a> </h5>
                                        </div>
                                        <div id="faq10" className="collapse" aria-labelledby="heading10" data-parent="#accordionPayments">
                                            <div className="card-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading11">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq11" aria-expanded="false" aria-controls="faq11">Can I use my bank's Internet Banking feature to make a payment?</a> </h5>
                                        </div>
                                        <div id="faq11" className="collapse" aria-labelledby="heading11" data-parent="#accordionPayments">
                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading12">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq12" aria-expanded="false" aria-controls="faq12">Are there any hidden charges (Octroi or Tax)? </a> </h5>
                                        </div>
                                        <div id="faq12" className="collapse" aria-labelledby="heading12" data-parent="#accordionPayments">
                                            <div className="card-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-3">
                                <h3 className="text-5 font-weight-400">My Account</h3>
                            </div>
                            <div className="col-md-9">
                                <div className="accordion accordion-alternate" id="accordionAccount">
                                    <div className="card">
                                        <div className="card-header" id="heading13">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq13" aria-expanded="false" aria-controls="faq13">Is there any registration fee?</a> </h5>
                                        </div>
                                        <div id="faq13" className="collapse" aria-labelledby="heading13" data-parent="#accordionAccount">
                                            <div className="card-body"> Iisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Mutat tacimates id sit. Ridens mediocritatem ius an, eu nec magna imperdiet. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading14">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq14" aria-expanded="false" aria-controls="faq14">Is my account information safe?</a> </h5>
                                        </div>
                                        <div id="faq14" className="collapse" aria-labelledby="heading14" data-parent="#accordionAccount">
                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading15">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq15" aria-expanded="false" aria-controls="faq15">How does it work?</a> </h5>
                                        </div>
                                        <div id="faq15" className="collapse" aria-labelledby="heading15" data-parent="#accordionAccount">
                                            <div className="card-body"> Iisque Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading16">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq16" aria-expanded="false" aria-controls="faq16">I did not receive the cashback</a> </h5>
                                        </div>
                                        <div id="faq16" className="collapse" aria-labelledby="heading16" data-parent="#accordionAccount">
                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading17">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq17" aria-expanded="false" aria-controls="faq17">Forgot my password! What next?</a> </h5>
                                        </div>
                                        <div id="faq17" className="collapse" aria-labelledby="heading17" data-parent="#accordionAccount">
                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="heading18">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq18" aria-expanded="false" aria-controls="faq18">Closing Your Account</a> </h5>
                                        </div>
                                        <div id="faq18" className="collapse" aria-labelledby="heading18" data-parent="#accordionAccount">
                                            <div className="card-body"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="text-center my-3 my-md-5">
                            <p className="text-4 mb-3">Can't find what you're looking for? Our customer care team are here to help</p>
                            <a href="support.html" className="btn btn-primary">Contact Customer Care</a> </div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </div>
    )
}