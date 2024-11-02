'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import React from 'react'
import  { Navigation, Thumbs, FreeMode, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper'
SwiperCore.use([Navigation,Thumbs]);
export default function Home() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState<any>(null);

  return (
    <div className={styles.page}>
      <div className="slider">
        <Swiper
          slidesPerView={1}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={true}
          className="swiper-main"
          autoplay={{delay: 3000}}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        >
          <SwiperSlide className="swiper-main">
            <Image src="https://place-hold.it/500x500" alt="" width={500} height={500}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://place-hold.it/500x500" alt="" width={500} height={500}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://place-hold.it/500x500" alt="" width={500} height={500}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://place-hold.it/500x500" alt="" width={500} height={500}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://place-hold.it/500x500" alt="" width={500} height={500}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://place-hold.it/500x500" alt="" width={500} height={500}/>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://place-hold.it/500x500" alt="" width={500} height={500}/>
          </SwiperSlide>
        </Swiper>
        <Swiper 
          direction={'vertical'} 
          className="swiper-thumbs" 
          navigation={true} loop={true} 
          onSwiper={setThumbsSwiper} 
          slidesPerView={4} 
          spaceBetween={34}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
        >    
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/100x100" alt="" width={100} height={100}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/100x100" alt="" width={100} height={100}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/100x100" alt="" width={100} height={100}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/100x100" alt="" width={100} height={100}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/100x100" alt="" width={100} height={100}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/100x100" alt="" width={100} height={100}/>
          </SwiperSlide>
          <SwiperSlide className="slide-thumb">
            <Image src="https://place-hold.it/100x100" alt="" width={100} height={100}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
