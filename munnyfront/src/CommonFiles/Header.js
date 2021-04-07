import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserLogin from '../PublicModule/UserLogin'
import auth from './Auth'
export default function Header(props) {
    const [isUOpen, setIsUOpen] = useState(false);    
    const toggleUPopup = () => {
        setIsUOpen(!isUOpen);
    }    
    return (
        <header id="header">
            <div className="container">
                <div className="header-row">
                    <div className="header-column justify-content-start">
                        <div className="logo">
                            <Link to={"/salonsearch"} title="Salon Search"><img src="/images/logo.png" alt="logo" style={{maxWidth:'200px'}}></img></Link>
                        </div>
                    </div>
                    <div className="header-column justify-content-end">
                        <nav className="primary-menu navbar navbar-expand-lg">
                            <div id="header-nav" className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="dropdown active"> <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="dropdown"> <Link to={"/"}>Salons</Link>
                                    </li>
                                    <li className="dropdown"> <Link to={"/"}>Gyms</Link>
                                    </li>
                                    <li className="dropdown"> <Link to={"/"}>Yoga</Link>
                                    </li>
                                    <li className="dropdown"> <Link to={"/offers"}>Offers</Link>
                                    </li>
                                    {auth.isUAuthenticated()?
                                    <li className="dropdown"><Link to={"/user/profile"}><span className="user-icon ml-sm-2"><i className="fas fa-user" /></span>MyAccount</Link></li>
                                    :auth.isUAuthenticated()?
                                    <li className="dropdown"> <Link to={"/business/businessprofile"}><span className="user-icon ml-sm-2"><i className="fas fa-user" /></span>MyAccount</Link></li>
                                    :
                                    <li> <Link to={"/registerbusiness"}>Become a Partner</Link><Link title="Login / Sign up" onClick={toggleUPopup}>Login / Sign up</Link></li>
                                    }
                                </ul>
                            </div>
                        </nav>{/* Primary Navigation end */}
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span /> <span /> <span /> </button>
                </div>
            </div>
            {isUOpen && <UserLogin handleClose={toggleUPopup}/>}            
        </header>
    )
}