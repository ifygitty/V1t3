import { useCustomStyles } from "@/hooks/custom-hooks";
import { useReducer } from "react";
import DualSlider from "../../ui/DualSlider";
import { TemplateTextChip } from "../../ui";

const reducer = (state, action) => {
    switch(action.type) {
        case "category":
            return {...state, category: true, price_range: false, brand: false, gender: false, size: false, color: false}
        case "price_range":
            return {...state, category: false, price_range: true, brand: false, gender: false, size: false, color: false}
        case "brand":
            return {...state, category: false, price_range: false, brand: true, gender: false, size: false, color: false}
        case "gender":
            return {...state, category: false, price_range: false, brand: false, gender: true, size: false, color: false}
        case "size":
            return {...state, category: false, price_range: false, brand: false, gender: false, size: true, color: false}
        case "color":
            return {...state, category: false, price_range: false, brand: false, gender: false, size: false, color: true}
        default:
            return state
    }
}

const ProductFilteringUIHolder = ({isMobile, categories, setCategories, priceRange, setPriceRange}) => {
    const [state, dispatch] = useReducer(reducer, {
        category: true,
        price_range: false,
        brand: false,
        gender: false,
        size: false,
        color: false
    });

    const {hiddenScrollbar} = useCustomStyles();

    const handleCategory = (id) => {
        const updateCategories = categories?.map(item => item.id === id ? {...item, checked: true} : {...item, checked: false});
        setCategories(updateCategories);
    }

    return !isMobile ? (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-3">
                <div className="text-[14.5px] font-[500] font-template-primary uppercase">Category</div>
                <div className="flex flex-col gap-y-1.5">
                    {categories?.map((item, index) => {
                        if (item.checked) {
                            return (
                                <div key={`category-${index}`} className="flex items-center gap-x-2">
                                    <div onClick={() => handleCategory(item.id)} className="w-4 h-4 rounded-full bg-black relative after:absolute after:w-[40%] after:h-[40%] after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white after:rounded-full" />
                                    <div className="text-[14px] font-template-primary font-[500] text-black">{item.name}</div>
                                </div>
                            )
                        }else {
                            return(
                                <div key={`category-${index}`} className="flex items-center gap-x-2">
                                    <div onClick={() => handleCategory(item.id)} className="w-4 h-4 rounded-full border-[1.5px] border-black/30" />
                                    <div className="text-[13.5px] font-template-primary font-[400] text-black/80">{item.name}</div>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
            <div className="w-full h-[2px] bg-gray-200 rounded-full" />
            <div className="flex flex-col gap-y-3">
                <div className="text-[14.5px] font-[500] font-template-primary uppercase">Price range</div>
                <DualSlider defaultValue={priceRange} step={10} />
                <div className="grid grid-cols-2 gap-2">
                    <div className="w-full py-1.5 rounded-sm text-center border border-gray-300 text-gray-500 text-sm font-template-primary font-[500]">Min price</div>
                    <div className="w-full py-1.5 rounded-sm text-center border border-gray-300 text-gray-500 text-sm font-template-primary font-[500]">Max price</div>
                </div>
                <div className="flex flex-col gap-y-1.5">
                    <div className="flex items-center gap-x-2">
                        <div data-label="price-all" className="w-4 h-4 rounded-full border-[1.5px] border-black/30" />
                        <div className="text-[13.5px] font-template-primary font-[400] text-black/80">All Price</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div data-label="price-0-20" className="w-4 h-4 rounded-full border-[1.5px] border-black/30" />
                        <div className="text-[13.5px] font-template-primary font-[400] text-black/80">Under $20</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div data-label="price-25-100" className="w-4 h-4 rounded-full border-[1.5px] border-black/30" />
                        <div className="text-[13.5px] font-template-primary font-[400] text-black/80">$25 to $100</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div data-label="price-100-300" className="w-4 h-4 rounded-full border-[1.5px] border-black/30" />
                        <div className="text-[13.5px] font-template-primary font-[400] text-black/80">$100 to $300</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div data-label="price-300-500" className="w-4 h-4 rounded-full border-[1.5px] border-black/30" />
                        <div className="text-[13.5px] font-template-primary font-[400] text-black/80">$300 to $500</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div data-label="price-500-1000" className="w-4 h-4 rounded-full border-[1.5px] border-black/30" />
                        <div className="text-[13.5px] font-template-primary font-[400] text-black/80">$500 to $1000</div>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <div data-label="price-1000-10000" className="w-4 h-4 rounded-full border-[1.5px] border-black/30" />
                        <div className="text-[13.5px] font-template-primary font-[400] text-black/80">$1000 to $10000</div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[2px] bg-gray-200 rounded-full" />
        </div>
    ) : (
        <div className="flex items-center gap-4 w-full overflow-x-auto" style={hiddenScrollbar}>
            {Object.keys(state).map((item, index) => (
                <TemplateTextChip key={`text-chip-${index}`} isCurrentState={state} text={item} type={item.replace(/\s/g, "_")} onClick={() => dispatch({type: item.replace(/\s/g, "_")})} />
            ))}
        </div>
    )
}


export default ProductFilteringUIHolder;