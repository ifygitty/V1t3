import { useState } from "react";
import ViewWrapper from "../wrappers/ViewWrapper";
import { navIcons } from "../../shared/data/nav";
import { Link } from "react-router";

import { VerticalLineSeparator } from "@/customs/icons/CustomIcons";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';
import { FaHeadset } from 'react-icons/fa';

const TopNav = () => {
    const [navicons] = useState(navIcons);
    return(
        <div className="hidden min-[540px]:block w-full py-4 bg-template-primary2 text-black">
            <ViewWrapper classname="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-4 text-variant-brown max-md:gap-x-2">
                        {navicons.map(({id, icon:Icon, _link}) => (
                            <Link key={id} to={_link} target="_blank">
                                <Icon size={16} />
                            </Link>
                        ))}
                    </div>
                </div>
                    
                <div  className="text-[12px] font-[400] font-template-primary flex items-center justify-between gap-5 max-md:text-xs max-md:gap-2"><FaAngleLeft/> <p className="text-[16px] max-md:text-[13px]">Smell nice with our products, now 20% off</p> <FaAngleRight/></div>

                <div className="flex items-center gap-3 text-variant-brown max-md:text-xs max-md:gap-1">
                    <FaHeadset className="text-xl"/> <p className="text-[16px] max-md:text-[13px]">Help Center</p>
                </div>
                    
                
            </ViewWrapper>
        </div>
    );
}

export default TopNav;