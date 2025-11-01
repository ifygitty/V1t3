import { MdStar, MdStarOutline } from "react-icons/md";
import { useEffect, useState } from "react";
import { CgShoppingCart } from 'react-icons/cg';
import { BiSolidCart } from 'react-icons/bi';



const ProductCard = ({image_url, product_name, price,}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [mediahandler] = useState(window.matchMedia("(max-width: 568px)"));
    
    const [addToCart, setAddToCart] = useState(false); // for now

    useEffect(() => {
        if(mediahandler.matches){
            setIsMobile(true);
        }else{
            setIsMobile(false);
        }
    }, [mediahandler]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            if(mediahandler.matches){
                setIsMobile(true);
            }else{
                setIsMobile(false);
            }
        });
        return () => {
            window.removeEventListener("resize", () => {
                if(mediahandler.matches){
                    setIsMobile(true);
                }else{
                    setIsMobile(false);
                }
            });
        }
    }, []);

    return(
            <div onClick={() => location.href='/product-detail/1'} className="w-full relative max-[318px]:h-[13rem] max-[430px]:h-[14rem] h-[20rem] bg-template-whitesmoke overflow-hidden group">
                <img src={image_url || "/images/products/Frame 52.png"} alt={`${image_url?.split("/").pop()?.split(".")[0]}`} className="w-full h-full object-cover object-[50%_20%] hover:scale-105 transition-all duration-400 ease-in-out group-hover:scale-105 group-active:scale-105 group-active:duration-150 touch-manipulation" />

                <div className=" flex justify-between absolute bg-white/40 text-black/80 z-10 bottom-0 p-2 w-full font-template-lora">
                <div className="text-[13px] sm:text-[16.5px] font-template-primary font-[550] sm:tracking-wide flex flex-col max-sm:text-[10px]">
                    <div>{product_name}</div><div>{price}</div>
                </div>
                    
                    <div className="flex w-8 h-8  rounded-full bg-white p-1  gap-x-2 sm:gap-x-3">
                        {!addToCart && <CgShoppingCart onClick={() => setAddToCart(true)} className="text-black/60 cursor-pointer" size={22} />}
                        {addToCart && <BiSolidCart onClick={() => setAddToCart(false)} className="text-template-primary cursor-pointer" size={22} />}
                    </div>
            
            </div>
            </div>
        
    );
}

export default ProductCard;

