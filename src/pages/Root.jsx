import Views from "../components/view/Views";
import { Outlet } from "react-router";

const Root = () => {
    return(
        <Views>
            <Outlet />
        </Views>
    );
}

export default Root;