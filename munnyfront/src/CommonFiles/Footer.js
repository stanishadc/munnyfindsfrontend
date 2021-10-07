import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const initialFieldValues = {
    subscribeId: 0,
    subscribeEmail: "",
    status: true,
    createdDate: new Date().toLocaleString(),
    updatedDate: new Date().toLocaleString()
  }
export default function Footer(props) {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    const applyErrorClass = field => ((field in errors && errors[field] == false) ? ' form-control-danger' : '')


    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const validate = () => {
        let temp = {}
        temp.subscribeEmail = values.subscribeEmail == "" ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x == true)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            try {
                const formData = new FormData()
                formData.append('subscribeId', values.subscribeId)
                formData.append('subscribeEmail', values.subscribeEmail)
                formData.append('status', values.status)
                formData.append('createdDate', values.createdDate)
                formData.append('updatedDate', values.updatedDate)
                console.log(values)
                submitSubscribe(formData,resetForm)
                
            } catch (err) {
                alert("Something Went Wrong");
                console.log(err);
            }
        }
    }
    const submitSubscribe = (formData) => {
        applicationAPI().create(formData)
            .then(res => {
                if(res.data.status==="Success")
                {
                    alert("Subscribed");
                    resetForm();
                   
                }
            })
    }
    const resetForm = () => {
        setValues(initialFieldValues)
        }
    const applicationAPI = (url = "https://apimunnyfinds.azurewebsites.net/api/subscribe/") => {
        return {
            create: newRecord => axios.post(url + "insert", newRecord)
        }
    }
    return (
        <footer id="footer">
            <section className="section bg-light shadow-md pt-4 pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3">
                            <div className="featured-box text-center">
                                <div className="featured-box-icon"> <i className="fas fa-lock" /> </div>
                                <h4>100% Secure Payments</h4>
                                <p>Moving your card details to a much more secured place.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="featured-box text-center">
                                <div className="featured-box-icon"> <i className="fas fa-thumbs-up" /> </div>
                                <h4>Trust pay</h4>
                                <p>100% Payment Protection. Easy Return Policy.</p>
                            </div>
                        </div>
                       <div className="col-sm-6 col-md-3">
                            <div className="featured-box text-center">
                                <div className="featured-box-icon"> <i className="fas fa-bullhorn" /> </div>
                                <h4>Best Offers</h4>
                                <p>Get the best offers from top brands</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <div className="featured-box text-center">
                                <div className="featured-box-icon"> <i className="far fa-life-ring" /> </div>
                                <h4>24X7 Support</h4>
                                <p>We're here to help. Have a query and need help ? <a href="#">Click here</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <p>Payment</p>
                        <ul className="payments-types">
                            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="/images/payment/visa.png" alt="visa" title="Visa" /></a></li>
                            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="/images/payment/discover.png" alt="discover" title="Discover" /></a></li>
                            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="/images/payment/paypal.png" alt="paypal" title="PayPal" /></a></li>
                            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="/images/payment/american.png" alt="american express" title="American Express" /></a></li>
                            <li><a href="#" target="_blank"> <img data-toggle="tooltip" src="/images/payment/mastercard.png" alt="discover" title="Discover" /></a></li>
                        </ul>
                    </div>
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                    <div className="col-md-12 mb-3 mb-md-0">
                        <p>Subscribe</p>
                        <div className="input-group newsletter">
                        <input className={"form-control" + applyErrorClass('subscribeEmail')} name="subscribeEmail" type="text" value={values.subscribeEmail} onChange={handleInputChange} placeholder="Please Enter Email" />
                            <span className="input-group-append">
                                <button className="btn btn-secondary" type="submit">Subscribe</button>
                            </span> </div>
                    </div>
                    </form>
                    <div className="col-md-4 d-flex align-items-md-end flex-column">
                        <p>Keep in touch</p>
                        <ul className="social-icons">
                            <li className="social-icons-facebook"><a data-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                            <li className="social-icons-twitter"><a data-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter" /></a></li>
                            <li className="social-icons-instagram"><a data-toggle="tooltip" href="http://www.instagram.com/" target="_blank" title="Instagram"><i className="fab fa-instagram" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-copyright">
                    <ul className="nav justify-content-center">
                        <li className="nav-item"> <Link className="nav-link active" to={"aboutus"}>About Us</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to={"faq"}>Faq</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" to={"contactus"}>Contact</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" target="_blank" to={process.env.PUBLIC_URL + "/staticfiles/Munnyfinds-Partner-Terms-of-Business.pdf"}>Partner Terms</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" target="_blank" to={process.env.PUBLIC_URL + "/staticfiles/Terms-and-Condition.pdf"}>Terms of Use</Link> </li>
                        <li className="nav-item"> <Link className="nav-link" target="_blank" to={process.env.PUBLIC_URL + "/staticfiles/Privacy-Policy.pdf"}>Privacy Policy</Link> </li>
                    </ul>
                    <p className="copyright-text">Copyright © 2021 <Link to={"/"}>Munny Finds</Link>. All Rights Reserved.</p>
                </div>
            </div>
        </footer>


    )
}