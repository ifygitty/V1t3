import { useEffect } from "react";

const TextChip = ({text, isCurrentState, type, onClick, ...rest}) => {
    useEffect(() => {
        console.log(type);
    }, [type]);
    return(
        <div onClick={onClick} {...rest} className={`${isCurrentState[type] ? 'bg-black text-white' : 'text-black/50 bg-template-whitesmoke'} font-template-primary tracking-wide shrink-0 text-nowrap text-[14px] cursor-pointer py-2 px-4 rounded-full`}>
            {(text?.replace(/\_/g, " ")).replace(/\b\w/g, char => char.toUpperCase())}
        </div>
    )
}

export default TextChip;