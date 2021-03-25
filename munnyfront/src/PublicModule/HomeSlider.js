import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
export default function HomeSlider(props) {
    const options = {
        items: 1,
        nav: false,
        rewind: true,
        autoplay: true
    };
    return (
        <div className="col-lg-7">
            <OwlCarousel options={options} >
                <div className="item"><img src="images/slider/banner-1.jpg" alt="The Last of us" /></div>
                <div className="item"><img src="images/slider/banner-2.jpg" alt="GTA V" /></div>
            </OwlCarousel>
        </div>
    )
}