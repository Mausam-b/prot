import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import './productsection.scss';


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
    EffectFade,Navigation,Pagination
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([EffectFade,Navigation,Pagination]);



function ProductSection() {

    return (
        // <div className="product_container">
        //     {/* <h1>Word Counter is here...</h1> */}
        // </div>
        <>
            <div className="Product_section">
                <div className="swiper-container">
                    <Swiper spaceBetween={30} effect={'fade'} navigation={true} pagination={{
                        "clickable": true
                    }} className="mySwiper">

                        <SwiperSlide className='swipe__slide'>
                            <img 
                                src='images/borabora.jpg' 
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide className='swipe__slide'>
                            <img 
                                src='images/bali.jpg' 
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide className='swipe__slide'>
                            <img 
                                src='images/syd.jpg' 
                                alt=""
                            />
                        </SwiperSlide>

                        <SwiperSlide className='swipe__slide'>
                            <img 
                            src='images/ausyd.jpg' 
                            alt=""
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
export default ProductSection;