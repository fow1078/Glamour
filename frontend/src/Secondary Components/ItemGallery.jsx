import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swipers.css";


function ItemGallery({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          // zIndex: '-1',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, ind) => {
          return <SwiperSlide key={ind}>
            <LazyLoadImage
              src={image}
              width={'100%'}
              height={'auto'}
              className='margin-xs-center img-xs-mw'
              alt={`image-${ind}`}
              effect="blur"
            />
          </SwiperSlide>
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, ind) => {
          return <SwiperSlide key={ind}>
            <LazyLoadImage
              src={image}
              width={'100%'}
              height={'auto'}
              className='margin-xs-center img-xs-mw'
              alt={`image-${ind}`}
              effect="blur"
            />
          </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}



export default ItemGallery;
