import { cn } from "@/lib/utils";

const Title = ({classname, title, ...rest}) => {
    return(
        <div className={cn(`text-[25.5px] font-template-primary font-[600]`, classname)} {...rest}>
            {title}
        </div>
    );
}

export default Title;