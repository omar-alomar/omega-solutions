import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import 'swiper/swiper-bundle.css';
import CardItem from './CardItem'
import './Cards.css'

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

function Slider() {
    return (
        <>
        <div className="swipertest">
                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                clickable: true
                }}
                navigation={true}
                className="mySwiper">
                <SwiperSlide>
                    <CardItem src="images/mba.png" 
                                text="Mildenberg Boender and Associates." 
                                label="Land Development" 
                                path="/portfolio" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardItem src="images/mba.png" 
                                text="Mildenberg Boender and Associates." 
                                label="Land Development" 
                                path="/portfolio" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardItem src="images/mba.png" 
                                text="Mildenberg Boender and Associates." 
                                label="Land Development" 
                                path="/portfolio" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardItem src="images/mba.png" 
                                text="Mildenberg Boender and Associates." 
                                label="Land Development" 
                                path="/portfolio" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardItem src="images/mba.png" 
                                text="Mildenberg Boender and Associates." 
                                label="Land Development" 
                                path="/portfolio" />
                </SwiperSlide>
                <SwiperSlide>
                    <CardItem src="images/mba.png" 
                                text="Mildenberg Boender and Associates." 
                                label="Land Development" 
                                path="/portfolio" />
                </SwiperSlide>
            </Swiper>
        </div>  
        </>
    )
}

export default Slider
