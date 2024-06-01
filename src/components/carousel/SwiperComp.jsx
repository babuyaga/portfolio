
import React, { Children, useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import SwiperCore, {Pagination,Navigation} from 'swiper';
import './swipercomp.scss';
// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


function swipearray(arr){
  return(  <SwiperSlide>{arr}</SwiperSlide>);
}


function SwiperComp({children}){
const [perView, setView] = useState(1);

const arrayChildren = Children.toArray(children);

console.log(arrayChildren);
useEffect(()=>{

  if(window.innerWidth > 1200){
      setView(3);
    }else if((window.innerWidth < 1200)&&(window.innerWidth > 900)){
  setView(2);
}else if(window.innerWidth < 900){
  setView(1)
}

},[]);

  return (
    <Swiper slidesPerView={perView} spaceBetween={0} slidesPerGroup={1} scrollbar={{ draggable: true }}  loop={true} loopFillGroupWithBlank={true} pagination={{
 "clickable": true
}} navigation={true} className="mySwiper">
        {arrayChildren.map(swipearray)}
 </Swiper>

  );
}

export default SwiperComp;
