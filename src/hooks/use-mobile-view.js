import { useState, useCallback, useEffect } from "react";

const useMobileView = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMediaHandler] = useState(window.matchMedia("(max-width: 650px)"));

    const handleIsMobileView = useCallback(() => {
        const isMobile = isMediaHandler.matches;
        setIsMobile(isMobile);
    }, [])

    useEffect(() => {
        handleIsMobileView();
        window.addEventListener("resize", handleIsMobileView);
        return () => {
            window.removeEventListener("resize", handleIsMobileView);
        }
    }, [handleIsMobileView]);

    useEffect(() => {
        isMediaHandler.addEventListener("change", handleIsMobileView);
        return () => {
            isMediaHandler.removeEventListener("change", handleIsMobileView);
        }
    }, []);

    return {
        isMobile
    }
}

export {useMobileView};