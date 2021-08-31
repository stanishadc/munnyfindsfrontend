import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import BusinessLogin from './BusinessLogin';
const defaultProductImage = "/assets/img/default-avatar.jpg";
/*import "https://maps.googleapis.com/maps/api/js?key=AIzaSyAysr8AxbLW2LHnWXCZ-eGtk578USEn-Zs&libraries=places&callback=initMap";*/
const initialFieldValues = {
    businessId: 0,
    businessName: '',
    businessTypeId: 0,
    contactName: '',
    landline: '',
    mobileNo: '',
    email: '',
    address: '',
    googleMapURL: '',
    latitude: '',
    longitude: '',
    location: '',
    zipCode: '',
    city: '',
    country: '',
    totalRatings: 0,
    rating: 0,
    status: "true",
    createdDate: new Date().toLocaleString(),
    updatedDate: new Date().toLocaleString(),
    businessurl: '',
    password: '',
    imageName: '',
    imageSrc: defaultProductImage,
    imageFile: null,
}
export default function BusinessSubscription(props) {
    const handleSubmit = e => {
        e.preventDefault();
        SubsciptionPayment()
        //doPayment()
    }
    const SubsciptionPayment = () => {
        const https = require('https')
        const params = JSON.stringify({
            "email": "taanu51@gmail.com",
            "amount": "10000",
            "metadata": {
                "custom_fields": [
                    {
                        "value": "makurdi",
                        "display_name": "Donation for",
                        "variable_name": "donation_for"
                    }
                ]
            },
            "bank": {
                "code": "057",
                "account_number": "0000000000"
            },
            "birthday": "1999-08-30"
        })
        const options = {
            hostname: 'api.paystack.co',
            port: 443,
            path: '/charge',
            method: 'POST',
            headers: {
                Authorization: 'Bearer sk_test_abf62d029c354d9aa5e4693dfbdeb5ed7881c6b5',
                'Content-Type': 'application/json'
            }
        }
        const req = https.request(options, res => {
            let data = ''
            res.on('data', (chunk) => {
                data += chunk
            });
            res.on('end', () => {
                var mydata=JSON.parse(data);
                doPayment(mydata.data.reference);
            })
        }).on('error', error => {
            console.error(error)
        })
        req.write(params)
        req.end()

    }
    const doPayment = (authcode) => {
        {
            const https = require('https')
            const params = JSON.stringify({
                "pin": "1234",
                "reference": authcode
            })
            const options = {
                hostname: 'api.paystack.co',
                port: 443,
                path: '/charge/submit_pin',
                method: 'POST',
                headers: {
                    Authorization: 'Bearer sk_test_abf62d029c354d9aa5e4693dfbdeb5ed7881c6b5',
                    'Content-Type': 'application/json'
                }
            }
            const req = https.request(options, res => {
                let data = ''
                res.on('data', (chunk) => {
                    data += chunk
                });
                res.on('end', () => {
                    console.log(JSON.parse(data))
                })
            }).on('error', error => {
                console.error(error)
            })
            req.write(params)
            req.end()
        }
    }
    return (
        <div>
            <div id="main-wrapper">
                <Header></Header>
                <div id="content">
                    <section className="page-header page-header-text-light bg-secondary">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-md-8">
                                    <h1>New Business Registration</h1>
                                </div>
                                <div className="col-md-4">
                                    <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                        <li><Link to={"/"}>Home</Link></li>
                                        <li className="active">Business Registration</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                        <div id="businessRegister" className="bg-light shadow-md rounded mx-auto p-4">
                            <div>
                            </div><hr />
                            <div className="tab-content pt-4">
                                <div className="tab-pane show active"></div>
                                <form onSubmit={handleSubmit}>
                                    <button className="btn btn-primary mr-2" type="submit">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}