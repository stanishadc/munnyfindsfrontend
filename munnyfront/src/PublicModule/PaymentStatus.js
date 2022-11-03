import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, Redirect } from "react-router-dom";
import Footer from "../CommonFiles/Footer";
import Header from "../CommonFiles/Header";
import moment from "moment";
import qs from "qs";
const initialValues = {
  bSubscriptionId: 0,
  subscriptionTypeId: 0,
  businessUserId: 0,
  createdDate: new Date(),
  startDate: new Date(),
  endDate: new Date(),
  updatedDate: new Date(),
  status: false,
  pGReference: "",
};
export default function PaymentStatus(props) {
  const [servicesData, setServicesData] = useState([]);
  const [values, setValues] = useState([]);
  const [loop, setloop] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState("");
  const [pgReference, setpgReference] = useState("");
  useEffect(() => {
    if (localStorage.getItem("subscriptionTypeId") === "5") {
      UpdateFreePaymentStatus();
    }
    else {
      readQueryString();
    }
  }, []);
  function readQueryString() {
    console.log(qs);
    console.log(props.location)
    if (qs.parse(props.location.search, { ignoreQueryPrefix: true }).status === "success") {
      UpdatePaymentStatus();
    }
  }
  const applicationAPI = (url = "https://munnyapi.azurewebsites.net/api/businesssubscription/") => {
    return {
      create: newRecord => axios.post(url + "insert", newRecord)
    }
  }
  function UpdateFreePaymentStatus() {
    var currentDate = moment();
var futureMonth = moment(currentDate).add(1, 'M');
var futureMonthEnd = moment(futureMonth).endOf('month');

if(currentDate.date() != futureMonth.date() && futureMonth.isSame(futureMonthEnd.format('YYYY-MM-DD'))) {
    futureMonth = futureMonth.add(1, 'd');
}
    const formData = new FormData();
    formData.append("subscriptionTypeId", localStorage.getItem("subscriptionTypeId"));
    formData.append(
      "businessUserId",
      localStorage.getItem("MFFBusinessUserId")
    );
    formData.append("createdDate", moment().format());
    formData.append("startDate", currentDate.format());
    formData.append("endDate", futureMonth.format());
    formData.append("updatedDate", moment().format());
    formData.append("paymentStatus", "");
    formData.append("pGReference", "");
    applicationAPI()
      .create(formData)
      .then((res) => {
        localStorage.removeItem("MFFInterval");
        localStorage.removeItem("subscriptionTypeId");
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }
  function UpdatePaymentStatus() {
    if (localStorage.getItem("MFFBusinessUserId") !== null) {
      const formData = new FormData();
      formData.append("subscriptionTypeId", localStorage.getItem("subscriptionTypeId"));
      formData.append(
        "businessUserId",
        localStorage.getItem("MFFBusinessUserId")
      );
      formData.append("createdDate", moment(values.createdDate).format());
      formData.append("startDate", moment(values.startDate).format());
      formData.append("endDate", localStorage.getItem("MFFInterval"));
      formData.append("updatedDate", moment(values.updatedDate).format());
      formData.append("paymentStatus", qs.parse(props.location.search, { ignoreQueryPrefix: true }).status);
      formData.append("pGReference", qs.parse(props.location.search, { ignoreQueryPrefix: true }).txRef);
      applicationAPI()
        .create(formData)
        .then((res) => {
          localStorage.removeItem("MFFInterval");
          localStorage.removeItem("subscriptionTypeId");
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        });
    }
    else {
      alert("Please login")
    }
  }
  return (
    <div id="main-wrapper">
      <Header></Header>
      <div id="content">
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-12 text-center mt-5">
              <p className="text-success text-16 line-height-07">
                <i className="fas fa-check-circle" />
              </p>
              <h2 className="text-8" style={{ color: '#000' }}>Congratulations</h2>
              <p className="lead">
                We have received your business application.Your application
                status will be notified via email.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
