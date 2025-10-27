import ViewWrapper from "@/components/wrappers/ViewWrapper";
import ViewContainer from "@/components/wrappers/ViewContainer";
import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { TemplateBannerWithImage, TemplateProductCard } from "@/components/template/ui";
import { bestSellingProducts, products } from "@/shared/data/shop-data";
import { LISTED_PRODUCT_DISPLAY } from "@/shared/constants";
import { useMobileView } from "@/hooks/use-mobile-view";
import { ProductFilteringUIHolder, ShopFilter, ShopTopSelling } from "@/components/template/shop/sections";


const ShopRoute = () => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "Dress",
            checked: true
        },
        {
            id: 2,
            name: "Jeans",
            checked: false
        },
        {
            id: 3,
            name: "Polo",
            checked: false
        },
        {
            id: 4,
            name: "Shirts",
            checked: false
        },
        {
            id: 5,
            name: "Skirts",
            checked: false
        },
        {
            id: 6,
            name: "Trousers",
            checked: false
        },
        {
            id: 7,
            name: "Suit",
            checked: false
        },
        {
            id: 8,
            name: "Sandals",
            checked: false
        },
        {
            id: 9,
            name: "Belts",
            checked: false
        },
        {
            id: 10,
            name: "Sneakers",
            checked: false
        },
        {
            id: 11,
            name: "Wrist Watches",
            checked: false
        },
        {
            id: 12,
            name: "Lingeries",
            checked: false
        }
    ]);
    const [priceRange, setPriceRange] = useState([25, 75]);
    const [currentProductCount, setCurrentProductCount] = useState(1);

    const {isMobile} = useMobileView();

    
    const listedProducts = useDeferredValue(products);
    const topsellingProducts = useDeferredValue(bestSellingProducts);

    const currentListedProduct = useMemo(() => {
        return listedProducts?.slice((currentProductCount - 1) * LISTED_PRODUCT_DISPLAY, currentProductCount * LISTED_PRODUCT_DISPLAY);
    }, [currentProductCount, listedProducts]);

    const listedProductCount = useMemo(() => {
        return Math.round(listedProducts?.length / LISTED_PRODUCT_DISPLAY);
    }, [listedProducts]);

    return(
        <div className="w-full">
            <TemplateBannerWithImage image_url="/images/banner/image6.jpg" title={"Shop"} path_1="/" path_2="/shop" pathname_1="Home" pathname_2="Shop" />
            <ViewWrapper classname={"py-6 bg-template-whitesmoke"}>
                <ViewContainer>
                    <ShopFilter isMobile={isMobile} currentProductCount={currentProductCount} currentListedProduct={currentListedProduct} listedProducts={listedProducts} />
                </ViewContainer>
            </ViewWrapper>
            <ViewWrapper classname={"py-6"}>
                <ViewContainer>
                    <div className="w-full grid grid-cols-1 min-[640px]:grid-cols-[25%_75%] gap-6">
                        <ProductFilteringUIHolder {...{isMobile, categories, setCategories, priceRange, setPriceRange}} />
                        <div className="flex flex-col gap-y-6">
                            <div className="grid grid-cols-1 min-[290px]:grid-cols-2 min-[600px]:grid-cols-3 gap-3">
                                {currentListedProduct?.map(item => (
                                    <TemplateProductCard key={`listed-product-${item.id}`} {...item} />
                                ))}
                            </div>
                            <div className="mx-auto flex gap-x-3">
                                {Array.from({length: listedProductCount}).map((_, idx) => (
                                    <button onClick={() => setCurrentProductCount(idx + 1)} key={`listed-product-count-${idx + 1}`} className={`${(idx + 1) === currentProductCount ? "bg-variant-brown text-template-whitesmoke" : "bg-template-whitesmoke text-variant-brown"} px-4 py-2 rounded-md text-sm font-[550] font-template-primary`}>{idx + 1}</button>
                                ))}
                                <button disabled={listedProductCount === currentProductCount} onClick={() => setCurrentProductCount(prev => Math.max(1, prev + 1))} className="bg-white text-variant-brown px-4 py-2 rounded-md text-sm font-[550] font-template-primary">Next</button>
                            </div>
                        </div>
                    </div>
                    <ShopTopSelling topsellingProducts={topsellingProducts} />
                </ViewContainer>
            </ViewWrapper>
        </div>
    );
}

export default ShopRoute;