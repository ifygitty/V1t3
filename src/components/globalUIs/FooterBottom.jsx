import Text from "../template/ui/Text";

const FooterBottom = () => {
    return(
        <div className="py-5 w-full flex flex-col sm:flex-row justify-between items-center">
            <Text classname={"text-sm text-center sm:text-left font-template-primary font-medium capitalize"}>All Rights Reserved. <span onClick={() => window.open("https://salesive.com", "_blank")} className="text-template-primary cursor-pointer">@salesive</span></Text>
        </div>
    )
}

export default FooterBottom;