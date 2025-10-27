
import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import CartSummary from "./CartSummary";
import CouponBox from "./CouponBox";

const initialCart = [
    { id: 1, name: "Office Suit", color: "Red", price: 19, quantity: 2, image: "/images/curated/image18.jpg" },
    { id: 2, name: "Chest top", color: "Grey", price: 19, quantity: 2, image: "/images/curated/image3.jpg" },
    { id: 3, name: "Louis Vuitton Bag", color: "Brown", price: 19, quantity: 2, image: "/images/curated/image19.jpg" },
    



];

const ShoppingCart = () => {
    const [cart, setCart] = useState(initialCart);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(subtotal);
    }, [cart]);

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

    useEffect(() => {
        const uniqueCart = cart.reduce((acc, item) => {
            const existing = acc.find((i) => i.name.toLowerCase() === item.name.toLowerCase());
            if (existing) {
            existing.quantity += item.quantity;
            } else {
            acc.push({ ...item });
            }
            return acc;
        }, []);

        
        const isSame =
            uniqueCart.length === cart.length &&
            uniqueCart.every((item, i) => item.id === cart[i].id && item.quantity === cart[i].quantity);

        if (!isSame) {
            setCart(uniqueCart);
        }

        const subtotal = uniqueCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotal(subtotal);
    }, [cart]);



    return (
        <div className="w-full mt-10">
            <div className="w-full lg:relative h-fit mx-auto  flex justify-between gap-2 max-lg:flex-col max-lg:gap-10">
                <table className="h-fit text-left border-collapse w-[60%] max-lg:w-full">
                    <thead>
                        <tr className="border-b font text-gray-800 border-gray-300 max-sm:text-xs">
                            <th className="p-3 font-bold max-sm:text-left">Product</th>
                            <th className="p-3 font-bold max-sm:text-left">Quantity</th>
                            <th className="p-3 font-bold max-sm:text-left">Price</th>
                            <th className="p-3 font-bold text-right">Subtotal</th>
                        </tr>
                    </thead>
                    <tbody className="max-sm:text-left">
                        {cart.map((item) => (
                            <tr key={item.id} className="border-b border-gray-200/20">
                                <td className="py-5 flex items-center gap-3 max-sm:gap-1">
                                    <img src={item.image} alt={item.name} className="w-16 h-22 object-cover rounded" />

                                    <div className="space-y-2">
                                        <p className="md:font-medium max-md:text-sm max-sm:break-words max-sm:text-xs">{item.name}</p>
                                        <p className="text-sm text-gray-500 max-md:text-xs">Color: {item.color}</p>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="mt-1 flex gap-2 items-center text-sm px-2 py-1 bg-red-100 text-red-500 rounded hover:bg-red-200 hover:cursor-pointer max-sm:text-xs max-sm:px-1 max-sm:gap-1"
                                        >
                                            <MdClose /> Remove
                                        </button>
                                    </div>
                                </td>

                                <td className="p-3 max-sm:text-right">
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
                                            className="hover:bg-gray-100 hover:cursor-pointer text-[#6C7275]"
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>

                                <td className="p-3 text-black/80 max-sm:text-right max-sm:text-xs font-medium">
                                    ${item.price.toFixed(2)}
                                </td>
                                <td className="p-3 font-semibold text-right max-sm:text-xs">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <CartSummary sumtotal={total} />
            </div>
            <CouponBox />
        </div>
    );
};

export default ShoppingCart;
