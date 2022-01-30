import React, { useState, useEffect } from "react";
import axios from "axios";
import { handleSuccess, handleError } from "../CommonFiles/CustomAlerts";
import { Link } from "react-router-dom";
import Footer from "../CommonFiles/Footer";
import Header from "../CommonFiles/Header";
import BusinessSidebar from "./BusinessSidebar";
const defaultProductImage = "/assets/img/default-avatar.jpg";
const initialFieldValues = {
  businessImageId: "0",
  businessId: 0,
  ImageName: "",
  imageSrc: defaultProductImage,
  imageFile: null,
  status: true,
  // createdDate: new Date().toLocaleString(),
  // updatedDate: new Date().toLocaleString()
};
export default function BusinessImages(props) {
  const [imagesList, setImagesList] = useState([]);
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});
  const [recordForEdit, setRecordForEdit] = useState(null);
  useEffect(() => {
    if (recordForEdit != null) setValues(recordForEdit);
  }, [recordForEdit]);
  const showPreview = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imageFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setValues({
          ...values,
          imageFile,
          imageSrc: x.target.result,
        });
      };
      reader.readAsDataURL(imageFile);
    } else {
      setValues({
        ...values,
        imageFile: null,
        imageSrc: defaultProductImage,
      });
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const validate = () => {
    let temp = {};
    temp.imageSrc = values.imageSrc == defaultProductImage ? false : true;
    setErrors(temp);
    return Object.values(temp).every((x) => x == true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("businessImageId", values.businessImageId);
      formData.append("businessId", props.match.params["businessId"]);
      formData.append("imageName", values.imageName);
      formData.append("imageFile", values.imageFile);
      // formData.append('createdDate', values.createdDate)
      // formData.append('updatedDate', values.updatedDate)
      formData.append("status", values.status);
      addOrEdit(formData);
    } else {
      alert("Please Enter Highlighted Values");
    }
  };
  const applicationAPI = (
    url = "http://munnyapi.azurewebsites.net/api/businessimages/"
  ) => {
    return {
      fetchProductImages: () =>
        axios.get(url + "GetByBusiness/" + props.match.params["businessId"]),
      create: (newRecord) => axios.post(url + "insert", newRecord),
      update: (id, updateRecord) =>
        axios.put(url + "update/" + id, updateRecord),
      delete: (id) => axios.delete(url + "delete/" + id),
    };
  };
  const addOrEdit = (formData) => {
    if (formData.get("businessImageId") == "0") {
      applicationAPI()
        .create(formData)
        .then((res) => {
          console.log(res);
          if (res.data.status == "Success") {
            handleSuccess("Business Image Added");
            refreshProductImages();
            resetForm();
          } else {
            handleError("Image Adding Failed");
          }
        })
        .catch((err) => console.log(err));
    } else {
      applicationAPI()
        .update(formData.get("businessImageId"), formData)
        .then((res) => {
          if (res.data.status == "Success") {
            handleSuccess("Business Images Updated");
          } else {
            handleError("Image Update Failed");
          }
          refreshProductImages();
          resetForm();
        });
    }
  };
  const showEditDetails = (data) => {
    setRecordForEdit(data);
  };
  const onDelete = (e, id) => {
    if (window.confirm("Are you sure to delete this record?"))
      applicationAPI()
        .delete(id)
        .then((res) => {
          console.log(res);
          if (res.data.status == "Success") {
            handleSuccess("Image Deleted Succesfully");
          } else {
            handleError("Image Delete Failed");
          }
          refreshProductImages();
        })
        .catch((err) => handleError("Image Delete Failed"));
  };
  const resetForm = () => {
    setValues(initialFieldValues);
    document.getElementById("image-uploader").value = null;
  };
  function refreshProductImages() {
    applicationAPI()
      .fetchProductImages()
      .then((res) => setImagesList(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    refreshProductImages();
  }, []);
  const applyErrorClass = (field) =>
    field in errors && errors[field] == false ? " form-control-danger" : "";
  return (
    <div id="main-wrapper">
      <Header></Header>
      <section className="page-header page-header-text-light bg-secondary">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h1>Business Profile</h1>
            </div>
            <div className="col-md-4">
              <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="active">Business Profile</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/ Page Header end /}
      <div id="content">
        <div className="container">
          <div className="row">
            <BusinessSidebar></BusinessSidebar>
            <div className="col-lg-9">
              <div className="bg-white shadow-md rounded p-4">
                <h5 className="mb-4">Business Profile</h5>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    {" "}
                    <Link
                      to={"/business/businessprofile"}
                      className="nav-link "
                      id="businessprofile"
                      data-toggle="tab"
                      href="#businessprofile"
                      role="tab"
                      aria-controls="businessprofile"
                      aria-selected="false"
                    >
                      Profile
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      to={"/business/services"}
                      className="nav-link active"
                      id="services"
                      data-toggle="tab"
                      href="#services"
                      role="tab"
                      aria-controls="services"
                      aria-selected="true"
                    >
                      Services
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      to={"/business/serviceprices"}
                      className="nav-link"
                      id="serviceprices"
                      data-toggle="tab"
                      href="#serviceprices"
                      role="tab"
                      aria-controls="serviceprices"
                      aria-selected="false"
                    >
                      ServicePrices
                    </Link>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <Link
                      to={"/business/availability"}
                      className="nav-link"
                      id="availability"
                      data-toggle="tab"
                      href="#availability"
                      role="tab"
                      aria-controls="availability"
                      aria-selected="false"
                    >
                      Availability
                    </Link>{" "}
                  </li>
                </ul>
                <div className="tab-content my-3" id="myTabContent">
                  <div className="tab-pane show active">
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                      <div className="row mt-3">
                        <div className="col-sm-12">
                          <div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
                            <h6 className="mb-3">Business Image</h6>
                            <div className="form-group row">
                              <div className="col-sm-3 col-12">
                                <div className="picture-container">
                                  <div className="picture">
                                    <img
                                      src={values.imageSrc}
                                      className="picture-src"
                                      width="200px"
                                      height="200px"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="form-group row floating-label">
                              <div className="col-sm-3 col-12">
                                <input
                                  id="image-uploader"
                                  className={
                                    "form-control-file" +
                                    applyErrorClass("imageSrc")
                                  }
                                  type="file"
                                  accept="image/*"
                                  onChange={showPreview}
                                />
                                <label htmlFor="tag">
                                  Select Business Image
                                </label>
                              </div>
                            </div>
                            <div className="form-group">
                              <button type="submit" className="btn btn-primary">
                                Submit
                              </button>
                              <Link
                                to={"/businesslist"}
                                type="button"
                                className="btn btn-danger"
                              >
                                Cancel
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="table-responsive product-list">
                      <table
                        className="table table-bordered table-striped mt-3"
                        id="productList"
                      >
                        <thead>
                          <tr>
                            <th width="10%">Image</th>
                            <th width="45%">Status</th>
                            <th width="45%">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {imagesList.map((image) => (
                            <tr key={image.businessImageId}>
                              <td width="10%">
                                <img src={image.imageSrc} width="80px" />
                              </td>
                              <td width="45%">
                                {image.status ? "active" : "inactive"}
                              </td>
                              <td width="45%">
                                <button
                                  className="btn btn-success mr-2"
                                  onClick={() => {
                                    showEditDetails(image);
                                  }}
                                >
                                  <i className="fa fa-pencil" />
                                </button>
                                <button
                                  className="btn btn-danger"
                                  onClick={(e) =>
                                    onDelete(e, parseInt(image.businessImageId))
                                  }
                                >
                                  <i className="fas fa-trash" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
