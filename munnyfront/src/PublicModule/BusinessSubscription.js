import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../CommonFiles/Footer";
import Header from "../CommonFiles/Header";
export default function BusinessSubscription(props) {
  const [monthlyList, setMonthlyList] = useState([]);
  const [yearlyList, setYearlyList] = useState([]);
  const [monthlyPrice, setMonthlyPrice] = useState(0);
  const [yearlyPrice, setYearlyPrice] = useState(0);
  useEffect(() => {
    getMonthlyData();
    getYearlyData();
  }, []);
  function getMonthlyData() {
    applicationAPI()
      .fetchMonthly()
      .then((res) => (setMonthlyList(res.data), setMonthlyPrice(res.data[0].subscriptionType.price)))
      .catch((err) => console.log(err));
  }
  function getYearlyData() {
    applicationAPI()
      .fetchYearly()
      .then((res) => (setYearlyList(res.data), setYearlyPrice(res.data[0].subscriptionType.price)))
      .catch((err) => console.log(err));
  }
  const applicationAPI = (
    url = "https://localhost:44368/api/subscriptiondata/"
  ) => {
    return {
      fetchMonthly: () => axios.get(url + "GetBySubsctionType/1"),
      fetchYearly: () => axios.get(url + "GetBySubsctionType/2")
    };
  };
  const MakeMonthlyPayment = (e, subscriptionamount) => {
    e.preventDefault();
    SubsciptionPayment(subscriptionamount);
    props.history.push({
      pathname: '/paymentstatus',
    })
  };
  function SubsciptionPayment(subscriptionamount) {
    console.log(subscriptionamount)
    var data = JSON.stringify({
      tx_ref: "hooli-tx-1920bbtytty",
      amount: subscriptionamount,
      currency: "NGN",
      redirect_url: "https://munnyfinds.com/paymentstatus",
      payment_options: "card",
      meta: { consumer_id: 23, consumer_mac: "92a3-912ba-1192a" },
      customer: {
        email: "taanu51@gmail.com",
        phonenumber: "080****4528",
        name: "Yemi Desola",
      },
      customizations: {
        title: "Pied Piper Payments",
        description: "Middleout isn't free. Pay the price",
        logo: "https://assets.piedpiper.com/logo.png",
      },
    });

    var config = {
      method: "post",
      url: "https://api.flutterwave.com/v3/payments",
      headers: {
        Authorization: "Bearer FLWSECK_TEST-b2007d4a05c806c7d4284700d9366c84-X",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div>
      <div id="main-wrapper">
        <Header></Header>
        <div id="content">
          <div className="container">
            <div className="bg-light shadow-md rounded p-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="tab-content" id="myTabContentVertical">
                    <div
                      className="tab-pane fade show active"
                      id="oneTab"
                      role="tabpanel"
                      aria-labelledby="one-tab"
                    >
                      <div className="row">
                        <div className="col-sm-6 mb-4">
                          <div className="card text-center">
                            <div className="card-header">
                              <h5 className="card-title text-4 mb-0">
                                Monthly
                              </h5>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled">
                                {monthlyList.map(monthly =>
                                  <li className="mb-3">
                                    {monthly.subscriptionText}
                                  </li>
                                )}
                              </ul>
                              <button
                                className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none"
                                type="submit" onClick={(e) => MakeMonthlyPayment(e, monthlyPrice)}
                              >
                                Naira {monthlyPrice}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 mb-4">
                          <div className="card text-center">
                            <div className="card-header">
                              <h5 className="card-title text-4 mb-0">
                                Yearly
                              </h5>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled">
                                {yearlyList.map(yearly =>
                                  <li className="mb-3">
                                    {yearly.subscriptionText}
                                  </li>
                                )}
                              </ul>
                              <button
                                className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none"
                                type="submit" onClick={(e) => MakeMonthlyPayment(e, yearlyPrice)}
                              >
                                Naira {yearlyPrice}
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
