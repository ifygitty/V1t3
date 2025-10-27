import { cn } from "@/lib/utils";

const Text = ({classname, children, ...rest}) => {
    return(
        <div className={cn(`text-[15px] font-template-primary text-black/80`, classname)} {...rest}>
            {children}
        </div>
    );
}

export default Text;