import React from 'react';
import { Link } from 'react-router-dom';
export default function ServiceTabs(props) {
    return (
        <div className="container">
            <ul className="nav secondary-nav">
                <li className="nav-item"> <Link className={props.pagename === "salon" ? 'nav-link active' : 'nav-link'} to={"/salonsearch"}><span><i className="fas fa-cut" /></span> Salons</Link> </li>
                <li className="nav-item"> <Link className={props.pagename === "gym" ? 'nav-link active' : 'nav-link'} to={"/gymsearch"}><span><i className="fas fa-dumbbell" /></span> GYM</Link> </li>
                <li className="nav-item"> <Link className={props.pagename === "yoga" ? 'nav-link active' : 'nav-link'} to={"/yogasearch"}><span><i className="fas fa-child" /></span> Yoga</Link> </li>
            </ul>
        </div>
    )
}