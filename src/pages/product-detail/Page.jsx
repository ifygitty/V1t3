import ViewContainer from "@/components/wrappers/ViewContainer";
import ViewWrapper from "@/components/wrappers/ViewWrapper";
import { RxCaretLeft, RxCaretRight, RxCaretUp } from "react-icons/rx";
import { RxShare2 } from "react-icons/rx";
import { GoHeart } from "react-icons/go";
import { SlRefresh } from "react-icons/sl";
import { HiMinus, HiPlus } from "react-icons/hi2";
import { IoIosStar } from "react-icons/io";
import { useNavStyleLogic } from "@/shared/state";
import { useDeferredValue, useEffect, useState } from "react";
import { bestSellingProducts, productDetailImages } from "@/shared/data/shop-data";
import { MAIN_PRODUCT_INDEX } from "@/shared/constants";
import { LikeFill, LikeOutline } from "@/customs/icons/CustomIcons";
import { ShopTopSelling } from "@/components/template/shop/sections";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router";
import { useMobileView } from "@/hooks/use-mobile-view";
import Banner3 from "@/components/template/home/Banner3";

const ProductDetailRoute = () => {
    const {setIsNavColored} = useNavStyleLogic();
    const detailImages = useDeferredValue(productDetailImages);
    const topsellingProducts = useDeferredValue(bestSellingProducts);
    const [displayedImage, setDisplayedImage] = useState(MAIN_PRODUCT_INDEX);
    const [quantity, setQuantity] = useState(2);
    const [currentCommentCount, setcurrentCommentCount] = useState(1);

    const {isMobile} = useMobileView();

    useEffect(() => {
        setIsNavColored(true);
    }, []);

    const handleShare = async (e) => {
        e.preventDefault();
        const url = e.currentTarget.dataset.url;
        
        try {
            if (navigator.share) {
                await navigator.share({
                    title: document.title,
                    text: 'Check out this product!',
                    url: url
                });
            } else if (navigator.clipboard) {
                await navigator.clipboard.writeText(url);
                alert('Link copied to clipboard!');
            } else {
                const textArea = document.createElement('textarea');
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                alert('Link copied to clipboard!');
            }
        } catch (error) {
            console.error('Error sharing:', error);
        }
    }
    return(
        <div className="w-full">
            <ViewWrapper classname={"py-7"}>
                <ViewContainer>
                    <div className="flex flex-col flex-wrap shrink min-[630px]:flex-nowrap gap-y-8">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="font-template-primary">
                                    <BreadcrumbLink asChild>
                                        <Link href="/">Home</Link>
                                    </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator />
                                <BreadcrumbItem className="font-template-primary">
                                    <BreadcrumbLink asChild>
                                        <Link href="#">Woman</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="font-template-primary">
                                    <BreadcrumbLink asChild>
                                        <Link href="#">Woman's Shirts &amp; Tops</Link>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem className="font-template-primary">
                                    <BreadcrumbPage>Long Sleeve Overshirt, Khaki, 6</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                        <div className="w-full grid grid-cols-1 md:grid-cols-[45%_55%] gap-12">
                            <div className="w-full flex flex-col gap-y-2">
                                <div className="grid grid-cols-1 min-[520px]:grid-cols-[85%_15%] min-[530px]:grid-cols-[90%_10%] gap-2 min-[530px]:gap-4">
                                    <div className="w-[435px] h-[500px]  rounded-md overflow-hidden group max-sm:w-full">
                                        <img className="w-full h-full object-cover  aspect-square hover:scale-110 transition-all duration-500 ease-in-out group-hover:scale-110 group-active:scale-110 group-active:duration-250 group-active:touch-manipulation" src={`${detailImages[displayedImage]._path}`} alt={detailImages[displayedImage]._name} />
                                    </div>
                                    <div className="max-[520px]:hidden h-auto flex flex-col justify-between">
                                        <div className="flex flex-col gap-y-3">
                                            <div data-url="https://v1-salesive-template1/product-detail/2" onClick={handleShare} className="w-10 h-10 min-[530px]:w-8 min-[530px]:h-8 rounded-md bg-template-whitesmoke flex justify-center items-center">
                                                <RxShare2 size={18} />
                                            </div>
                                            <div className="w-10 h-10 min-[530px]:w-8 min-[530px]:h-8 rounded-md bg-template-whitesmoke flex justify-center items-center">
                                                <GoHeart size={18} />
                                            </div>
                                        </div>
                                        <div className="my-0 min-[530px]:-my-5 flex flex-col gap-y-3">
                                            {displayedImage !== 5 ? (
                                                <div onClick={() => setDisplayedImage(MAIN_PRODUCT_INDEX)} className="w-10 h-10 min-[530px]:w-8 min-[530px]:h-8 rounded-md bg-template-whitesmoke flex justify-center items-center">
                                                    <SlRefresh size={18} />
                                                </div>
                                            ) : null}
                                            <div onClick={() => setDisplayedImage(prev => Math.max(0, prev - 1))} className="w-10 h-10 min-[530px]:w-8 min-[530px]:h-8 rounded-md bg-template-whitesmoke flex justify-center items-center">
                                                <RxCaretLeft size={18} />
                                            </div>
                                            <div onClick={() => setDisplayedImage(prev => {
                                                if (prev < detailImages.length - 1) {
                                                    return prev + 1;
                                                }else {
                                                    return 0;
                                                }
                                            })} className="w-10 h-10 min-[530px]:w-8 min-[530px]:h-8 rounded-md bg-template-whitesmoke flex justify-center items-center">
                                                <RxCaretRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full min-[540px]:w-[85%] grid grid-cols-5 gap-3 ">
                                    {detailImages?.filter(item => !!item.isVariant)?.map((item, idx) => (
                                        <div onClick={() => setDisplayedImage(idx)} key={`detail-image-${item.id}`} className={`w-full h-18 rounded-md bg-template-whitesmoke ${idx === displayedImage ? "border-template-primary border-2" : ""}`}>
                                            <img className="w-full h-full object-cover rounded-md  aspect-square" src={item._path} alt={item._name} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <div className="pb-3 border-b-[1.5px] border-dashed border-template-primary/40">
                                    <div className="flex flex-col gap-y-2">
                                        <div className="text-sm font-[400] text-black/60 font-template-primary">John Lewis ANYDAY</div>
                                        <div className="text-[17px] font-[550] min-[768px]:text-[20px] min-[768px]:font-[500] font-template-primary">Long Sleeve Overshirt, Khaki, 6</div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-x-4">
                                                <div className="text-sm font-[400] text-black/60 font-template-primary line-through">$40.00</div>
                                                <div className="text-[19px] font-[600] font-template-primary">$28.00</div>
                                            </div>
                                            <div className="flex items-center gap-x-4">
                                                <div className="text-sm text-black/60 font-[400] font-template-primary">1,248 Sold</div>
                                                <div className="flex items-center gap-x-1">
                                                    <IoIosStar size={15} className="text-template-orange" />
                                                    <div className="text-sm font-[500] font-template-primary">4.5</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <div className="text-[15px] font-bold font-template-primary">Description:</div>
                                    <div className="text-[14.5px] min-[650px]:text-[15.5px] font-[400] font-template-primary">Boba etiam ut bulla tea est potus dilectus singulari compositione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte tea nigro sapiuntur. Boba phaenomenon.<span className="font-[550] cursor-pointer"> See More...</span></div>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <div className="text-sm font-[400] font-template-primary">Color: <span className="font-[550]">Royal Brown</span></div>
                                    <div className="w-[80%] min-[560px]:w-[45%] grid grid-cols-4 gap-x-2">
                                        <div className="w-full h-8 rounded-md bg-template-whitesmoke border-[1.5px] border-template-primary">
                                            <div className="w-full h-full bg-variant-brown rounded-sm scale-80" />
                                        </div>
                                        <div className="w-full h-8 rounded-md">
                                            <div className="w-full h-full rounded-md bg-variant-dark-gray" />
                                        </div>
                                        <div className="w-full h-8 rounded-md">
                                            <div className="w-full h-full rounded-md bg-variant-dark-blue" />
                                        </div>
                                        <div className="w-full h-8 rounded-md">
                                            <div className="w-full h-full rounded-md bg-variant-black" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <div className="text-sm font-[400] font-template-primary">Size: <span className="font-[550]">8</span></div>
                                    <div className="w-full min-[560px]:w-[70%] flex min-[560px]:grid min-[560px]:grid-cols-6 gap-3 overflow-auto" style={{scrollbarWidth: "none"}}>
                                        <div className="w-16 min-[560px]:w-full h-10 shrink-0 min-[560px]:h-8 rounded-md border border-template-whitesmoke flex items-center justify-center font-template-primary">6</div>
                                        <div className="w-16 min-[560px]:w-full h-10 shrink-0 min-[560px]:h-8 rounded-md bg-template-whitesmoke border border-template-whitesmoke font-bold flex items-center justify-center font-template-primary">8</div>
                                        <div className="w-16 min-[560px]:w-full h-10 shrink-0 min-[560px]:h-8 rounded-md border border-template-whitesmoke flex items-center justify-center font-template-primary">10</div>
                                        <div className="w-16 min-[560px]:w-full h-10 shrink-0 min-[560px]:h-8 rounded-md border border-template-whitesmoke flex items-center justify-center font-template-primary">14</div>
                                        <div className="w-16 min-[560px]:w-full h-10 shrink-0 min-[560px]:h-8 rounded-md border border-template-whitesmoke flex items-center justify-center font-template-primary">18</div>
                                        <div className="w-16 min-[560px]:w-full h-10 shrink-0 min-[560px]:h-8 rounded-md border border-template-whitesmoke flex items-center justify-center font-template-primary">20</div>
                                    </div>
                                </div>
                                <div className="mt-6 w-full min-[650px]:w-[80%] grid grid-cols-3 gap-5">
                                    <div className="col-span-2 w-[60%] min-[650px]:col-auto min-[520px]:w-full flex">
                                        <div className="flex">
                                            <button onClick={() => setQuantity((prev) => Math.max(0, prev - 1))} className="px-1.5 py-2.5 border-[1.5px] border-[#ccc] rounded-tl-sm rounded-bl-sm">
                                                <HiMinus size={20} />
                                            </button>
                                        </div>
                                        <input value={quantity} type="text" className="h-auto w-full border-t-[1.5px] border-b-[1.5px] border-[#ccc] text-center font-template-primary font-[550]" />
                                        <div className="flex">
                                            <button onClick={() => setQuantity(prev => prev + 1)} className="px-1.5 py-2.5 border-[1.5px] border-[#ccc] rounded-tr-sm rounded-br-sm">
                                                <HiPlus size={20} />
                                            </button>
                                        </div>
                                    </div>
                                    <button onClick={() => location.href = "/cart"} className="col-span-3 min-[650px]:col-auto w-full py-2.5 bg-variant-brown text-white font-template-primary font-[450] text-sm rounded-sm">Add To Cart</button>
                                    <button onClick={() => location.href = "/cart/checkout"} className="col-span-3 min-[650px]:col-auto w-full py-2.5 bg-template-whitesmoke text-black font-template-primary font-[450] text-sm rounded-sm">Checkout Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ViewContainer>
            </ViewWrapper>
            <ViewWrapper classname={"py-12"}>
                <ViewContainer>
                    <div className="flex flex-col gap-y-4">
                        <div className="hidden min-[650px]:block text-[20px] font-[580] font-template-primary">Product Reviews</div>
                        <div className="hidden min-[650px]:grid grid-cols-[30%_70%] w-full px-4 py-6 border border-black/10 rounded-md">
                            <div className="flex gap-x-2">
                                <div className="relative z-10">
                                    <svg width="61" height="60" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M80.6001 40.0497C80.6001 49.2807 77.3993 58.2262 71.5432 65.362C65.687 72.4977 57.5379 77.3821 48.4842 79.183C39.4305 80.9839 30.0324 79.5898 21.8913 75.2383C13.7502 70.8868 7.36984 63.8471 3.83726 55.3187C0.304676 46.7903 -0.161511 37.3009 2.51813 28.4673C5.19777 19.6337 10.8574 12.0025 18.5328 6.87402C26.2082 1.74551 35.4243 -0.563015 44.6109 0.341787C53.7976 1.24659 62.3862 5.30874 68.9136 11.8361L66.0923 14.6575C60.2176 8.78283 52.4878 5.1269 44.2198 4.31258C35.9519 3.49825 27.6573 5.57593 20.7495 10.1916C13.8417 14.8072 8.748 21.6753 6.33632 29.6255C3.92465 37.5758 4.34422 46.1163 7.52354 53.7918C10.7029 61.4674 16.4452 67.8031 23.7722 71.7195C31.0992 75.6358 39.5574 76.8905 47.7057 75.2697C55.8541 73.6489 63.1883 69.2529 68.4589 62.8307C73.7294 56.4086 76.61 48.3576 76.61 40.0497H80.6001Z"
                                            fill="#FFA439" />
                                    </svg>
                                    <div className="absolute top-[20%] left-1/2 -translate-1/2 font-template-clash font-bold">4.5</div>
                                    <svg className="absolute inset-0 -z-10" width="61" height="60" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M80.6001 40.0497C80.6001 62.0858 62.7362 79.9497 40.7001 79.9497C18.6639 79.9497 0.800049 62.0858 0.800049 40.0497C0.800049 18.0135 18.6639 0.149658 40.7001 0.149658C62.7362 0.149658 80.6001 18.0135 80.6001 40.0497ZM4.79005 40.0497C4.79005 59.8822 20.8675 75.9597 40.7001 75.9597C60.5326 75.9597 76.61 59.8822 76.61 40.0497C76.61 20.2171 60.5326 4.13966 40.7001 4.13966C20.8675 4.13966 4.79005 20.2171 4.79005 40.0497Z"
                                            fill="#F7F7F7" />
                                    </svg>
                                </div>
                                <div className="flex flex-col gap-y-1">
                                    <div className="flex gap-x-1">
                                        {Array.from({length: 5}).map((_, idx) => (
                                            <IoIosStar key={`product-detail-rate-${idx}`} size={15} className="text-template-orange" />
                                        ))}
                                    </div>
                                    <div className="text-sm font-template-primary font-[500] text-black/70">from 1,25K reviews</div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-x-1 font-template-clash shrink-0">
                                        <div className="text-sm font-[550]">5.0</div>
                                        <IoIosStar size={15} className="text-template-orange" />
                                    </div>
                                    <div className="h-1.5 w-full bg-template-whitesmoke rounded-full">
                                        <div className="h-full w-[90%] bg-template-primary rounded-full"></div>
                                    </div>
                                    <div className="w-[5%] text-sm font-template-clash font-[550] shrink-0">2893</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-x-1 font-template-clash shrink-0">
                                        <div className="text-sm font-[550]">4.0</div>
                                        <IoIosStar size={15} className="text-template-orange" />
                                    </div>
                                    <div className="h-1.5 w-full bg-template-whitesmoke rounded-full">
                                        <div className="h-full w-[50%] bg-template-primary rounded-full"></div>
                                    </div>
                                    <div className="w-[5%] text-sm font-template-clash font-[550] shrink-0">38</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-x-1 font-template-clash shrink-0">
                                        <div className="text-sm font-[550]">3.0</div>
                                        <IoIosStar size={15} className="text-template-orange" />
                                    </div>
                                    <div className="h-1.5 w-full bg-template-whitesmoke rounded-full">
                                        <div className="h-full w-[15%] bg-template-primary rounded-full"></div>
                                    </div>
                                    <div className="w-[5%] text-sm font-template-clash font-[550] shrink-0">4</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-x-1 font-template-clash shrink-0">
                                        <div className="text-sm font-[550]">2.0</div>
                                        <IoIosStar size={15} className="text-template-orange" />
                                    </div>
                                    <div className="h-1.5 w-full bg-template-whitesmoke rounded-full">
                                        <div className="h-full w-[0%] bg-template-primary rounded-full"></div>
                                    </div>
                                    <div className="w-[5%] text-sm font-template-clash font-[550] shrink-0">0</div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-x-1 font-template-clash shrink-0">
                                        <div className="text-sm font-[550]">1.0</div>
                                        <IoIosStar size={15} className="text-template-orange" />
                                    </div>
                                    <div className="h-1.5 w-full bg-template-whitesmoke rounded-full">
                                        <div className="h-full w-[0%] bg-template-primary rounded-full"></div>
                                    </div>
                                    <div className="w-[5%] text-sm font-template-clash font-[550] shrink-0">0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-3 grid grid-cols-1 min-[650px]:grid-cols-[25%_75%] items-start gap-8">
                        <div className="hidden min-[650px]:block w-full px-3 border border-black/10 rounded-sm">
                            <div className="py-3 text-base font-[600] border-b border-black/10 font-template-clash">Reviews Filter</div>
                            <div className="py-5 border-b border-black/10">
                                <div className="flex flex-col gap-y-1">
                                    <div className="flex items-center justify-between cursor-pointer">
                                        <div className="text-sm font-template-clash font-[600]">Rating</div>
                                        <RxCaretUp className="font-bold" size={20} />
                                    </div>
                                    <div className="h-fit">
                                        <div className="py-2 flex flex-col-reverse gap-y-2.5">
                                            {Array.from({length: 5}).map((_, idx) => (
                                                <div key={`product-rating-${idx}-filter`} className="flex items-center gap-x-2.5">
                                                    <input type="checkbox" className="w-3 h-3 accent-template-primary" />
                                                    <div className="flex items-center gap-x-1">
                                                        <IoIosStar className="text-template-orange" size={15} />
                                                        <div className="text-sm font-[550] font-template-clash">{idx + 1}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="py-5 border-b border-black/10">
                                <div className="flex flex-col gap-y-1">
                                    <div className="flex items-center justify-between cursor-pointer">
                                        <div className="text-sm font-template-clash font-[600]">Review Topics</div>
                                        <RxCaretUp className="font-bold" size={20} />
                                    </div>
                                    <div className="h-fit">
                                        <div className="py-2 flex flex-col gap-y-2.5">
                                            <div className="flex items-center gap-x-2.5">
                                                <input type="checkbox" className="w-3 h-3 accent-template-primary" />
                                                <div className="text-sm font-template-clash font-[500] text-black/70">Product Quality</div>
                                            </div>
                                            <div className="flex items-center gap-x-2.5">
                                                <input type="checkbox" className="w-3 h-3 accent-template-primary" />
                                                <div className="text-sm font-template-clash font-[500] text-black/70">Sellers Services</div>
                                            </div>
                                            <div className="flex items-center gap-x-2.5">
                                                <input type="checkbox" className="w-3 h-3 accent-template-primary" />
                                                <div className="text-sm font-template-clash font-[500] text-black/70">Product Price</div>
                                            </div>
                                            <div className="flex items-center gap-x-2.5">
                                                <input type="checkbox" className="w-3 h-3 accent-template-primary" />
                                                <div className="text-sm font-template-clash font-[500] text-black/70">Shipment</div>
                                            </div>
                                            <div className="flex items-center gap-x-2.5">
                                                <input type="checkbox" className="w-3 h-3 accent-template-primary" />
                                                <div className="text-sm font-template-clash font-[500] text-black/70">Match With Description</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex flex-col gap-y-3">
                                <div className="text-base font-[600] font-template-primary">Review Lists</div>
                                <div className="flex gap-x-2 items-center overflow-auto" style={{scrollbarWidth: "none"}}>
                                    <button className="px-4 py-2 shrink-0 bg-template-primary text-white font-template-primary font-[450] text-sm rounded-sm">All Reviews</button>
                                    <button className="px-4 py-2 shrink-0 text-black font-template-primary font-[450] text-sm rounded-sm border-[1.5px] border-template-whitesmoke">With Photo & Video</button>
                                    <button className="px-4 py-2 shrink-0 text-black font-template-primary font-[450] text-sm rounded-sm border-[1.5px] border-template-whitesmoke">With Description</button>
                                </div>
                                {Array.from({length: 4}).map((_, idx) => (
                                    <div key={`product-comment-row-${idx}`} className={`flex flex-col gap-y-2 pt-2 pb-3 sm:pb-5 ${idx !== 3 ? "border-b-[1.5px] sm:border-b-[1.8px] border-black/10 border-dashed" : ""}`}>
                                        <div className="flex items-center gap-x-6 sm:mt-6">
                                            <div className="flex items-center gap-x-1">
                                                <div className="w-6 h-6 rounded-full">
                                                    <img className="w-full h-full object-cover object-center aspect-square" src="/images/profile/Ellipse 14.png" alt="Profile Pic" />
                                                </div>
                                                <div className="text-sm font-template-primary font-[550]">Johnmavel C.</div>
                                            </div>
                                            <div className="flex gap-x-1">
                                                {Array.from({length: 5}).map((_, idx) => (
                                                    <IoIosStar className="text-template-orange" size={15} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="text-sm font-template-primary w-full min-[650px]:w-[75%]">Lorem ipsum sapien diam vestibulum aliquet nunc nulla sed donec quam adipiscing lacus mi imperdiet netus mauris pharetra nullam magna euismod aliquam interdum mauris risus diam in sem arcu sollicitudin.</div>
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm font-template-primary text-black/50">July 2, 2020 03:29 PM</div>
                                            <div className="flex gap-x-1">
                                                <button className="px-2 py-1.5 rounded-md bg-transparent sm:border sm:border-template-primary/15 flex items-center gap-x-1 font-template-clash text-sm">
                                                    <LikeFill size={isMobile ? 23 : 18} />
                                                    <span>128</span>
                                                </button>
                                                <button className="h-auto px-2 rounded-md bg-transparent sm:border sm:border-template-primary/15">
                                                    <LikeOutline size={isMobile ? 23 : 18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="mx-auto flex gap-x-3">
                                    {Array.from({length: 3}).map((_, idx) => (
                                        <button onClick={() => setcurrentCommentCount(idx + 1)} key={`product-view-count-${idx + 1}`} className={`${(idx + 1) === currentCommentCount ? "bg-template-primary text-template-whitesmoke" : "bg-template-whitesmoke text-template-primary"} px-4 py-2 rounded-md text-sm font-[550] font-template-primary`}>{idx + 1}</button>
                                    ))}
                                    <button disabled={4 === currentCommentCount} onClick={() => setcurrentCommentCount(prev => Math.max(1, prev + 1))} className="bg-template-whitesmoke text-template-primary px-4 py-2 rounded-md text-sm font-[550] font-template-primary">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ShopTopSelling topsellingProducts={topsellingProducts} />
                </ViewContainer>
            </ViewWrapper>
            <ViewContainer>
                <Banner3 />
            </ViewContainer>
                        
        </div>
    )
}

export default ProductDetailRoute;