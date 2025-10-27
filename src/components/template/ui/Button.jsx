import { FaArrowRight } from 'react-icons/fa6';
import { cn } from "@/lib/utils";

const TemplateCollectionButton = ({text, classname, size = 15, ...rest}) => {
    return(
        <button className={cn(`px-8 py-4 flex items-center gap-4 text-gray-300 ${classname}`)} {...rest}>
            <FaArrowRight size={size} />
            <span className="text-[18px] text-nowrap font-template-primary">{text}</span>
        </button>
    );
}

export {TemplateCollectionButton};