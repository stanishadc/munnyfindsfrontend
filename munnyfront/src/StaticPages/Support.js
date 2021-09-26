import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
const initialFieldValues = {
    supportId: 0,
    subjectId: "",
    name: "",
    email: "",
    mobile: "",
    message: "",
    };
export default function Support(props) {
    const [supportList, setSupportList] = useState([])
    const [subject, setSubject] = useState([]);
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const validate = () => {
        let temp = {}
        temp.name = values.name === "" ? false : true;
        temp.email = values.email === "" ? false : true;
        temp.mobileNo = values.mobileNo === "" ? false : true;
        setErrors(temp)
        return Object.values(temp).every(x => x === true)
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData()
            formData.append('supportId', values.supportId)
            formData.append('subjectId', values.subjectId)
            formData.append('name', values.name)
            formData.append('email', values.email)
            formData.append('mobile', values.mobile)
            formData.append('message', values.message)
            console.log(values)
            addOrEdit(formData, resetForm)
        }
    }
    const applicationAPI = (url = "https://api.munnyfinds.com/api/support/") => {
        return {
            fetchSupport: () => axios.get("https://api.munnyfinds.com/api/faq/" + 'get'),
            fetchSubjectName: (id) =>
        axios.get("https://api.munnyfinds.com/api/subject/get/"),

            create: newRecord => axios.post(url + "insert", newRecord)
        }
    }
    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('supportId') === "0") {
            applicationAPI().create(formData)
                .then(res => {
                    // handleSuccess("Support Added");
                    resetForm();
                })
        }
    }
    const resetForm = () => {
        setValues(initialFieldValues)
    }
    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' form-control-danger' : '')
   
    function refreshSupportList() {
        applicationAPI().fetchSupport()
            .then(res => setSupportList(res.data))
            .catch(err => console.log(err))
    }
    function refreshSubject() {
        applicationAPI()
          .fetchSubjectName()
          .then((res) => setSubject(res.data))
          .catch((err) => console.log(err));
      }
    useEffect(() => {
        refreshSupportList();
        refreshSubject();
    }, [])
    return (
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Support</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bg-light shadow-md rounded p-4">
                                <h2 className="text-6">Send a Request</h2>
                                <p>Please fill out the form below and we promise you to get back to you within a couple of hours.</p>
                                <form  onSubmit={handleSubmit} id="recharge-bill" method="post">
                                    <div className="form-group">
                                        <label htmlFor="subjectName">Subject</label>
                                        <select
                                                 name="subjectId"
                                                     type="text"
                                                     value={values.subjectId}
                                                          onChange={handleInputChange}
                                                   className="form-control" >
                                                    <option value="0">Please Select</option>
                                                         {subject.map((bus) => (
                                                      <option value={bus.subjectId}>
                                                          {bus.subjectName}
                                                               </option>
                                                                     ))}
                                                                </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="yourName">Your Name</label>
                                        <input className={"form-control" + applyErrorClass('name')} name="name" type="text" value={values.name} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your Email</label>
                                        <input className={"form-control" + applyErrorClass('email')} name="email" type="email" value={values.email} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="mobile">Mobile Number</label>
                                        <input className={"form-control" + applyErrorClass('mobile')} name="mobile" type="mobile" value={values.mobile} onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Your Query</label>
                                        <input className={"form-control" + applyErrorClass('message')} name="message" type="text" value={values.message} onChange={handleInputChange} />
                                    </div>
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4 mt-lg-0">
                            <div className="bg-light shadow-md rounded p-4">
                                <h2 className="text-6">FAQ</h2>
                                <div className="accordion accordion-alternate" id="accordion">
                                {supportList.filter(faq => faq.subject.subjectName == 'My Account').map(faq => (
                                    <div className="card">
                                        <div className="card-header" id="heading7">
                                            <h5 className="mb-0"> <a href="#" className="collapsed" data-toggle="collapse" data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">{faq.question}</a> </h5>
                                        </div>
                                        <div id="collapse7" className="collapse" aria-labelledby="heading7" data-parent="#accordion">
                                            <div className="card-body"> {faq.answer} </div>
                                        </div>
                                    </div>
                                     ))}
                                </div>
                                <a href="faq.html" className="btn btn-link btn-block btn-sm"><u>Click Here for more FAQ</u></a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}