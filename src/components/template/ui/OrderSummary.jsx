import React, { useState } from 'react'
import { MdClose } from 'react-icons/md';
import { LuTicket } from "react-icons/lu";
import { useCustomStyles } from "@/hooks/custom-hooks";



const initialCart = [
    { id: 1, name: "Office Suit", color: "Red", price: 19, quantity: 2, image: "/images/curated/image19.jpg" },
    { id: 2, name: "Chest top", color: "Grey", price: 19, quantity: 2, image: "/images/curated/image18.jpg" },
    { id: 3, name: "Louis Vuitton Bag", color: "Brown", price: 19, quantity: 2, image: "/images/curated/image3.jpg" },


];

const shippings = [
    { shipping: "free", subtotal: 99, total: 234, },
]

const OrderSummary = () => {
    const { thinScrollbar } = useCustomStyles();
    const [cart, setCart] = useState(initialCart);

    const updateQuantity = (id, type) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        quantity: type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
                    }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    return (

        <div className="border   h-fit border-gray-300  p-6 bg-white shadow-md w-90  max-md:w-full">
            <h2 className=" font-semibold mb-4 text-2xl">Order summary</h2>

            {cart.length > 0 ? (
                <div>
                    <div className={`space-y-2 fles h-fit max-h-120 overflow-y-auto  flex-col`} style={{...thinScrollbar}}>
                        {cart.map(item => (
                            <div>
                                <div className="py-5 flex justify-between items-center gap-3 max-sm:gap-1">
                                    <div className=" flex justify-between items-center gap-3 max-sm:gap-2">
                                        <img src={item.image} alt={item.name} className="w-16 h-20 object-cover" />

                                        <div className="space-y-1">
                                            <p className="md:font-medium text-sm max-sm:break-words ">{item.name}</p>
                                            <p className="text-sm text-gray-500 ">Color: {item.color}</p>

                                            <div className="flex items-center gap-3 w-fit px-3 py-1 border border-gray-300 rounded text-center max-sm:gap-3 max-sm:text-xs max-sm:px-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, "dec")}
                                                    className="hover:bg-gray-100 hover:cursor-pointer text-[#6C7275]"
                                                >
                                                    −
                                                </button>
                                                <span className="font-medium">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, "inc")}
                                                    classN  ame="hover:bg-gray-100 hover:cursor-pointer text-[#6C7275]"
                                                >
                                                    +
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <p className=" text-black/80 max-sm:text-right max-sm:text-sm font-semibold self-end">
                                            ${item.price.toFixed(2)}
                                        </p>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="  self-end     text-red-500/50  hover:cursor-pointer "
                                        >
                                            <MdClose className='text-2xl'/>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="flex gap-2 mt-5 w-full max-sm:flex-col">
                        <input
                            type="text"
                            placeholder="input"
                            className="flex-1 px-3 py-2 focus:outline-none outline-gray-600 border border-gray-300 rounded-sm font-semibold max-sm:text-sm"
                        />
                        <button
                            className="px-4 py-2 text-sm font-medium rounded text-white bg-template-primary"
                        >
                            Apply
                        </button>
                    </div>

                    <div className="mt-6 space-y-6">
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2  text-sm font-medium'>
                                <LuTicket className="text-2xl" />
                                JenkateMW
                            </div>
                            <div className='flex text-sm items-center gap-1 text-green-500 font-medium'>
                                <p>-$25.00</p>
                                <button className='hover:cursor-pointer'>
                                    [Remove]
                                </button>
                            </div>

                        </div>
                        {shippings.map(item => (
                            <div className='space-y-6'>
                                <div className="flex justify-between font-medium">
                                    <span>Shipping</span>
                                    <span className="font-semibold">${item.shipping}</span>
                                </div>
                                <div className="flex justify-between font-medium">
                                    <span>Subtotal</span>
                                    <span className="font-semibold">${item.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-black text-lg font-bold border-t border-gray-300 pt-3">
                                    <span>Total</span>
                                    <span>${item.total.toFixed(2)}</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            ) : (
                <h3>
                    No Order placed yet
                </h3>
            )}


        </div>
    )
}

export default OrderSummary