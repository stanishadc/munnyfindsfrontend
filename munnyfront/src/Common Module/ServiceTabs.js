import React from 'react';
import { Link } from 'react-router-dom';
export default function ServiceTabs(props) {
    return (
        <div className="container">
            <ul className="nav secondary-nav">
                <li className="nav-item"> <Link className={props.pagename === "salon" ? 'nav-link active' : 'nav-link'} to={"/salonsearch"}><span><i className="fas fa-cut" /></span> Salons</Link> </li>
            </ul>
        </div>
    )
}