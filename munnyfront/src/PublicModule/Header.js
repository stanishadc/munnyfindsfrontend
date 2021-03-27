import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserLogin from './UserLogin'
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
                            <Link to={"/salonsearch"} title="Salon Search" style={{ fontSize: '25px' }}>MUNNY FINDS</Link>
                        </div>
                    </div>
                    <div className="header-column justify-content-end">
                        <nav className="primary-menu navbar navbar-expand-lg">
                            <div id="header-nav" className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="dropdown active"> <Link className="dropdown-toggle" to={"/"}>Home</Link>
                                    </li>
                                    <li className="dropdown"> <Link className="dropdown-toggle">Services</Link>
                                    </li>
                                    <li className="dropdown dropdown-mega"> <Link className="dropdown-toggle">Offers</Link>
                                    </li>
                                    <li className="dropdown"> <Link className="dropdown-toggle" to={"/registerbusiness"}>Become a Partner</Link>
                                    </li>
                                    <li className="login-signup ml-lg-2"><Link className="pl-lg-4 pr-0" title="Login / Sign up" onClick={toggleUPopup}>Login / Sign up <span className="d-none d-lg-inline-block"><i className="fas fa-user" /></span></Link></li>
                                </ul>
                            </div>
                        </nav>{/* Primary Navigation end */}
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#header-nav"> <span /> <span /> <span /> </button>
                </div>
            </div>
            {isUOpen && <UserLogin handleClose={toggleUPopup} />}            
        </header>
    )
}