import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import OwlCarousel from 'react-owl-carousel2';
import Header from '../CommonFiles/Header';
import Footer from '../CommonFiles/Footer';
export default function OffersList(props) {
    const [offersList, setOffersList] = useState([]);
    const options = {
        nav: false,
        rewind: true,
        loop: ((".owl-carousel .item").length > 1) ? true : false,
        autoplay: true,
        margin: 10,
        responsive: {
            0: {
                items: 1,
            },
            500: {
                items: 3,
            },
            768: {
                items: 5,
            }
        }
    };
    const applicationAPI = () => {
        console.log();
        return {
          
            fetchOffers: () => axios.get("http://165.22.216.222/api/offers/GetOffers/")         
        };
      };
      function refreshOffersList() {
        applicationAPI().fetchOffers()
          .then((res) => setOffersList(res.data))
          .catch((err) => console.log(err));
      }
    useEffect(() => {
        refreshOffersList();
      }, []);
    return (
        <div>
             <Header></Header>
             <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>New Offers</h1>
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
             <section className="section bg-light" style={{paddingTop:'5px', paddingBottom:'5px'}}>
                <div className="container mt-5 py-2">
                    <h2 className="text-6 font-weight-500 mb-0">Offers</h2>
                    <p className="text-3">Explore these places and some other thing here</p>
                    {offersList.length>0 && 
                    <OwlCarousel options={options}>
                        {offersList.map(offers=>
                        <div className="item">
                            <a href="#">
                                <div className="card border-0"><img className="card-img-top rounded " style={{height:'130px'}} src={offers.imageSrc} alt="banner" />
                                    <div className="card-body px-0 py-1">
                                        <p className="card-title font-weight-500 text-dark mb-0 ">{offers.title}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        )}
                    </OwlCarousel>
                    }
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}