import { TemplateTitle, TemplateProductCard } from "@/components/template/ui";

const TopSelling = ({topsellingProducts}) => {
    return(
        <div className="py-15">
            <div className="mt-4 flex flex-col gap-y-2">
                <div className="flex items-center justify-between">
                    <TemplateTitle classname={"text-[18px] font-[550]"} title={"Best Selling Products"} />
                    <button className="bg-transparent text-template-primary text-sm font-[550] underline font-template-primary">View All</button>
                </div>
                <div className="grid grid-cols-1 min-[290px]:grid-cols-2 min-[530px]:grid-cols-3 min-[1200px]:grid-cols-4 gap-4">
                    {topsellingProducts?.map((item, idx) => (
                        <TemplateProductCard {...item} key={`top-selling-${idx}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopSelling;