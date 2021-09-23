import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import OwlCarousel from 'react-owl-carousel2';
export default function HomeContent(props) {
    const [businessList, setBusinessList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
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
            fetchBusinessList: () => axios.get("https://localhost:44368/api/business/GetTopBusiness/"),        
          fetchCategory: () => axios.get("https://localhost:44368/api/category/GetTopCategory/")         
        };
      };
    function refreshBusinessList() {
        applicationAPI().fetchBusinessList()
          .then((res) => setBusinessList(res.data))
          .catch((err) => console.log(err));
      }
      function refreshCategoryList() {
        applicationAPI().fetchCategory()
          .then((res) => setCategoryList(res.data))
          .catch((err) => console.log(err));
      }
    useEffect(() => {
        refreshBusinessList();
        refreshCategoryList();
      }, []);
    return (
        <div>
            <section className="section bg-light" style={{paddingTop:'5px', paddingBottom:'5px'}}>
                <div className="container mt-5 py-2">
                    <h2 className="text-6 font-weight-500 mb-0">Popular Categories</h2>
                    <p className="text-3">Explore these places and some other thing here</p>
                    {categoryList.length>0 && 
                    <OwlCarousel options={options}>
                        {categoryList.map(category=>
                        <div className="item">
                            <a href="#">
                                <div className="card border-0"><img className="card-img-top rounded img-category" src={category.imageSrc} alt="banner" />
                                    <div className="card-body px-0 py-1">
                                        <p className="card-title font-weight-500 text-dark mb-0 text-center">{category.categoryName}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        )}
                    </OwlCarousel>
                    }
                </div>
            </section>
            <section className="section bg-light" style={{paddingTop:'5px'}}>
                <div className="container mt-5 py-2">
                    <h2 className="text-6 font-weight-500 mb-0">Popular Brands</h2>
                    <p className="text-3">Explore these places and some other thing here</p>
                    {businessList.length>0 && 
                    <OwlCarousel options={options}>
                        {businessList.map(business=>
                        <div className="item">
                            <Link to={"/businessdetails/"+business.businessUrl}>
                                <div className="card border-0"><img className="card-img-top rounded" src={business.imageSrc} alt="banner" style={{height:'160px'}} />
                                    <div className="card-body px-0 py-1">
                                        <p className="card-title font-weight-500 text-dark mb-0">{business.businessName}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        )}
                    </OwlCarousel>
                    }    
                </div>
            </section>

            <div className="section bg-light shadow-md">
                <div className="container">
                    <section className="section px-5">
                        <h2 className="text-9 font-weight-600 text-center">Why choose MunnyFinds?</h2>
                        <p className="lead text-center mb-5">Save Time and Money!</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="featured-box style-4">
                                    <div className="featured-box-icon bg-light-4 text-primary rounded-circle"> <i className="fas fa-bullhorn" /> </div>
                                    <h3>Best Prices</h3>
                                    <p className="text-3">Always get cheapest price with the best in the industry.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-4">
                                    <div className="featured-box-icon bg-light-4 text-primary rounded-circle"> <i className="fas fa-hands-helping" /> </div>
                                    <h3>Trust pay</h3>
                                    <p className="text-3">100% Payment Protection. Easy Return Policy.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-4">
                                    <div className="featured-box-icon bg-light-4 text-primary rounded-circle"> <i className="far fa-life-ring" /> </div>
                                    <h3>24X7 Support</h3>
                                    <p className="text-3">We're here to help. Have a query and need help ?</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>{/* Refer & Earn end */}
            </div>
            </div>
    )
}