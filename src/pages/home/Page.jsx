import ViewWrapper from "@/components/wrappers/ViewWrapper";
import CollectionText from "@/components/template/home/CollectionText";
import ViewContainer from "@/components/wrappers/ViewContainer";
import { useEffect,  useState } from "react";
import { curatedproducts } from "@/shared/data/products";
import Banner from "@/components/template/home/Banner";

import { TemplateProductCard, TemplateSinglePagination, TemplateTitle, TemplateTypography } from "@/components/template/ui";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperNav from "../../components/template/ui/SwiperNav";
import { TbChevronRight, TbChevronLeft} from "react-icons/tb";


import "swiper/css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { TemplateCollectionButton } from "@/components/template/ui/Button";
import HeroSection from "@/components/template/home/Hero";
import Banner3 from "@/components/template/home/Banner3";
// import { useGetListProducts } from "@/query/queryProducts";

const HomeRoute = () => {
    const [productsList, setProductsList] = useState([]);
    // const { data, isLoading, isError, error } = useGetListProducts();
    // console.log(data)

    useEffect(() => {
        setProductsList(curatedproducts);
    }, []);
    return(
        <div className="w-full">
           
                <ViewContainer>
                    <Banner />
                </ViewContainer>
            
            <ViewWrapper classname={"py-10 bg-template-whitesmoke"}>
                <ViewContainer>
                    <div className="">
                        <CollectionText title={<p>Curated Collections</p>} subtitle={<p>Lorem ipsum turpis non dignissim id neque accumsan lectus <br className="max-sm:hidden" /> mattis enim pretium congue eros sed dictumst</p>}/>
                    <div className="  mt-8  max-md:hidden">
                        <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={4}
                        allowTouchMove={false}
                        simulateTouch={false}                
                        touchStartPreventDefault={false}  
                        touchMoveStopPropagation={false}
                        style={{ touchAction: "pan-y" }}
                        
                       breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024:{
                                slidesPerView: 4,
                                spaceBetween: 20,
                            }
                            }}


                        className="max-md:max-h-[900px] max-md:h-[800px] mt-5  max-md:hidden"
                    >
                        {productsList?.map((product, idx) => (
                            <SwiperSlide key={`swiper-slide-${idx}`}>     
                            <TemplateProductCard  {...product} />
                            </SwiperSlide>
                        ))}
                        <SwiperNav classname={'text-white'} button1={<button className='p-1  text-white rounded-full text-3xl border border-white' ><TbChevronLeft height={20} width={20}/></button>} button2={<button className='p-1  text-white rounded-full text-3xl border border-white' ><TbChevronRight height={20} width={20}/></button>}/>
                    </Swiper>
                    </div>
                    
                    <div className="hidden mt-8 max-md:grid gap-5 grid-cols-2">
                        {productsList?.slice(0, 4).map((product, index) => (
                            <TemplateProductCard key={index}   {...product} />
                            
                        ))}
                    </div>
                    <div className=" flex justify-center items-center text-center w-full">
                        <TemplateCollectionButton text="View All Collection" classname="  bg-variant-brown text-white  text-center items-center justify-center mt-8" size={15} />
                    </div>
                    
                    </div>
                </ViewContainer>
            </ViewWrapper>
            <ViewWrapper classname={"bg-[#F6E6D9] relative overflow-hidden"}>
                <div className="absolute top-2 left-2 w-[350px] h-[350px] rounded-full border-[50px] border-variant-brown/5 translate-x-[-100px] translate-y-[-100px]"></div>
                <div className="absolute top-6 left-6 w-[250px] h-[250px] rounded-full border-[50px] border-variant-brown/5 translate-x-[-100px] translate-y-[-100px]"></div>
                <ViewContainer>
                    <HeroSection />
                    
                </ViewContainer>
            </ViewWrapper>
            <ViewWrapper classname={"py-15 "}>
                <ViewContainer>
                    <CollectionText title={<p>Order your favourite</p>} subtitle={<p>Lorem ipsum turpis non dignissim id neque accumsan lectus <br className="max-sm:hidden"/> mattis enim pretium congue eros sed dictumst</p>}/>
                    <div className=" mt-8 grid gap-5 grid-cols-2 lg:grid-cols-4">
                        {productsList?.map((product, index) => (
                            <TemplateProductCard key={index}   {...product} />
                            
                        ))}
                    </div>
                </ViewContainer>
            </ViewWrapper>
            
                <ViewContainer>
                    <Banner3 />
                </ViewContainer>
            
        </div>
    )
}

export default HomeRoute;