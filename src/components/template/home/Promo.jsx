import Title from "../ui/Title";

const Promo = () => {
    return(
        <div className="flex flex-col gap-y-10">
            <Title classname="w-full text-center md:text-left md:w-[55%] max-[540px]:text-[26px] text-[30px] font-template-primary font-[500] leading-[1.15] tracking-wide capitalize" title="Shop with us and get discounts on top products" />
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 h-[400px] sm:h-[300px]">
                <div className="w-full h-full relative overflow-hidden">
                    <img src="/images/promo/image-product-12.png" alt="promo" className="w-full h-full object-cover md:object-contain object-center hover:scale-105 transition-all duration-400 ease-in-out" />
                </div>
                <div className="w-full h-[70%] relative overflow-hidden">
                    <img src="/images/promo/image-product-9.png" alt="promo" className="w-full h-full object-cover md:object-contain object-center hover:scale-105 transition-all duration-400 ease-in-out" />
                </div>
                <div className="w-full col-start-2 col-end-2 row-start-2 row-end-2 sm:col-auto sm:row-auto h-full relative overflow-hidden">
                    <img src="/images/promo/05.png" alt="promo" className="w-full h-full object-cover md:object-contain object-center hover:scale-105 transition-all duration-400 ease-in-out" />
                </div>
                <div className="self-end w-full h-[70%] relative overflow-hidden">
                    <img src="/images/promo/image-product-10.png" alt="promo" className="w-full h-full object-cover md:object-contain object-center hover:scale-105 transition-all duration-400 ease-in-out" />
                </div>
                <div className="hidden md:block w-full h-full relative overflow-hidden">
                    <img src="/images/promo/image-product-8.png" alt="promo" className="w-full h-full object-contain object-center hover:scale-105 transition-all duration-400 ease-in-out" />
                </div>
            </div>
        </div>
    )
};

export default Promo;