import { cn } from "@/lib/utils";

const BannerText = ({className, children, ...rest}) => {
    return(
        <div className={cn(`text-[29px]  font-semibold sm:leading-11 tracking-wide font-template-lora`, className)} {...rest}>
            {children}
        </div>
    );
}

export default BannerText;