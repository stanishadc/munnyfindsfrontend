import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import OwlCarousel from "react-owl-carousel2";
import StarRatings from 'react-star-ratings';
export default function HomeContent(props) {
  const [businessList, setBusinessList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [testimonialList, setTestimonialList] = useState([]);
  const options = {
    nav: false,
    rewind: true,
    loop: ".owl-carousel .item".length > 1 ? true : false,
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
      },
    },
  };
  const options2 = {
    nav: false,
    rewind: true,
    loop: ".owl-carousel .item".length > 1 ? true : false,
    autoplay: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  };
  const applicationAPI = () => {
    return {
      fetchBusinessList: () =>
        axios.get(
          "http://munnyapi.azurewebsites.net/api/business/GetTopBusiness/"
        ),
      fetchCategory: () =>
        axios.get(
          "http://munnyapi.azurewebsites.net/api/category/GetTopCategory/"
        ),
        fetchTestimonials: () =>
        axios.get(
          "http://munnyapi.azurewebsites.net/api/testimonial/gethomepage/"
        )
    };
  };
  function refreshBusinessList() {
    applicationAPI()
      .fetchBusinessList()
      .then((res) => setBusinessList(res.data))
      .catch((err) => console.log(err));
  }
  function refreshCategoryList() {
    applicationAPI()
      .fetchCategory()
      .then((res) => setCategoryList(res.data))
      .catch((err) => console.log(err));
  }
  function refreshTestimonialList() {
    applicationAPI()
      .fetchTestimonials()
      .then((res) => setTestimonialList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshBusinessList();
    refreshCategoryList();
    refreshTestimonialList();
  }, []);
  return (
    <div>
      <section
        className="section bg-light"
        style={{ paddingTop: "5px", paddingBottom: "5px" }}
      >
        <div className="container mt-5 py-2">
          <h2 className="text-6 font-weight-500 mb-0">Popular Categories</h2>
          <p className="text-3">
            Explore these places and some other thing here
          </p>
          {categoryList.length > 0 && (
            <OwlCarousel options={options}>
              {categoryList.map((category) => (
                <div className="item">
                  <Link to={"/vendor/" + category.businessType}>
                    <div className="card border-0">
                      <img
                        className="card-img-top rounded img-category"
                        src={category.imageSrc}
                        alt="banner"
                      />
                      <div className="card-body px-0 py-1">
                        <p className="card-title font-weight-500 text-dark mb-0 text-center">
                          {category.categoryName}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </section>
      <section className="section bg-light" style={{ paddingTop: "5px" }}>
        <div className="container mt-5 py-2">
          <h2 className="text-6 font-weight-500 mb-0">Popular Brands</h2>
          <p className="text-3">
            Explore these places and some other thing here
          </p>
          {businessList.length > 0 && (
            <OwlCarousel options={options}>
              {businessList.map((business) => (
                <div className="item">
                  <Link to={"/businessdetails/" + business.businessUrl}>
                    <div className="card border-0">
                      <img
                        className="card-img-top rounded"
                        src={business.imageSrc}
                        alt="banner"
                        style={{ height: "160px" }}
                      />
                      <div className="card-body px-0 py-1">
                        <p className="card-title font-weight-500 text-dark mb-0">
                          {business.businessName}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </section>

      <div className="section bg-light shadow-md">
        <div className="container">
          <section className="section px-5">
            <h2 className="text-9 font-weight-600 text-center">
              Why choose MunnyFinds?
            </h2>
            <p className="lead text-center mb-5">Save Time and Money!</p>
            <div className="row">
              <div className="col-md-4">
                <div className="featured-box style-4">
                  <div className="featured-box-icon bg-light-4 text-primary rounded-circle">
                    {" "}
                    <i className="fas fa-bullhorn" />{" "}
                  </div>
                  <h3>Services</h3>
                  <p className="text-3">Connect with listed services</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="featured-box style-4">
                  <div className="featured-box-icon bg-light-4 text-primary rounded-circle">
                    {" "}
                    <i className="fas fa-hands-helping" />{" "}
                  </div>
                  <h3>Trust pay</h3>
                  <p className="text-3">100% Payment Protection</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="featured-box style-4">
                  <div className="featured-box-icon bg-light-4 text-primary rounded-circle">
                    {" "}
                    <i className="far fa-life-ring" />{" "}
                  </div>
                  <h3>Book 24X7</h3>
                  <p className="text-3">Book anytime online at best prices</p>
                </div>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="container my-sm-5">
              <h2 className="text-9 text-center">
                What people are saying about us
              </h2>
              <p className="lead text-center mb-5">
                Send us the experience of munnyfinds service
              </p>
              <div className="row">
              {testimonialList.length > 0 && (
            <OwlCarousel options={options2}>
              {testimonialList.map((business) => (
              
                <div className="col-md-12 mb-4">
                  <div className="testimonial bg-white rounded shadow-sm text-center p-4">
                    <p className="text-3">
                      {business.review}
                    </p>
                    <span className="text-warning">
                    <StarRatings rating={business.rating} starDimension="20px" starSpacing="1px" starRatedColor="#8FCD2E" />
                    </span>
                    <span className="d-block font-weight-500">
                      {business.name}
                    </span>
                  </div>
                </div>
                
                ))}
                </OwlCarousel>
          )}
              </div> </div>           
          </section>
        </div>
      </div>
    </div>
  );
}
