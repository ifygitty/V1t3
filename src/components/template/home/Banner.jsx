import { cn } from "@/lib/utils";
import BannerText from "../ui/BannerText";
import { TemplateCollectionButton } from "../ui/Button";
import ViewWrapper from "@/components/wrappers/ViewWrapper";
import { Service } from "../ui/Services";

const services = [
    {
        id: 1, title:"Free Shipping", icon:"delivery", subtitle:"No-Cost Delivery"
    },
    {
        id: 2, title:"Satisfaction Guaranteed", icon:"heart", subtitle:"cozy seating"
    },
    {
        id: 3, title:"24/7 Support Service", icon:"head", subtitle:"cozy seating"
    },
    {
        id: 4, title:"Secure Checkout", icon:"check", subtitle:"Secure Payments"
    },

]

const Banner = () => {
    return(
        <div>
            <div className="h-[673px] w-full   grid-cols-1 md:grid-cols-[50%_50%] items-center hidden md:grid">
              
            <div className="pl-[8%] lg:pl-[16%] w-full h-full flex flex-col gap-y-5 bg-template-primary2 pt-40">
            <button className="self-center md:self-start text-black/80 py-2 rounded-full   text-[13px] font-template-primary font-medium">
                    LUXURY & <span className="bg-[#FFD1B2] p-1">PREMIUM</span>
                </button>
                <BannerText className={cn('text-black/95 max-[340px]:text-[26px] max-[340px]:leading-8 max-[510px]:text-[30px] max-[510px]:w-full max-[650px]:w-[80%] max-[650px]:mx-auto max-[768px]:text-center text-[30px] md:text-[45px] leading-9.5 md:leading-12 tracking-wider')}>
                    Reveal The Beauty <br /> In Your
                </BannerText>
                <div className="max-[768px]:text-center text-[15px] font-template-primary text-gray-500 leading-relaxed text-sm">Lorem ipsum tinincidunt felis nuila dictum lictus odio libero <br className="max-[1185px]:hidden " />  eusimod nisis nunc accumsam masta mi luctus in habitant <br className="max-[1185px]:hidden "/>  quis non habitant bibendum eget.</div>
                <TemplateCollectionButton text="Our Collections" classname="max-[768px]:self-center bg-variant-brown text-white font-medium self-start" size={15} />
            </div>
            
            <div className="w-full h-full">
                <img src="/images/banner/image1.jpg" alt="banner-image" className=" w-full h-full  object-cover" />
            </div>
        </div>
        <ViewWrapper classname={"md:hidden mb-10"}>
            <div className="h-fit  w-full grid  grid-cols-1  items-center">
   
            <div className=" w-full h-full flex flex-col gap-y-5 mb-5  pt-5">
            <button className="self-center md:self-start text-black/80 py-2 rounded-full   text-lg font-template-primary font-medium">
                    LUXURY & <span className="bg-[#FFD1B2] p-1 ">PREMIUM</span>
                </button>
                <BannerText className={cn('text-black/95    max-[510px]:w-full max-[650px]:w-[80%] max-[650px]:mx-auto max-[768px]:text-center text-[40px]  md:text-[45px]  md:leading-12 tracking-wide text-center font-template-badoni max-md:leading-10')}>
                    Reveal The <br className="sm:hidden"/> Beauty In Your
                </BannerText>
                <div className="text-center text-[15px] font-template-primary text-gray-600/90  max-sm:tracking-wider text-sm font-semibold">Lorem ipsum tinincidunt felis nuila dictum lictus odio libero eusimod nisis nunc accumsam masta mi luctus in habitant  quis non habitant bibendum eget.</div>
                <TemplateCollectionButton text="Our Collections" classname="max-[768px]:self-center bg-variant-brown text-white  self-start" size={15} />
            </div>
            
            <div className="w-full h-full">
                <img src="/images/banner/image1.jpg" alt="banner-image" className=" w-full h-full  object-cover" />
            </div>
        </div>
        </ViewWrapper>
        <ViewWrapper classname="bg-variant-brown py-10 font-medium font-template-badoni ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-md:gap-x-2">
            {services.map((service, index) => (
            <Service classname="text-[#FFFFFF] max-md:p-4 max-md:bg-[#644040] max-[846px]:text-sm max-sm:p-2" key={service.id} title={service.title} index={index} icon={service.icon} subtitle={service.subtitle}/>
            ))}
        </div>
        </ViewWrapper>


        
        </div>
               
    );
}

export default Banner;