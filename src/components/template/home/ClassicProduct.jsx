import Title from "../ui/Title";
import "@/assets/styles/home/classic.css";
import ProductSinglePagination from "../ui/ProductSinglePagination";

const ClassicProduct = () => {
    return(
        <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-x-10 items-center">
                <div className="flex flex-col gap-y-10">
                    <Title classname={"text-center sm:text-left text-shadow-drop max-[540px]:text-[37px] text-[48px] leading-[1.15] mt-5 uppercase font-[500] sm:font-[450] tracking-wide text-white relative z-10"} title="Shop Classic Wears" />
                    <div className="flex flex-col">
                        <div className="py-3 text-[#B5B5B5] font-template-primary text-center border-b font-[500] border-template-whitesmoke sm:text-[30px] text-[20px] uppercase">Men</div>
                        <div className="pb-3 pt-2 text-white font-template-primary border-b font-[500] border-template-whitesmoke sm:text-[30px] text-[20px] uppercase">Women</div>
                        <div className="pb-3 pt-2 font-template-primary text-[#B5B5B5] font-[500] sm:text-[30px] text-[20px] text-right uppercase">Accessories</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="w-full">
                        <div className="hidden sm:block w-full h-20" />
                        <div className="max-[318px]:h-[300px] max-[430px]:h-[350px] h-[460px] w-full overflow-hidden">
                            <img src="/images/products/Frame 52.png" alt="frame 52" className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-300 ease-in-out" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="max-[318px]:h-[300px] max-[430px]:h-[350px] h-[460px] w-full overflow-hidden">
                            <img src="/images/products/Frame 53.png" alt="frame 52" className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-300 ease-in-out" />
                        </div>
                        <div className="hidden sm:flex w-full h-20 justify-center items-center">
                            <ProductSinglePagination leftChevronStyle="text-white/60 border-white/60" rightChevronStyle="text-white/60 border-white/60 ml-1.5" iconSize={22} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClassicProduct;