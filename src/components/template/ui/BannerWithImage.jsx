import Title from "@/components/template/ui/Title";
import ViewWrapper from "@/components/wrappers/ViewWrapper";
import { PiCaretRightBold } from "react-icons/pi";
import { Link } from "react-router";

const BannerWithImage = ({image_url = "/images/banner/image6.jpg", title, path_1 = "/", pathname_1 = "Home", path_2 = "/shop", pathname_2 = "Shop" }) => {
    return(
        <ViewWrapper classname={"py-15 h-full min-h-70 relative z-10 bg-cover bg-center bg-no-repeat flex justify-center items-center"} style={{
            backgroundImage: `url(${image_url})`
        }}>
            <div className="absolute -z-10 inset-0 w-full h-full bg-[rgba(0,0,0,0.15)]" />
            <div className="w-[280px] min-[650px]:w-[300px] min-[768px]:w-[350px] pt-7 pb-4 bg-white/35 leading-14 rounded-lg border-[1.5px] border-white/50">
                <Title classname={"text-center text-[35px] min-[650px]:text-[38px] min-[768px]:text-[45px] font-template-primary font-medium capitalize"} title={title} />
                <div className="flex items-center justify-center gap-x-1">
                    <Link className="text-sm min-[650px]:text-base font-[550] font-template-primary cursor-pointer" to={path_1}>{pathname_1}</Link>
                    <PiCaretRightBold size={18} />
                    <Link className="text-sm min-[650px]text-base font-[400] font-template-primary cursor-pointer" to={path_2}>{pathname_2}</Link>
                </div>
            </div>
        </ViewWrapper>
    );
}

export default BannerWithImage;