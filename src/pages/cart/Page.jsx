import { Outlet, Link, useLocation } from "react-router";
import ViewWrapper from "../../components/wrappers/ViewWrapper";
import { useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { useNavStyleLogic } from "@/shared/state";
import { IoIosCheckmark } from 'react-icons/io';

const steps = [
    { to: "/cart", label: "Shopping cart", step: 1 },
    { to: "/cart/checkout", label: "Checkout details", step: 2 },
    { to: "/cart/order", label: "Order complete", step: 3 },
];

const CartRoute = () => {
    const location = useLocation();
    const pathname = location.pathname;

    const {setIsNavColored} = useNavStyleLogic();

    const header = useMemo(() => {
        return pathname === "/cart" ? "Cart" : pathname === "/cart/checkout" ? "Checkout" : "Complete";
    }, [pathname]);

    useEffect(() => {
        setIsNavColored(true);
    }, [pathname]);

    const activeStep = useMemo(() => {
    if (pathname === "/cart") return 1;
    if (pathname === "/cart/checkout") return 2;
    if (pathname === "/cart/order") return 3;
    return 0;
  }, [pathname]);

    return (
        <ViewWrapper>
            <div className="my-10 font-template-primary">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-5xl font-medium font-template-primary max-md:text-4xl  mb-4">{header}</h1>
                    <div className="mt-5 flex items-center gap-4 max-sm:justify-between max-sm:w-full max-md:text-sm max-sm:gap-2">
                        {steps.map((s) => {
                            const isActive = s.step === activeStep;
                            const isCompleted = s.step < activeStep;
                            return (
                                <Link
                                    key={s.step}
                                    to={s.to}
                                    className={cn("w-fit flex items-center  text-[#6C7275]  pr-10 gap-2 pl-1 border-b-2 border-transparent pb-4 font-semibold max-md:pr-0  max-sm:text-xs max-sm:pr-1 max-sm:flex-col max-sm:pb-3", { "text-template-primary  border-template-primary pb-4 max-sm:pb-3 ": isActive ,  "text-green-500  border-green-500 ": isCompleted })}
                                >

                                    <span
                                        className={cn("flex items-center justify-center w-6 h-6  rounded-full text-white bg-[#6C7275] text-sm ", { "text-white bg-template-primary": isActive, "bg-green-500":isCompleted})}

                                    >
                                        {isCompleted ? <IoIosCheckmark className="text-2xl"/> :
                                        <>{s.step}</> }
                                        
                                    </span>

                                    <span>{s.label}</span>
                                </Link>
                            )
                        }

                        )}

                         
                    </div>
                </div>
                <Outlet />
            </div>
        </ViewWrapper>

    );
};

export default CartRoute;


