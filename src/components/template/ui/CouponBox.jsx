import { useState } from "react";
import { LuTicket } from "react-icons/lu";

const CouponBox = ({ onApply }) => {
    const [code, setCode] = useState("");

    const handleApply = () => {
        if (!code.trim()) return;
        onApply(code);
        setCode("");
    };

    return (
        <div className=" rounded-lg p-4 w-fit bg-white mt-10 max-sm:w-full">
            <h3 className="font-semibold text-gray-800 mb-2 text-2xl">Have a coupon?</h3>
            <p className="text-sm text-gray-500 mb-3 font-medium">Add your code for an instant cart discount</p>

            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden p-3">
                <div className="flex items-center  text-gray-400">
                    <LuTicket className="text-3xl" />
                </div>
                <input
                    type="text"
                    placeholder="Coupon Code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="flex-1 px-2 py-2 focus:outline-none font-semibold max-sm:text-sm"
                />
                <button
                    onClick={handleApply}
                    className="px-4 py-2 max-sm:text-sm font-bold text-gray-800"
                >
                    Apply
                </button>
            </div>
        </div>
    );
}

export default CouponBox