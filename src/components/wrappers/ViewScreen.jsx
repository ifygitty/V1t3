import { useCustomStyles } from "@/hooks/custom-hooks";

const ViewScreen = ({children}) => {
    const {hiddenScrollbar} = useCustomStyles();
    return(
        <div className="w-screen h-screen overflow-y-auto overflow-x-hidden" style={hiddenScrollbar}>
            {children}
        </div>
    );
}

export default ViewScreen;