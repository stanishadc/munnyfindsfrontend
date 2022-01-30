import React, { useState, useEffect } from 'react';
import axios from 'axios'
import OwlCarousel from 'react-owl-carousel2';
export default function HomeSlider(props) {
    const [offersList, setOffersList] = useState([]);
    const applicationAPI = (
        url = "http://munnyapi.azurewebsites.net/api/offers/"
    ) => {
        return {
            fetchAll: () => axios.get(url + "GetOffers")
        };
    };
    function refreshOffersList() {
        applicationAPI().fetchAll()
            .then((res) => setOffersList(res.data))
            .catch((err) => console.log(err));
    }
    useEffect(() => {
        refreshOffersList();
    }, []);
    const options = {
        items: 1,
        nav: false,
        rewind: true,
        loop: ((".owl-carousel .item").length > 1) ? true : false,
        autoplay: true
    };
    return (
        <div className="col-lg-7">
            {offersList.length>0 &&
            <OwlCarousel options={options} >
                {offersList.map(offer =>
                    <div className="item"><img src={offer.imageSrc} alt="The Last of us" /></div>
                )}
            </OwlCarousel>
            }
        </div>
    )
}