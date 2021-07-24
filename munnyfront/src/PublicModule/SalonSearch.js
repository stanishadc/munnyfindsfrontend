import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Header from '../CommonFiles/Header';
import Footer from '../CommonFiles/Footer';
import ServiceTabs from '../CommonFiles/ServiceTabs';
import HomeSlider from './HomeSlider';
import HomeContent from './HomeContent';
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
  const [location, setlocation] = useState([]);
  const [values, setValues] = useState(initialFieldValues);

    const applicationAPI = (url) => {
        return {
          fetchBusinessType: (id) =>
          axios.get("http://165.22.216.222/api/businesstype/Get/"),
        
          fetchCategory: (id) =>
          axios.get("http://165.22.216.222/api/category/GetByType/" + id),

          fetchLocation: (id) =>
          axios.get("http://165.22.216.222/api/business/GetList/" + id),
         
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
        setBusinessType(e.nativeEvent.target[index].text)
        GetCategory(e.target.value);
        GetLocation(e.target.value);
      };
      function GetCategory(id) {
        applicationAPI()
          .fetchCategory(id)
          .then((res) => setCategoryList(res.data))
          .catch((err) => console.log(err));
      }
      function GetLocation(id) {
        applicationAPI()
          .fetchLocation(id)
          .then((res) => setlocation(res.data))
          .catch((err) => console.log(err));
      }
      function refreshBusinessType() {
        applicationAPI()
          .fetchBusinessType()
          .then((res) => setBusinessTypeList(res.data))
          .catch((err) => console.log(err));
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
                                <h2 className="text-4 mb-3">Search Services</h2>
                                <form id="recharge-bill" method="post">
                                <div class="form-row">
                                        <div class="col-lg-12 form-group">
                                            <div>
                                            <select
                        name="businessTypeId"
                        type="text"
                        value={values.businessTypeId}
                        onChange={handleTypeChange}
                        className="form-control"
                      >
                        <option value="0">Please Select</option>
                        {businessTypeList.map((bus) => (
                          <option value={bus.businessTypeId}>
                            {bus.business}
                          </option>
                        ))}
                      </select>            
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="col-lg-12 form-group">
                                        <select
                                        name="categoryId"
                                        type="text"
                                            value={values.categoryId}
                                            onChange={handleInputChange}
                                      className="form-control"
                      >
                        <option value="0">Please Select</option>
                        {categoryList.map((bus) => (
                          <option value={bus.categoryId}>
                            {bus.categoryName}
                          </option>
                        ))}
                      </select>
                       </div>
                                    </div>
                                  <div class="form-row">
                                        <div class="col-lg-12 form-group">
                                        <select
                                        name="businessId"
                                        type="text"
                                            value={values.businessId}
                                            onChange={handleInputChange}
                                      className="form-control"
                      >
                        <option value="0">Please Select</option>
                        {location.map((bus) => (
                          <option value={bus.businessId}>
                            {bus.location}
                          </option>
                        ))}
                      </select>
                                        </div>
                                    </div>
                                    <Link className="btn btn-primary btn-block" type="submit" to={"/vendors/"+businessType}>Search</Link>
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
    )
}