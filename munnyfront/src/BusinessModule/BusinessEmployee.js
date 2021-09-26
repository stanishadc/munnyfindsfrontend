import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { handleSuccess, handleError } from '../CommonFiles/CustomAlerts'
import { Link } from 'react-router-dom';
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
import BusinessSidebar from './BusinessSidebar';
const initialFieldValues = {
businessEmployeeId: 0,
name: '',
email: '',
mobile: '',
designation: '',
businessId: 0,
}
export default function BusinessEmployee(props) {
const [businessEmployeeList, setBusinessEmployeeList] = useState([]);
const [recordForEdit, setRecordForEdit] = useState(null);
const [values, setValues] = useState(initialFieldValues);
const [errors, setErrors] = useState({});

useEffect(() => {
if (recordForEdit !== null) setValues(recordForEdit);
}, [recordForEdit]);

const handleInputChange = (e) => {
const { name, value } = e.target;
setValues({
...values,
[name]: value,
});
};
const validate = () => {
let temp = {};
temp.businessEmployeeId = values.businessEmployeeId === "" ? false : true;
temp.name = values.name === "" ? false : true;
temp.email = values.email === "" ? false : true;
setErrors(temp);
return Object.values(temp).every((x) => x === true);
};
const handleSubmit = (e) => {
e.preventDefault();
if (validate()) {
const formData = new FormData();
formData.append('businessEmployeeId', values.businessEmployeeId)
formData.append('name', values.name)
formData.append('email', values.email)
formData.append('mobile', values.mobile)
formData.append('designation', values.designation)
formData.append('businessId', localStorage.getItem('MFFBusinessId'))
console.log(values)
addOrEdit(formData, resetForm)
}
};
const applicationAPI = (
url = "https://api.munnyfinds.com/api/businessemployee/"
) => {
return {
fetchAll: () => axios.get(url + 'GetById/' + localStorage.getItem('MFFBusinessId')),
create: (newRecord) => axios.post(url + "insert", newRecord),
update: (id, updateRecord) =>
axios.put(url + "update/" + id, updateRecord),
delete: (id) => axios.delete(url + "delete/" + id),
};
};
const addOrEdit = (formData, onSuccess) => {
if (formData.get("businessEmployeeId") === "0") {
applicationAPI()
.create(formData)
.then((res) => {
handleSuccess("New Employee Added");
resetForm();
refreshBusinessEmployeeList();
});
} else {
applicationAPI()
.update(formData.get("businessEmployeeId"), formData)
.then((res) => {
handleSuccess("Employee Details Updated");
resetForm();
refreshBusinessEmployeeList();
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
handleSuccess("Employee Deleted Succesfully");
refreshBusinessEmployeeList();
})
.catch((err) => handleError("Employee Deleted Failed"));
};
const resetForm = () => {
setValues(initialFieldValues);
};
function refreshBusinessEmployeeList() {
applicationAPI()
.fetchAll()
.then((res) => setBusinessEmployeeList(res.data))
.catch((err) => console.log(err));
}
useEffect(() => {
refreshBusinessEmployeeList();
}, []);
const applyErrorClass = (field) =>
field in errors && errors[field] === false ? " form-control-danger" : "";
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
<li><Link to={"/"}>Home</Link></li>
<li className="active">Business Profile</li>
</ul>
</div>
</div>
</div>
</section>{/ Page Header end /}
<div id="content">
<div className="container">
<div className="row">
<BusinessSidebar></BusinessSidebar>
<div className="col-lg-9">
<div className="bg-white shadow-md rounded p-4">
<h5 className="mb-4">Business Profile</h5>
<ul className="nav nav-tabs" id="myTab" role="tablist">
<li className="nav-item"> <Link to={"/business/businessprofile"} className="nav-link " id="businessprofile" data-toggle="tab" href="#businessprofile" role="tab" aria-controls="businessprofile" aria-selected="false">Profile</Link> </li>
 <li className="nav-item"> <Link to={"/business/services"} className="nav-link active" id="services" data-toggle="tab" href="#services" role="tab" aria-controls="services" aria-selected="true">Services</Link> </li>
<li className="nav-item"> <Link to={"/business/serviceprices"} className="nav-link" id="serviceprices" data-toggle="tab" href="#serviceprices" role="tab" aria-controls="serviceprices" aria-selected="false">ServicePrices</Link> </li>
 <li className="nav-item"> <Link to={"/business/availability"} className="nav-link" id="availability" data-toggle="tab" href="#availability" role="tab" aria-controls="availability" aria-selected="false">Availability</Link> </li>
</ul>
<div className="tab-content my-3" id="myTabContent">
<div className="tab-pane show active">
<form onSubmit={handleSubmit} autoComplete="off" noValidate>
<div className="row mt-3">
<div className="col-sm-12">
<div className="mt-4 mb-3 p-3 button-container bg-white border shadow-sm">
<h6 className="mb-3">Employee Details</h6>
<div className="form-group row floating-label">
<div className="col-sm-4 col-6">
<label htmlFor="name">Name</label>
<input
className={"form-control" + applyErrorClass("name")}
name="name"
type="text"
value={values.name}
onChange={handleInputChange}
placeholder="Name"
/>
</div>
<div className="col-sm-4 col-6">
<label htmlFor="email">Email</label>
<input
className={"form-control" + applyErrorClass("email")}
name="email"
type="text"
value={values.email}
onChange={handleInputChange}
placeholder="Email"
/>
</div>
<div className="col-sm-4 col-6">
<label htmlFor="mobile">Mobile</label>
<input
className={"form-control" + applyErrorClass("mobile")}
name="mobile"
type="text"
value={values.mobile}
onChange={handleInputChange}
placeholder="Mobile"
/>
</div>
</div>
<div className="form-group row floating-label">
<div className="col-sm-4 col-6">
<label htmlFor="designation">Designation</label>
<input
className={"form-control" + applyErrorClass("designation")}
name="designation"
type="text"
value={values.designation}
onChange={handleInputChange}
placeholder="Designation"
/>
</div>
</div>
<div className="col-sm-6">
<button type="submit" className="btn btn-primary mr-3">
Submit
</button>
<button
type="button"
className="btn btn-danger"
onClick={resetForm}
>
Cancel
</button>
</div>
</div>
</div>
</div>
</form>
<div className="table-responsive product-list">
<table
className="table table-bordered table-striped mt-3"
id="businessTypeList"
>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Mobile</th>
<th>Designation</th>
<th>Action</th>
</tr>
</thead>
<tbody>
{businessEmployeeList.map((be) => (
<tr key={be.businessEmployeeId}>
<td>{be.name}</td>
<td>{be.email}</td>
<td>{be.mobile}</td>
<td>{be.designation}</td>
<td>
<button
className="btn btn-success mr-2"
onClick={() => {
showEditDetails(be);
}}
>
<i className="fa fa-pencil" />
</button>
<button
className="btn btn-danger"
onClick={(e) =>
onDelete(e, parseInt(be.businessEmployeeId))
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
)
}