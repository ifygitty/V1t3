
import ViewWrapper from "../../components/wrappers/ViewWrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import React from "react";
import { TbChevronRight, TbChevronLeft} from "react-icons/tb";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import "swiper/css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import SwiperNav from "../../components/template/ui/SwiperNav";
import ViewContainer from "@/components/wrappers/ViewContainer";
import { TemplateBannerWithImage } from "@/components/template/ui";

const vision = [
    {
        title: "Our Mission",
        subtitle:
            "At Salesive, we redefine modern elegance with timeless clothing designed for those who value quality and sophistication. Every pece is crafted from premium fabrics with meticulous attention to details",
    },
    {
        title: "Our Vision",
        subtitle:
            "At Salesive, we redefine modern elegance with timeless clothing designed for those who value quality and sophistication. Every pece is crafted from premium fabrics with meticulous attention to details.",
    },
];

const items = [
    {
        id: 1,
        text: "The service was absolutely impeccable. I see myself and my family visiting here much more frequently.",
        author: "John Doe",
        image: "/images/about/testimny1.jpg",
    },
    {
        id: 2,
        text: "The service was absolutely impeccable. I see myself and my family visiting here much more frequently.",
        author: "Jane Doe",
        image: "/images/about/testimny2.jpg",
    },
    {
        id: 3,
        text: "The service was absolutely impeccable. I see myself and my family visiting here much more frequently.",
        author: "Sarah Lee",
        image: "/images/about/testimny3.jpg",
    },
    {
        id: 3,
        text: "The service was absolutely impeccable. I see myself and my family visiting here much more frequently.",
        author: "Sarah Lee",
        image: "/images/about/testimny3.jpg",
    },
    {
        id: 3,
        text: "The service was absolutely impeccable. I see myself and my family visiting here much more frequently.",
        author: "Sarah Lee",
        image: "/images/about/testimny3.jpg",
    },
];

export default function AboutUsRoute() {


    return (
        <React.Fragment>
            <TemplateBannerWithImage title="About" pathname_2="About" path_2="/about" />
            <div className="font-template-primary mb-10 ">
                <ViewWrapper>
                    <section className="max-w-6xl mx-auto py-16">

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h2 className="text-4xl font-medium mb-4 max-sm:text-2xl max-sm:text-center">
                                    Who we are
                                </h2>
                                <p className="text-gray-600 leading-relaxed max-sm:text-sm max-sm:text-center">
                                    At Salesive, we redefine modern elegance with timeless clothing designed
                                    for those who value quality and sophistication. Every piece is crafted
                                    from premium fabrics with meticulous attention to detail, blending
                                    classic style with contemporary design. Our mission is to create clothing
                                    that not only elevates your wardrobe but also tells a story of confidence,
                                    individuality, and refined taste.
                                </p>

                                <div className="flex gap-8 mt-8 max-md:hidden  items-center ">
                                    <div>
                                        <p className="text-2xl text-gray-700 font-medium">120+</p>
                                        <p className="text-gray-500 text-sm font-medium">Happy Customers</p>
                                    </div>
                                    <div className="w-px bg-gray-400 self-center h-6" />
                                    <div className="px-4">
                                        <p className="text-2xl text-gray-700 font-medium">10k+</p>
                                        <p className="text-gray-500 text-sm font-medium">Sold Products</p>
                                    </div>
                                    <div className="w-px bg-gray-400 self-center h-6" />
                                    <div className="px-4">
                                        <p className="text-2xl text-gray-700 font-medium">5</p>
                                        <p className="text-gray-500 text-sm font-medium">years</p>
                                    </div>
                                </div>

                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src="/images/curated/image21.jpg"
                                    alt="shirt"
                                    className="rounded-lg col-span-2 w-full h-[220px] max-sm:h-[170px] object-cover"
                                />
                                <div className="flex justify-center items-center">
                                    <img
                                        src="/images/curated/image22.jpg"
                                        alt="sweater"
                                        className="rounded-full w-[200px] h-[200px] object-cover max-md:hidden"
                                    />
                                </div>
                                <img
                                    src="/images/curated/image4.jpg"
                                    alt="blazer"
                                    className="rounded-lg w-full h-[200px] object-cover max-md:hidden"
                                />
                            </div>
                        </div>


                        <div className="flex gap-8 mt-8 max-md:flex-col md:hidden justify-center items-center text-center ">
                            <div className="px-4">
                                <p className="text-3xl text-gray-700 font-semibold">120+</p>
                                <p className="text-gray-500 text-sm font-medium">
                                    Happy Customers
                                </p>
                            </div>
                            <div className="px-4">
                                <p className="text-3xl text-gray-700 font-semibold">10k+</p>
                                <p className="text-gray-500 text-sm font-medium">Sold Products</p>
                            </div>
                            <div className="px-4">
                                <p className="text-3xl text-gray-700 font-semibold">5</p>
                                <p className="text-gray-500 text-sm font-medium">years</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mt-16">
                            {vision.map((vision, idx) => (
                                <div
                                    key={`${Date.now().toString(16)}-${idx}`}
                                    className="p-6 border border-gray-200 rounded-lg  max-sm:text-center"
                                >
                                    <h3 className="font-semibold text-xl mb-2">{vision.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed ">
                                        {vision.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>


                    </section>
                </ViewWrapper>
                <ViewWrapper classname={"py-15 bg-[#F7F7F7] relative"}>
                    <ViewContainer>
                        <div className="">
                            <div className="flex flex-col mb-8 gap-2 max-sm:text-center">
                                <h2 className="text-3xl font-semibold ">
                                    What Customers say about us
                                </h2>
                                <p className="leading-relaxed text-sm">At Salesive, we redefine modern elegance with timeless  clothing designed <br className="max-sm:hidden" /> for those who value quality and sophistication. </p>
                            </div>

                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={30}
                                slidesPerView={3}
                                allowTouchMove={false}
                                simulateTouch={false}                
                                touchStartPreventDefault={false}  
                                touchMoveStopPropagation={false}
                                style={{ touchAction: "pan-y" }}
                                
                                breakpoints={{
                                    0: {
                                    
                                        direction: "vertical",
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        direction: "horizontal",
                                        slidesPerView: 3,
                                    },
                                }}

                                className="max-md:max-h-[900px] max-md:h-[800px]"
                            >
                                {items.map((item, idx) => (
                                    <SwiperSlide key={`swiper-slide-${idx}`}>
                                        <div className="bg-white rounded-md  p-6 flex flex-col items-center text-center  h-fit">
                                            <img
                                                src={item.image}
                                                alt={item.author}
                                                className="w-16 h-16 rounded-full object-cover mb-4"
                                            />
                                            <p className="text-gray-600 text-sm  leading-relaxed mb-4">
                                                <RiDoubleQuotesL className="inline text-gray-300 mr-2 text-3xl align-middle" />
                                                
                                                {item.text}
                                                <RiDoubleQuotesR className="inline text-gray-300 ml-2 text-3xl align-middle" />
                                            </p>
                                          
                                            <p className="font-bold mt-auto">— {item.author}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <SwiperNav classname={'text-white relative'} button1={<button className='p-1 absolute left-0 z-20 bottom-30  text-gray-400 rounded-full text-3xl border border-gray-300 max-md:bottom-40' ><TbChevronLeft height={20} width={20}/></button>} button2={<button className='p-1 absolute z-20 bottom-30 right-0 text-gray-400 rounded-full text-3xl border border-gray-300 max-md:bottom-40' ><TbChevronRight height={20} width={20}/></button>}/>
                            </Swiper>
                        </div>
                        
                    </ViewContainer>
                </ViewWrapper>
            </div>
        </React.Fragment>
    );
}