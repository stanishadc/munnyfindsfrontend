import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../CommonFiles/Footer";
import Header from "../CommonFiles/Header";
export default function BusinessSubscription(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    SubsciptionPayment(e);
  };
  function SubsciptionPayment(event) {
    event.preventDefault();
    var data = JSON.stringify({
      tx_ref: "hooli-tx-1920bbtytty",
      amount: "100",
      currency: "NGN",
      redirect_url: "https://webhook.site/9d0b00ba-9a69-44fa-a43d-a82c33c36fdc",
      payment_options: "card",
      meta: { consumer_id: 23, consumer_mac: "92a3-912ba-1192a" },
      customer: {
        email: "user@gmail.com",
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
                        <div className="col-sm-4 mb-4">
                          <div className="card text-center">
                            <div className="card-header">
                              <h5 className="card-title text-4 mb-0">
                                Talktime
                              </h5>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled">
                                <li className="mb-3">Talktime $8, 7 D</li>
                                <li className="mb-3 text-black-50">
                                  Validity 7 Days
                                </li>
                                <li>
                                  <a
                                    className="btn-link text-1"
                                    data-toggle="modal"
                                    data-target="#plan-detail"
                                    href="#"
                                  >
                                    More Details
                                  </a>
                                </li>
                              </ul>
                              <button
                                className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none"
                                type="submit"
                              >
                                $ 10
                              </button>
                            </div>
                          </div>
                        </div>                      
                        <div className="col-sm-4 mb-4">
                          <div className="card text-center">
                            <div className="card-header">
                              <h5 className="card-title text-4 mb-0">
                                Talktime
                              </h5>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled">
                                <li className="mb-3">
                                  Local min 92 &amp; 10 SMS, 28 D
                                </li>
                                <li className="mb-3 text-black-50">
                                  Validity 28 Days
                                </li>
                                <li>
                                  <a
                                    className="btn-link text-1"
                                    data-toggle="modal"
                                    data-target="#plan-detail"
                                    href="#"
                                  >
                                    More Details
                                  </a>
                                </li>
                              </ul>
                              <button
                                className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none"
                                type="submit"
                              >
                                $ 100
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4 mb-4">
                          <div className="card text-center">
                            <div className="card-header bg-secondary">
                              <h5 className="card-title text-4 text-white mb-0">
                                Unlimited
                              </h5>
                            </div>
                            <div className="card-body">
                              <ul className="list-unstyled">
                                <li className="mb-3">Unlimited Talktime</li>
                                <li className="mb-3 text-black-50">
                                  Validity 90 Days
                                </li>
                                <li>
                                  <a
                                    className="btn-link text-1"
                                    data-toggle="modal"
                                    data-target="#plan-detail"
                                    href="#"
                                  >
                                    More Details
                                  </a>
                                </li>
                              </ul>
                              <button
                                className="btn btn-sm btn-block btn-outline-primary text-5 py-1 font-weight-500 shadow-none"
                                type="submit"
                              >
                                $ 499
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
