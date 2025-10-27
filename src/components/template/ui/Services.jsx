
import { TbTruckDelivery } from 'react-icons/tb';
import { TbHeartbeat } from 'react-icons/tb';
import { PiHeadCircuitLight } from 'react-icons/pi';
import { LuBadgeCheck } from 'react-icons/lu';
import { cn } from "@/lib/utils";

const Service = ({title, classname,icon, subtitle , ...rest}) => {
    return(
        <div className={cn(`  flex flex-col  gap-2  ${classname}`)} {...rest}>
            <div className='font-template-badoni  md:text-[17px] lg:text-[20px] max-md:text-[18px] max-sm:font-medium max-sm:text-sm max-[450px]:text-xs'>{title}</div>
            <div className='flex items-center gap-2 font-template-badoni max-sm:gap-1'>
                <div className='text-3xl max-sm:lg'>
                    {icon === "delivery" ? <TbTruckDelivery /> : icon === "heart"? <TbHeartbeat /> : icon === "head"? <PiHeadCircuitLight /> : <LuBadgeCheck />}
                </div>
                
            <span className="text-sm text-nowrap font-template-primary max-sm:text-xs">{subtitle}</span>
            </div> 
        </div>
    );
}

export {Service};