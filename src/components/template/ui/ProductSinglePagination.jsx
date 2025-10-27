import { cn } from "@/lib/utils";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ProductSinglePagination = ({leftChevronStyle = "text-black/40", rightChevronStyle = "text-black/40", iconSize = 22, classname = ""}) => {
    return(
        <div className={cn(`flex items-center gap-x-3`, classname)}>
            <button className={cn(`w-10 h-10 rounded-full cursor-pointer border border-black/20 flex justify-center items-center ${leftChevronStyle}`)}>
                <BsChevronLeft size={iconSize} />
            </button>
            <button className={cn(`w-10 h-10 rounded-full cursor-pointer border border-black/20 flex justify-center items-center ${rightChevronStyle}`)}>
                <BsChevronRight size={iconSize} />
            </button>
        </div>
    )
}

export default ProductSinglePagination;