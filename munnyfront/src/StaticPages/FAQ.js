import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
const initialFieldValues = {
    faqId: 0,
    subjectId: "",
    subjectName: "",
    question: "",
    answer: "",
  };
export default function FAQ(props) {
    const [faqList, setFaqList] = useState([])
    const applicationAPI = (url = "https://api.munnyfinds.com/api/faq/") => {
        return {
            fetchFaq: () => axios.get(url + 'get')
        };
      };
    function refreshFaqList() {
        applicationAPI().fetchFaq()
            .then(res => setFaqList(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        refreshFaqList();
    }, [])
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
                                {faqList.filter(faq => faq.subject.subjectName == 'Business Registration').map(faq => (
                                    <div className="card">
                                        <div className="card-header" id="heading1">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq1" aria-expanded="false" aria-controls="faq1">{faq.question}</a> </h5>
                                        </div>
                                        <div id="faq1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
                                            <div className="card-body">{faq.answer}</div>
                                        </div>
                                    </div>
                                    ))}
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
                                {faqList.filter(faq => faq.subject.subjectName == 'Booking').map(faq => (
                                    <div className="card">
                                        <div className="card-header" id="heading1">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq1" aria-expanded="false" aria-controls="faq1">{faq.question}</a> </h5>
                                        </div>
                                        <div id="faq1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
                                            <div className="card-body">{faq.answer}</div>
                                        </div>
                                    </div>
                                    ))}
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
                                {faqList.filter(faq => faq.subject.subjectName == 'Payments').map(faq => (
                                    <div className="card">
                                        <div className="card-header" id="heading1">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq1" aria-expanded="false" aria-controls="faq1">{faq.question}</a> </h5>
                                        </div>
                                        <div id="faq1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
                                            <div className="card-body">{faq.answer}</div>
                                        </div>
                                    </div>
                                    ))}
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
                                {faqList.filter(faq => faq.subject.subjectName == 'My Account').map(faq => (
                                    <div className="card">
                                        <div className="card-header" id="heading1">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#faq1" aria-expanded="false" aria-controls="faq1">{faq.question}</a> </h5>
                                        </div>
                                        <div id="faq1" className="collapse" aria-labelledby="heading1" data-parent="#accordion">
                                            <div className="card-body">{faq.answer}</div>
                                        </div>
                                    </div>
                                    ))}
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