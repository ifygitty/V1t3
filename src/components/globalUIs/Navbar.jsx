import { useDeferredValue, useEffect, useRef, useState } from "react";
import { navlinks } from "../../shared/data/nav";
import { Link } from "react-router";
import ViewWrapper from "../wrappers/ViewWrapper";
import { CiSearch } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { PiHeartLight } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";
import { HiSlash } from "react-icons/hi2";
import { IoMenu } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { useNavStyleLogic } from "@/shared/state";
import { AnimatePresence, motion } from "framer-motion";
import { LiaTimesSolid } from "react-icons/lia";
import { HiOutlineChevronDown } from "react-icons/hi2";
import Text from "../template/ui/Text";
import { useSalesiveConfig } from "salesive-dev-tools";

const Navbar = () => {
    const navs = useDeferredValue(navlinks);
    const {isNavColored} = useNavStyleLogic();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const storeName = useSalesiveConfig("app-name");

    const mobileMenuContainer = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const mobileMenu = mobileMenuContainer.current;
            
            if (isMobileNavOpen && 
                !mobileMenu?.contains(event.target)) {
                setIsMobileNavOpen(false);
            }
        };

        const handleRouteChange = () => {
            setIsMobileNavOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('popstate', handleRouteChange);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, [isMobileNavOpen]);

    return(
        <div className="w-full font-template-primary" ref={mobileMenuContainer}>
            <AnimatePresence mode="wait">
                <div className={cn("py-6", isNavColored ? "bg-white" : "")}>
                    <ViewWrapper classname="flex items-center justify-between ">
                            <div className=" font-bold text-[30px] text-variant-brown font-template-badoni">
                               {storeName}
                            </div>
                            <div className="hidden md:flex items-center gap-x-8 text-[#999999]">
                                {navs.map((navlink) => (
                                    <Link key={navlink.id} to={navlink._path} className="font-template-primary text-sm capitalize font-[550]">{navlink._name}</Link>
                                ))}                
                            </div>
                            <IoMenu onClick={() => setIsMobileNavOpen(true)} size={30} className="md:hidden" />
                            <div className="hidden md:flex items-center gap-x-8">
        
                                <div className="flex items-center gap-x-1">
                                    <div className="flex items-center gap-x-1 ">
                                        <AiOutlineUser className="text-variant-brown" size={16} />
                                        <Link to={'/login'} className="font-template-primary text-xs text-variant-brown font-[550]">Login</Link>
                                    </div>
                                    <HiSlash className="text-variant-brown" size={16} />
                                    <Link to={'/register'} className="font-template-primary text-variant-brown text-xs font-[550]">Sign up</Link>
                                </div>
                                <div className="flex items-center gap-x-4">
                                    <CiSearch className="text-variant-brown" size={18} />
                                    <div className="relative cursor-pointer">
                                        <BsCart className="text-variant-brown" size={16} />
                                        <span className="absolute -top-2 -right-1.5 inline-flex items-center justify-center text-xs text-variant-brown rounded-full">0</span>
                                    </div>
                                    <div className="relative cursor-pointer">
                                        <PiHeartLight className="text-variant-brown" size={16} />
                                        <span className="absolute -top-2 -right-1.5 inline-flex items-center justify-center text-xs text-variant-brown rounded-full">0</span>
                                    </div>
                                </div>
                            </div>
                    </ViewWrapper>
                </div>
                {isMobileNavOpen ? (
                    <motion.div initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y: -100, opacity: 0}} transition={{ease: "linear", type: "spring"}} className={`fixed top-0 left-0 z-50 w-full py-4 px-[4%] ${isNavColored ? "bg-template-whitesmoke" : "bg-white"}`}>
                        <div className="flex flex-col gap-y-1">
                            <div className="flex items-center justify-between">
                                <div className="w-[140px] h-[25px] relative">
                                    <div className=" font-bold text-[30px] text-variant-brown font-template-badoni max-sm:text-[20px]">
                                {storeName}
                            </div>
                                </div>
                                <LiaTimesSolid onClick={() => setIsMobileNavOpen(false)} size={30} className="md:hidden" />
                            </div>
                            <div className="py-4 px-3 flex flex-col">
                                <Link onClick={() => setIsMobileNavOpen(false)} to="/" className="py-2 text-[19px] font-template-clash">Home</Link>
                                <Link onClick={() => setIsMobileNavOpen(false)} to="/shop" className="py-2 text-[19px] font-template-clash">Shop</Link>
                                <Link onClick={() => setIsMobileNavOpen(false)} to="/about" className="py-2 text-[19px] font-template-clash">About</Link>
                                <Link onClick={() => setIsMobileNavOpen(false)} to="/blog" className="py-2 text-[19px] font-template-clash">Blog</Link>
                                <Link onClick={() => setIsMobileNavOpen(false)} to="#" className="py-2 text-[19px] font-template-clash">Contact</Link>
                            </div>
                            <div className="px-3 flex flex-col">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-x-1">
                                        <div className="flex items-center gap-x-1">
                                            <AiOutlineUser className="text-template-primary" size={16} />
                                            <Link to={'/login'} className="font-template-clash text-base text-template-primary font-[550]">Login</Link>
                                        </div>
                                        <HiSlash className="text-template-primary" size={16} />
                                        <Link to={'/register'} className="font-template-clash text-base text-template-primary font-[550]">Sign up</Link>
                                    </div>
                                    <div className="flex items-center gap-x-4">
                                        <CiSearch className="text-template-primary" size={20} />
                                        <div className="relative cursor-pointer">
                                            <BsCart className="text-template-primary" size={20} />
                                            <span className="absolute -top-2 -right-1.5 inline-flex items-center justify-center text-xs text-template-primary rounded-full">0</span>
                                        </div>
                                        <div className="relative cursor-pointer">
                                            <PiHeartLight className="text-template-primary" size={20} />
                                            <span className="absolute -top-2 -right-1.5 inline-flex items-center justify-center text-xs text-template-primary rounded-full">0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : null}            
            </AnimatePresence>
        </div>
    );
}

export default Navbar;