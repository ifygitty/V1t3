import React from 'react'
import { cn } from "@/lib/utils";

const Banner3form = ({className}) => {
  return (
    <div className={cn(`bg-white/60 shadow-md rounded-lg text-center  p-4 w-[427px] max-w-md mx-auto `, className)}>
            <h2 className="text-3xl font-bold text-gray-900 font-template-lora">Subscribe Now</h2>
            <p className="text-gray-500 mt-2 text-sm">
                Lorem ipsum augue massa id quis pellentesque ac consectetur quam varius elit facilisis congue
            </p>

            <form className="mt-5 flex items-center bg-white p-3 rounded-md overflow-hidden max-[415px]:p-2">
                <input
                type="email"
                placeholder="E.g youremail@salesive.com"
                className="flex-1 px-4 py-2 text-gray-700 focus:outline-none max-[415px]:px-1 max-[415px]:text-xs"
                />
                <button
                type="submit"
                className="bg-[#5C4033] hover:bg-[#4a3228] text-white font-medium px-5 py-2 transition-colors max-[415px]:text-sm max-[415px]:px-3"
                >
                Subscribe
                </button>
            </form>
        
            </div>
  )
}

export default Banner3form