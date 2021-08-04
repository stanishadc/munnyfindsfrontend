import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
const initialFieldValues = {
    contactUsId: 0,
    title: "",
    paraGraph: "",
    email: "",
    mobile: "",
    address: "",
    googleMapUrl: "",
    };
export default function Contactus(props) {
    const [values, setValues] = useState(initialFieldValues)
    const applicationAPI = (url = "https://api.munnyfinds.com/api/contactus/") => {
        return {
          fetchAll: () => axios.get(url + "get")
        };
      };
    function refreshContactUs() {
        applicationAPI().fetchAll()
            .then(res => setValues(res.data[0]))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        refreshContactUs();
    }, [])
    return (
        <div id="main-wrapper">
            <Header></Header>
            <div class="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bg-light shadow-md rounded h-100 p-3">
                                <iframe className="h-100 w-100" src={values.googleMapUrl} allowFullScreen />
                            </div>
                    </div>
                        <div className="col-md-6 mt-4 mt-md-0">
                            <div className="bg-light shadow-md rounded p-4">
                                <h2 className="text-6">{values.title}</h2>
                                <p className="text-3">{values.paraGraph} <a href="#">Help</a></p>
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-map-marker-alt" /></div>
                                    <h3>Quickai Inc.</h3>
                                    <p>{values.address}</p>
                                </div>
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-phone" /> </div>
                                    <h3>Telephone</h3>
                                    <p>{values.mobile}</p>
                                </div>
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="fas fa-envelope" /> </div>
                                    <h3>Business Inquiries</h3>
                                    <p>{values.email}</p>
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