import ImageChip from "../ui/ImageChip";

const ArrivalProducts = ({image_1, image_2, image_3, image_4}) => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-4">
            <div className="w-full max-[328px]:h-[340px] max-[430px]:h-[350px] h-[500px] relative overflow-hidden">
                <img src={image_1} alt="arrivals-image" className="w-full h-full object-cover object-[50%_20%] hover:scale-105 transition-all duration-400 ease-in-out" />
                <ImageChip text="Women" className="absolute bottom-[8%] left-[10%] px-8 py-1.5 bg-white font-[550] font-template-primary" />
            </div>
            <div className="grid grid-cols-[55%_45%] h-full gap-4">
                <div className="w-full max-[328px]:h-[340px] max-[430px]:h-[350px] h-[500px] relative overflow-hidden">
                    <img src={image_2} alt="arrivals-image" className="w-full h-full object-cover object-[50%_20%] hover:scale-105 transition-all duration-400 ease-in-out" />
                    <ImageChip text="Accessories" className="absolute bottom-[6%] right-[8%] px-8 py-1.5 bg-white font-[550] font-template-primary" />
                </div>
                <div className="w-full max-[328px]:h-[340px] max-[430px]:h-[350px] h-[500px] flex flex-col justify-between">
                    <div className="w-full h-[48%] relative overflow-hidden" style={{background: 'radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #999999 100%)'}}>
                        <img src={image_3} alt="arrivals-image" className="w-full h-full object-contain object-center hover:scale-105 transition-all duration-400 ease-in-out" />
                        <ImageChip text="Kids" className="absolute bottom-[6%] left-[8%] px-8 py-1.5 bg-white font-[550] font-template-primary" />
                    </div>
                    <div className="w-full h-[48%] relative overflow-hidden">
                        <img src={image_4} alt="arrivals-image" className="w-full h-full object-cover object-center hover:scale-105 transition-all duration-400 ease-in-out" />
                        <ImageChip text="Men" className="absolute bottom-[6%] right-[8%] px-8 py-1.5 bg-white font-[550] font-template-primary" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArrivalProducts;