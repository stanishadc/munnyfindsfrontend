import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../CommonFiles/Footer";
import Header from "../CommonFiles/Header";
import moment from "moment";
export default function Pricing(props) {
  const [monthlyList, setMonthlyList] = useState([]);
  const [yearlyList, setYearlyList] = useState([]);
  const [monthlyPremiumList, setMonthlyPremiumList] = useState([]);
  const [yearlyPremiumList, setYearlyPremiumList] = useState([]);
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [yearlyPrice, setYearlyPrice] = useState(0);
  const [monthlyPremiumPrice, setMonthlyPremiumPrice] = useState(0);
  const [yearlyPremiumPrice, setYearlyPremiumPrice] = useState(0);
  const [monthlyPLink, setMonthlyPLink] = useState(0);
  const [yearlyPLink, setYearlyPLink] = useState(0);
  const [monthlyPremiumPLink, setMonthlyPremiumPLink] = useState(0);
  const [yearlyPremiumPLink, setYearlyPremiumPLink] = useState(0);
  useEffect(() => {
    getMonthlyData();
    getYearlyData();
    getMonthlyPremiumData();
    getYearlyPremiumData();
  }, []);
  function getMonthlyData() {
    applicationAPI()
      .fetchMonthly()
      .then(
        (res) => (
          setMonthlyList(res.data),
          setMonthlyPrice(res.data[0].subscriptionType.price),
          setMonthlyPLink(res.data[0].subscriptionType.paymentLink)
        )
      )
      .catch((err) => console.log(err));
  }
  function getYearlyData() {
    applicationAPI()
      .fetchYearly()
      .then(
        (res) => (
          setYearlyList(res.data),
          setYearlyPrice(res.data[0].subscriptionType.price),
          setYearlyPLink(res.data[0].subscriptionType.paymentLink)
        )
      )
      .catch((err) => console.log(err));
  }
  function getMonthlyPremiumData() {
    applicationAPI()
      .fetchPMonthly()
      .then(
        (res) => (
          setMonthlyPremiumList(res.data),
          setMonthlyPremiumPrice(res.data[0].subscriptionType.price),
          setMonthlyPremiumPLink(res.data[0].subscriptionType.paymentLink)
        )
      )
      .catch((err) => console.log(err));
  }
  function getYearlyPremiumData() {
    applicationAPI()
      .fetchPYearly()
      .then(
        (res) => (
          setYearlyPremiumList(res.data),
          setYearlyPremiumPrice(res.data[0].subscriptionType.price),
          setYearlyPremiumPLink(res.data[0].subscriptionType.paymentLink)
        )
      )
      .catch((err) => console.log(err));
  }
  const applicationAPI = (
    url = "https://munnyapi.azurewebsites.net/api/subscriptiondata/"
  ) => {
    return {
      fetchMonthly: () => axios.get(url + "GetBySubsctionType/1"),
      fetchYearly: () => axios.get(url + "GetBySubsctionType/2"),
      fetchPMonthly: () => axios.get(url + "GetBySubsctionType/3"),
      fetchPYearly: () => axios.get(url + "GetBySubsctionType/4"),
    };
  };
  const BasicMonthlyPayment = (e) => {
    e.preventDefault();
    localStorage.setItem("subscriptionTypeId", 1);
    localStorage.setItem("MFFInterval", moment().add(1, 'months').calendar());
    props.history.push({
        pathname: '/registerbusiness'
    })
  };
  const BasicYearlyPayment = (e) => {
    e.preventDefault();
    localStorage.setItem("subscriptionTypeId", 2);
    localStorage.setItem("MFFInterval", moment().add(1, 'years').calendar());
    props.history.push({
        pathname: '/registerbusiness'
    })
  };
   const PremiumMonthlyPayment = (e) => {
    e.preventDefault();
    localStorage.setItem("subscriptionTypeId", 3);
    localStorage.setItem("MFFInterval", moment().add(1, 'months').calendar());
    props.history.push({
        pathname: '/registerbusiness'
    })
  };
  const PremiumYearlyPayment = (e) => {
    e.preventDefault();
    localStorage.setItem("subscriptionTypeId", 4);
    localStorage.setItem("MFFInterval", moment().add(1, 'years').calendar());
    props.history.push({
        pathname: '/registerbusiness'
    })
  };
 
  return (
    <div>
      <div id="main-wrapper">
        <Header></Header>
        <div id="content">
          <div className="container">
            <div className="bg-light shadow-md rounded p-4">
              <div className="row">
                <div className="col-lg-12">
                  <h2 style={{ color: "#000" }}>
                    Find the MunnyFinds plan that’s right for you 
                  </h2>
                  <br />
                  <br />
                </div>
                <div className="col-lg-12">
                  <div className="tab-content" id="myTabContentVertical">
                    <div
                      className="tab-pane fade show active"
                      id="oneTab"
                      role="tabpanel"
                      aria-labelledby="one-tab"
                    >
                      <div className="row">
                        <div className="col-sm-3 mb-4">
                          <div className="card text-center">
                            <div className="card-header">
                              <h5 className="card-title text-4 mb-0">
                                Monthly Plan
                              </h5>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled">
                                {monthlyList.map((monthly) => (
                                  <li className="mb-3">
                                    {monthly.subscriptionText}
                                  </li>
                                ))}
                              </ul>
                              <button
                                className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none"
                                type="submit"
                                onClick={(e) => BasicMonthlyPayment(e)}
                              >
                                NGN {monthlyPrice}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mb-4">
                          <div className="card text-center">
                            <div className="card-header">
                              <h5 className="card-title text-4 mb-0">
                                Yearly Plan
                              </h5>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled">
                                {yearlyList.map((yearly) => (
                                  <li className="mb-3">
                                    {yearly.subscriptionText}
                                  </li>
                                ))}
                              </ul>
                              <button
                                className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none"
                                type="submit"
                                onClick={(e) => BasicYearlyPayment(e)}
                              >
                                NGN {yearlyPrice}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mb-4">
                          <div className="card text-center">
                            <div className="card-header">
                              <h5 className="card-title text-4 mb-0">
                                Premium Monthly Plan
                              </h5>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled">
                                {monthlyPremiumList.map((yearly) => (
                                  <li className="mb-3">
                                    {yearly.subscriptionText}
                                  </li>
                                ))}
                              </ul>
                              <button
                                className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none"
                                type="submit"
                                onClick={(e) => PremiumMonthlyPayment(e)}
                              >
                                NGN {monthlyPremiumPrice}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-3 mb-4">
                          <div className="card text-center">
                            <div className="card-header">
                              <h5 className="card-title text-4 mb-0">
                                Premium Yearly Plan
                              </h5>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled">
                                {yearlyPremiumList.map((yearly) => (
                                  <li className="mb-3">
                                    {yearly.subscriptionText}
                                  </li>
                                ))}
                              </ul>
                              <button
                                className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none"
                                type="submit"
                                onClick={(e) => PremiumYearlyPayment(e)}
                              >
                                NGN {yearlyPremiumPrice}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
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
  );
}
