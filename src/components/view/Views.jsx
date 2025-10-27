import { HiOutlineChevronDown } from "react-icons/hi2";
import Footer from "../globalUIs/Footer";
import Navbar from "../globalUIs/Navbar";
import TopNav from "../globalUIs/TopNav";
import ViewContainer from "../wrappers/ViewContainer";
import ViewFit from "../wrappers/ViewFit";
import ViewScreen from "../wrappers/ViewScreen";
import ViewWrapper from "../wrappers/ViewWrapper";
import Text from "../template/ui/Text";
import FooterBottom from "../globalUIs/FooterBottom";

const Views = ({children}) => {
    return(
        <ViewScreen>
            <ViewFit>
                <TopNav />
                <Navbar />
                {children}
                <ViewWrapper classname={"pt-15 bg-template-whitesmoke"}>
                    <ViewContainer>
                        <Footer />
                    </ViewContainer>
                    <ViewContainer>
                        <FooterBottom />
                    </ViewContainer>
                </ViewWrapper>
            </ViewFit>
        </ViewScreen>
    );
}

export default Views;