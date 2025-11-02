import { GoChevronRight } from "react-icons/go";
import { LuFacebook, LuInstagram, LuMail, LuTwitter } from "react-icons/lu";
import { Link } from "react-router";

const Footer = () => {
    return(
        <div className="w-full max-[568px]:w-[80%] max-[568px]:mx-auto pb-8 border-b-2 border-dashed border-template-primary/20 grid grid-cols-1 md:grid-cols-[40%_60%] gap-10">
            <div className="w-full h-auto">
                <div className="w-full md:w-[60%] h-full flex gap-10 md:gap-0 flex-col justify-between max-md:gap-0">
                    <div className=" font-medium text-[30px] text-variant-brown font-template-badoni mb-2 max-md:flex max-md:justify-center">
                                Smell Nice
                            </div>
                    <div className="flex flex-col gap-y-3 max-md:gap-y-1">
                        <div className="leasing relaxed text-gray-500 font-template-clash ">
                            <div className="max-md:flex max-md:justify-center max-md:text-center max-md:mb-3">Lorem ipsum consequat neque sed erat id mauris non eu c nunc sed enim egestas landit sit teilus proin</div>
                        </div>
                        <div className="flex max-md:justify-center gap-x-4 max-md:text-center">
                            <div className="w-8 h-8 rounded-full flex bg-white justify-center items-center">
                                <LuFacebook size={18} />
                            </div>
                            <div className="w-8 h-8 rounded-full flex bg-white justify-center items-center">
                                <LuInstagram size={18} />
                            </div>
                            <div className="w-8 h-8 rounded-full flex bg-white justify-center items-center">
                                <LuTwitter size={18} />
                            </div>
                            <div className="w-8 h-8 rounded-full flex bg-white justify-center items-center">
                                <LuMail size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid max-[568px]:grid-cols-2 max-[568px]:gap-y-8 grid-cols-3">
                <div className="w-full flex flex-col gap-y-4 font-template-clash">
                    <div className="text-[18px] font-[550]">Shop</div>
                    <div className="flex flex-col gap-y-1.5">
                        <Link className="text-[16px] cursor-pointer" to={"/"}>My Account</Link>
                        <Link className="text-[16px] cursor-pointer" to={"/"}>Login</Link>
                        <Link className="text-[16px] cursor-pointer" to={"/"}>Wishlist</Link>
                        <Link className="text-[16px] cursor-pointer" to={"/"}>Cart</Link>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-y-4 font-template-clash">
                    <div className="text-[18px] font-[550]">Information</div>
                    <div className="flex flex-col gap-y-1.5">
                        <Link className="text-[16px] cursor-pointer" to={"/"}>Shipping Policy</Link>
                        <Link className="text-[16px] cursor-pointer" to={"/"}>Returns & Refunds</Link>
                        <Link className="text-[16px] cursor-pointer" to={"/"}>Cookies Policy</Link>
                        <Link className="text-[16px] cursor-pointer" to={"/"}>Frequently asked</Link>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-y-4 font-template-clash">
                    <div className="text-[18px] font-[550]">Company</div>
                    <div className="flex flex-col gap-y-1.5">
                        <Link className="text-[16px] cursor-pointer" to={"/"}>About Us</Link>
                        <Link className="text-[16px] cursor-pointer" to={"/"}>Privacy Policy</Link>
                        <Link className="text-[16px] cursor-pointer" to={"/"}>Terms & Conditions</Link>
                        <Link className="text-[16px] cursor-pointer" to={"/"}>Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;