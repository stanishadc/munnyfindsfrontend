
import React, { useState, useEffect } from 'react';
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
    const applicationAPI = (url = "https://munnyapi.azurewebsites.net/api/privacypolicy/") => {
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
                        <p>This privacy and cookies policy ("Privacy Policy") details data used on www.munnyfinds.com (the "Websites"), the Munnyfinds Customer mobile application software and the Munnyfinds Business Partners Connect  which is available for download from iTunes and Google Play (the "Apps"), customizable websites hosted at unique subdomain addresses, and the web interfaces, embedded on Partner Sites and on our salon partners (“Partners”)’ own websites and social media pages, through which customers can make bookings directly with Partners (together, the “Platform”). </p>
                        <p>The data controller for your information is MUNNYFINDS (registered address: No 4B, Ogidi Crescent, Lekki Phase 1, Lagos State, Nigeria.) ("Munnyfinds", "we", "our" or "us"). You can email us on: info@munnyfinds.com  </p>
                        <p>Munnyfinds. shares your personal information with other entities in its corporate group (“Group Companies”) for the purposes described in this notice. The Group Companies also process your personal data as data controllers as necessary for the purposes described in this notice. The Group Companies are listed in the section of this Privacy Policy called “Sharing personal information with third parties”, along with their contact details.  </p>
                        <p>We are committed to protecting the privacy of our users and customers. This Privacy Policy is intended to inform you how we gather, define, and use information that could identify you, such as your name, email address, address, other contact details or online identifiers, other information that you provide to us when using the Platform ("Personal Information") and what Cookies we use. Please take a moment to read this Privacy Policy carefully.  </p>
                        <p><b>What information do we collect? </b></p>
                        <p>When you visit and/or use our Platform or contact us, we may collect the following information:  </p>
                        <p>-	Personal Information that you choose to share with us when you register for an account, subscribe to emails, newsletters, and alerts and which you provide to us when using our services, including information entered our booking platform and included in your comments, reviews, or survey responses. In the course of making a booking or submitting reviews, you might voluntarily provide us with sensitive personal data if relevant to the service that you are requesting or reviewing (relating to your health or ethnicity, for example). </p>
                        <p>-	Personal Information that you share with us as part of an application for a job at Munnyfinds, submitted either directly on the Websites or indirectly, including but not limited to, via a recruitment agency, unsolicited application, or third-party recruitment platform. In the course of making an application you may choose to voluntarily provide us with sensitive personal data relating to whether reasonable adjustments ought to be made for you in the application process or subsequently if an employment relationship is established. However, you must not share any sensitive personal data with us that would not be necessary for us to make reasonable adjustments for you, e.g. political opinions, religious beliefs or specific information on your state of health. </p>
                        <p>-	Where you are utilizing our online payment facility, we may store (via ourselves or our appointed payment processor) your credit and debit card details on a secure encrypted basis. </p>
                        <p>-	If you choose to communicate with us (for example, through the Platform, email, telephone, SMS, or social media) we will record the fact that you have contacted us and may retain the content of your communication, together with your contact details and our responses. </p>
                        <p>-	Information about your visits to and use of the Platform, such as information about the device and browser you are using, your IP address and location, your identifier for advertisers (IDFA), the date and time that you visited, the duration of your visit, the referral source and website navigation paths of your visit and your interactions on the Platform including the salons and treatments you are interested in. Please note that we may associate this information with your Munnyfinds account. Please see the cookies section of this Privacy Policy for further information on the purposes for which we collect and use this information. </p>
                        <p>It is important that all the Personal Information you give us when you register as a user or otherwise when you use the Platform is correct and accurate. This includes, by way of example only, ensuring that we have your correct contact (always including email) details. </p>
                        <p>If you plan to submit someone else's Personal Information to us, for instance when making a booking on their behalf, you should only provide us with that third party's details with their consent and after they have been given access to information about how we will use their details, including the purposes set out in this Privacy Policy.  </p>
                        <p><b>Protecting your personal information </b></p>
                        <p>The transmission of information via the internet is not completely secure. So, whilst we will do our best to protect your Personal Information, we cannot guarantee the security of your data transmitted to our Platform. Any transmission is at your own risk. Once we have received your Personal Information, we will use strict procedures and security features in relation to that data. </p>
                        <p><b>How do we use your personal information? </b></p>
                        <p>In general terms, we use Personal Information to provide you with the services and products you request, process payment, provide customer services, deliver our content and ads which we think may be of interest to you, for customer research, to send you marketing and promotional emails and to notify you about important changes to our Platform.  </p>
                        <p></p>We also use your Personal Information for the following purposes:
                        <p>-	To fulfil a contract, or take steps linked to a contract. This is relevant when you request a service via Munnyfinds. This includes: </p>
                        <p>-	Sending you information about your requested services (such as appointment reminders) by email, SMS and push notification </p>
                        <p>-	Facilitating your bookings and taking payments</p>
                        <p>-	Responding to your questions and concerns </p>
                        <p>-	Administering your account </p>
                        <p>As required by Munnyfinds to conduct our business and pursue our legitimate interests, in particular: </p>
                        <p>-	To keep our Platform and systems secure and to prevent fraud, security incidents and other crime </p>

                        <p>-	To verify compliance with our terms and conditions and for the establishment, exercise, or defense of legal claims  </p>
                        <p>-	To notify you about new Munnyfinds services and special offers we think you will find valuable, for example via email and displaying advertising on third party websites such as Facebook (where consent is not required) </p>
                        <p>-	To tailor and personalize marketing notifications and advertising for you and others based on information you provide and your use of our Platform, products and services and other sites (please see the Cookies section of this Privacy Policy for further information) </p>
                        <p>-	To help us monitor, improve, and protect our Platform, products and services, and to personalize our Platform, products, services (and those of our partners) for you, based on information you provide and your use of our Platform, products and services and other sites (please see the Cookies section of this Privacy Policy for further information)</p>
                        <p>-	To investigate and respond to any questions or complaints received from you or from others, about our Platform or our products or services</p>
                        <p>-	To conduct internal research and analysis so that we can see how our Platform, products and services are being used and how our business is performing </p>
                        <p>-	To conduct market research and consumer surveys </p>
                        <p>-	To collate and publish reviews of products or services offered by our Partners, and use these for advertising campaigns </p>
                        <p>-	To process applications for a position at Munnyfinds, whether submitted directly or indirectly, including to examine your suitability for the role, curriculum vitae, and professional skills, to schedule interviews and assessments, to contact referees and, if successful, to offer you a job and establish an employment relationship with you..</p>
                        <p>-	Information which you provide will be held for a period of 12 months and may be referred to in the event you make future applications to work at Munnyfinds, unless you opt to delete this data which you may do so by following the link in the confirmation of application email that we sent you.  </p>


                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}