const { useState } = require("react")

const useViewConfig = () => {
    const [viewConfig, setViewConfig] = useState("");
    const [breakPoints] = useState(new Map([
        ["xs", "screen and (max-width: 640px)"],
        ["sm", "screen and (max-width: 768px)"],
        ["md", "screen and (max-width: 1024px)"],
        ["lg", "screen and (max-width: 1280px)"],
        ["xl", "screen and (max-width: 1536px)"]
    ]));

    useEffect(() => {
        const handleBreakPoint = () => {
            const currentBreakPoint = breakPoints.find(([key, value]) => window.matchMedia(value).matches);
            setViewConfig(currentBreakPoint[0]);
        }
        handleBreakPoint();
        window.addEventListener("resize", handleBreakPoint);
        return () => {
            window.removeEventListener("resize", handleBreakPoint);
        }
    }, [breakPoints]);
}