
import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
const initialFieldValues = {
    privacyPolicyId: 0,
    title: "",
    paraGraph: "",
    paraGraph1: "",
};
export default function Privacy(props) {
    const [values, setValues] = useState(initialFieldValues)
    const applicationAPI = (url = "https://api.munnyfinds.com/api/privacypolicy/") => {
        return {
          fetchAll: () => axios.get(url + "get")
        };
      };
    function refreshPrivacyPolicy() {
        applicationAPI().fetchAll()
            .then(res => setValues(res.data[0]))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        refreshPrivacyPolicy();
    }, [])
    return (
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>Privacy Policy</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div id="content">
                <div className="container">
                    <div className="bg-light shadow-md rounded p-4">
                        <h2 className="text-6">{values.title}</h2>
                        <p>{values.paraGraph}</p>
                        <p>{values.paraGraph1}</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}