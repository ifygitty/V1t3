import React from 'react'
import { useSwiper } from "swiper/react";

import { cn } from "@/lib/utils";

const SwiperNav = ({button1, button2,classname, }) => {
    const swiper = useSwiper();
  return (
    <div className={cn(`flex justify-between absolute top-1/3 left-0 right-0 z-10 max-md:top-16 ${classname}`)}>
        {/* <button className='p-1  text-gray-600 rounded-full text-3xl border border-gray-400' onClick={() => swiper.slidePrev()}><TbChevronLeft height={20} width={20}/></button> */}
        <div onClick={() => swiper.slidePrev()}>{button1}</div>
        <div onClick={() => swiper.slideNext()}>{button2}</div>
        {/* <button className='p-1 text-gray-600 rounded-full  text-3xl border border-gray-400' onClick={() => swiper.slideNext()}><TbChevronRight height={15}/></button> */}
    </div>
  )
}

export default SwiperNav