
import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Footer from '../CommonFiles/Footer';
import Header from '../CommonFiles/Header';
const initialFieldValues = {
    aboutUsId: 0,
    title: "",
    paraGraph: "",
    paraGraph1: "",
    subTitle: "",
    subTitle1: "",
    subTitle2: "",
    subParaGraph: "",
    subParaGraph1: "",
    subParaGraph2: "",
  };
export default function Aboutus(props) {
    const [values, setValues] = useState(initialFieldValues)
    const applicationAPI = (url = "http://165.22.216.222/api/aboutus/") => {
        return {
          fetchAll: () => axios.get(url + "get")
        };
      };
    function refreshAboutUs() {
        applicationAPI().fetchAll()
            .then(res => setValues(res.data[0]))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        refreshAboutUs();
    }, [])
    return (
        <div id="main-wrapper">
            <Header></Header>
            <section className="page-header page-header-text-light bg-secondary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1>About Us</h1>
                        </div>
                        <div className="col-md-4">
                            <ul className="breadcrumb justify-content-start justify-content-md-end mb-0">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">About Us</li>
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
                        <div className="row mt-4 mb-2">
                            <div className="col-md-4">
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="far fa-thumbs-up" /></div>
                                    <h3>{values.subTitle}</h3>
                                    <p>{values.subParaGraph}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="far fa-paper-plane" /> </div>
                                    <h3>{values.subTitle1}</h3>
                                    <p>{values.subParaGraph1}</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="featured-box style-1">
                                    <div className="featured-box-icon text-primary"> <i className="far fa-eye" /> </div>
                                    <h3>{values.subTitle2}</h3>
                                    <p>{values.subParaGraph2}</p>
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