import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../CommonFiles/Header";
import Footer from "../CommonFiles/Footer";
import ServiceTabs from "../CommonFiles/ServiceTabs";
import HomeSlider from "./HomeSlider";
import HomeContent from "./HomeContent";
import Select from "react-select";
const initialFieldValues = {
  categoryId: 0,
  categoryName: "",
  status: "true",
  createdDate: new Date().toLocaleString(),
  updatedDate: new Date().toLocaleString(),
  businessTypeId: 0,
  business: "",
  categoryurl: "",
};
export default function SalonSearch(props) {
  const [businessType, setBusinessType] = useState([]);
  const [businessTypeList, setBusinessTypeList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [locationList, setlocationList] = useState([]);
  const [values, setValues] = useState(initialFieldValues);

  const applicationAPI = (url) => {
    return {
      fetchBusinessType: (id) =>
        axios.get("http://munnyapi.azurewebsites.net/api/businesstype/Get/"),

      fetchCategory: (id) =>
        axios.get("http://munnyapi.azurewebsites.net/api/category/GetByType/" + id),

      fetchLocation: (id) =>
        axios.get("http://munnyapi.azurewebsites.net/api/business/GetList/" + id),
    };
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleTypeChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    var index = e.nativeEvent.target.selectedIndex;
    setBusinessType(e.nativeEvent.target[index].text);
    GetCategory(e.target.value);
    GetLocation(e.target.value);
  };
  function GetCategory(id) {
    applicationAPI()
      .fetchCategory(id)
      .then((res) => updateCategoryData(res.data))
      .catch((err) => console.log(err));
  }
  function GetLocation(id) {
    applicationAPI()
      .fetchLocation(id)
      .then((res) => updateLocationData(res.data))
      .catch((err) => console.log(err));
  }
  function refreshBusinessType() {
    applicationAPI()
      .fetchBusinessType()
      .then(
        (res) => (setBusinessTypeList(res.data), updateServiceData(res.data))
      )
      .catch((err) => console.log(err));
  }

  async function updateServiceData(array) {
    const list = [];
    array.forEach((item) => {
      list.push({ label: item.business, value: item.businessTypeId });
    });
    setBusinessTypeList(list)
  }
  async function updateCategoryData(array) {
    const list = [];
    array.forEach((item) => {
      list.push({ label: item.categoryName, value: item.categoryId });
    });
    setCategoryList(list)
  }
  async function updateLocationData(array) {
    const list = [];
    array.forEach((item) => {
      list.push({ label: item.location, value: item.businessId });
    });
    setlocationList(list)
  }
  useEffect(() => {
    refreshBusinessType();
  }, []);
  return (
    <div id="main-wrapper">
      <Header></Header>
      <div id="content">
        <div className="bg-secondary">
          <ServiceTabs pagename="salon"></ServiceTabs>
        </div>
        <section className="container">
          <div className="bg-light shadow-md rounded p-4">
            <div className="row">
              <div class="col-lg-5 mb-4 mb-lg-0">
                <h2 className="text-4 mb-3" style={{color:'#000'}}>Search Services</h2>
                <form id="recharge-bill" method="post">
                  <div class="form-row">
                    <div class="col-lg-12 form-group">
                      <div>
                        <Select defaultValue="Please Select" options={businessTypeList} onChange={opt => (GetCategory(opt.value),GetLocation(opt.value))}/>
                      </div>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-lg-12 form-group">
                    <Select options={categoryList} onChange={opt => GetCategory(opt.value)}/>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-lg-12 form-group">
                    <Select options={locationList} onChange={opt => GetCategory(opt.value)}/>
                    </div>
                  </div>
                  <Link
                    className="btn btn-primary btn-block"
                    type="submit"
                    to={"/vendors/" + businessType}
                  >
                    Search
                  </Link>
                </form>
              </div>
              <HomeSlider></HomeSlider>
            </div>
          </div>
        </section>
        <HomeContent></HomeContent>
      </div>
      <Footer></Footer>
    </div>
  );
}
