import React, { useState } from 'react';
import Slider from "react-slick";
import { ports } from '../assets/data/data';
import Heading from '../common/Heading';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Story(props) {
    const [data, setData] = useState(ports)

    const settings = {
        dots: true,
        fade:true,
        ladyLoad:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        cssEase: "linear",
    }

    return (
        <>
            <section className="storyslider" id='storyslider' data-aos="fade">
                <Heading title='Notable Works' desc='These are the starts...'/>
                <div className="section-bg"></div>
                <Slider {...settings}>
                    {data.filter(item => item.id !== 10).slice(0,9).map((item) => (
                        <div className="photo" key={item.id}>
                            <img src={item.cover} alt="" />
                        </div>
                    ))}
                </Slider>
            </section>
        </>
    );
}

export default Story;