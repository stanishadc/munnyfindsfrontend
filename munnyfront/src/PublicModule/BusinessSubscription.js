import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../CommonFiles/Footer";
import Header from "../CommonFiles/Header";
import BusinessLogin from "./BusinessLogin";
const defaultProductImage = "/assets/img/default-avatar.jpg";
const initialFieldValues = {
  businessId: 0,
  businessName: "",
  businessTypeId: 0,
  contactName: "",
  landline: "",
  mobileNo: "",
  email: "",
  address: "",
  googleMapURL: "",
  latitude: "",
  longitude: "",
  location: "",
  zipCode: "",
  city: "",
  country: "",
  totalRatings: 0,
  rating: 0,
  status: "true",
  createdDate: new Date().toLocaleString(),
  updatedDate: new Date().toLocaleString(),
  businessurl: "",
  password: "",
  imageName: "",
  imageSrc: defaultProductImage,
  imageFile: null,
};
export default function BusinessSubscription(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    SubsciptionPayment();
  };
  async function SubsciptionPayment() {
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
          <section className="page-header page-header-text-light bg-secondary">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h1>New Business Registration</h1>
                </div>
                <div className="col-md-4">
                  <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li className="active">Business Registration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div
              id="businessRegister"
              className="bg-light shadow-md rounded mx-auto p-4"
            >
              <div></div>
              <hr />
              <div className="tab-content pt-4">
                <div className="tab-pane show active"></div>
                <form onSubmit={handleSubmit}>
                  <button className="btn btn-primary mr-2" type="submit">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
