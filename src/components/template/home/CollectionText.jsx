// import { TemplateButtonWithCartIcon } from "../ui/Button";

const CollectionText = ({title, subtitle}) => {
    return(
        <div className="flex flex-col items-center text-center">
            <div className="max-sm:text-[31px] text-[45.5px] font-template-lora   tracking-wider font-medium ">{title}</div>
            <div className="text-[15.5px] font-template-primary tracking-wide text-gray-600 font-mediums max-sm:text-[12px]">{subtitle}</div>
        </div>
           
    )
}

export default CollectionText