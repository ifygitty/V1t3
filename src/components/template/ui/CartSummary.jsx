import React, { useState } from "react";



const shippings = [
    { name: "shipping", value: "free", type: "free Shipping", price: "$0.00" },
    { name: "shipping", value: "express", type: "Express Shipping", price: "+$15.00" },
    { name: "shipping", value: "pickup", type: "Pick Up", price: "%21.00" }
]

const CartSummary = ({ sumtotal }) => {
    const [shipping, setShipping] = useState("free");

    const subtotal = sumtotal;
    const shippingCost =
        shipping === "free" ? 0 : shipping === "express" ? 15 : subtotal * 0.21;
    const total = subtotal + shippingCost;

    return (
        <div className="border lg:sticky top-5 h-fit border-gray-300  p-6 bg-white shadow-md w-80 max-md:w-full">
            <h2 className="text-lg font-semibold mb-4">Cart summary</h2>


            <div className="space-y-3">
                {shippings.map(item => (
                    <label className={`flex justify-between items-center border border-gray-300 p-3 rounded-lg cursor-pointer ${shipping === `${item.value}` ? "bg-template-primary/5" : "bg-white"
                        }`}>
                        <div className="flex items-center gap-2">
                            <input
                                type="radio"
                                name={item.name}
                                value={item.value}
                                checked={shipping === `${item.value}`}
                                onChange={(e) => setShipping(e.target.value)}
                                className="accent-template-primary"
                            />
                            <span>{item.type}</span>
                        </div>
                        <span>{item.price}</span>
                    </label>
                ))}

            </div>


            <div className="mt-6 space-y-2">
                <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-black text-lg font-bold border-t border-gray-300 pt-3">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>


            <button className="w-full mt-6 bg-template-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Checkout
            </button>
        </div>
    );
}


export default CartSummary;