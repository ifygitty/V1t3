import { GridBigRounded, LongVerticalLineSeparator, SystemFiltering } from "@/customs/icons/CustomIcons";
import { LISTED_PRODUCT_DISPLAY } from "@/shared/constants";

const ShopFilterHeader = ({isMobile, currentProductCount, currentListedProduct, listedProducts}) => {
    return !isMobile ? (
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-4">
                        <div className="flex items-center gap-x-1.5">
                            <SystemFiltering />
                            <div className="text-[14.5px] font-template-primary font-[500] text-black/50">Filter</div>
                        </div>
                        <div className="flex items-center gap-x-2">
                            <GridBigRounded />
                            <div className="flex items-center gap-x-1.5">
                                <LongVerticalLineSeparator />
                                <div className="text-[14.5px] font-template-primary font-[500] text-black/50">Showing {currentProductCount * LISTED_PRODUCT_DISPLAY - LISTED_PRODUCT_DISPLAY + 1} - {currentProductCount * LISTED_PRODUCT_DISPLAY} of {listedProducts?.length} results</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div className="flex items-center gap-x-1.5">
                            <div className="text-[14.5px] font-template-primary font-[500] text-black/50">Show</div>
                            <div className="text-[14.5px] font-template-primary font-[500] text-black/50">{currentListedProduct?.length * currentProductCount}</div>
                        </div>
                        <div className="text-[14.5px] font-template-primary font-[500] text-black/50">Sort by</div>
                        <div className="text-[14.5px] font-template-primary font-[500] text-black/50">Default</div>
                    </div>
                </div>
            ): (
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-x-2 min-[540px]:gap-x-4">
                        <div className="flex items-center gap-x-1.5">
                            <SystemFiltering />
                            <div className="min-[540px]:text-[14.5px] text-[13.5px] font-template-primary font-[500] text-black/50">Filter</div>
                        </div>
                        <GridBigRounded />
                    </div>
                    <div className="text-[13.5px] min-[540px]:text-[14.5px] font-template-primary font-[500] text-black/50">Showing {currentProductCount * LISTED_PRODUCT_DISPLAY - LISTED_PRODUCT_DISPLAY + 1} - {currentProductCount * LISTED_PRODUCT_DISPLAY} of {listedProducts?.length} results</div>
                </div>
            )
}

export default ShopFilterHeader;