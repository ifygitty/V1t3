import { useState } from "react";

const useCustomStyles = () => {
    const [hiddenScrollbar]= useState({
        scrollbarWidth: "none"
    });

    const [thinScrollbar] = useState({
        scrollbarWidth: "thin"
    })

    return {
        hiddenScrollbar,
        thinScrollbar
    }
}

export {useCustomStyles};