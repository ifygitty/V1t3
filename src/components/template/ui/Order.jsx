import React from 'react'
import { Link } from 'react-router';
import { useCustomStyles } from '@/hooks/custom-hooks';


const OrderItem = [
  { id: 1, name: "Office Suit", color: "Red", price: 19, quantity: 2, image: "/images/curated/image3.jpg" },
  { id: 2, name: "Chest top", color: "Grey", price: 19, quantity: 2, image: "/images/curated/image19.jpg" },
  { id: 3, name: "Louis Vuitton Bag", color: "Brown", price: 19, quantity: 2, image: "/images/curated/image18.jpg" },
  
  
];

const OrderDetails = [
  {code: "#0123_45678", Date: "october 19,2023", Total: "$1,345.00", Paymentmethod: "Credit Card"}
]

const Order = () => {
  const { thinScrollbar } = useCustomStyles();
  return (
    <div className='w-full flex justify-center items-center mt-15 max-md:mt-5'>
      <div className='flex flex-col items-center justify-center  space-y-3 shadow-2xl shadow-gray-300 py-10 w-fit px-35 rounded-md max-sm:px-0 max-sm:shadow-none'>
      <div className='text-center'>
        <p className='font-medium text-gray-500'>Thank you! 🎉</p>
        <p className='text-2xl font-semibold text-gray-700 max-sm:text-base'>Your order has been <br /> recieved</p>
      </div>

      <div className={`grid grid-cols-3 gap-10 mb-10 h-fit max-h-80 overflow-y-auto px-2 max-sm:gap-5`} style={{...thinScrollbar}}>
         {OrderItem.map(item => (
          <div className='h-30 w-22 p-2 relative flex'>
            <img src={item.image} alt={item.name} className="w-full h-25 object-cover object-fit self-end flex" />
          <span
            className="flex items-center justify-center w-6 h-6 p-2 rounded-full absolute top-0 right-0  text-white bg-template-primary text-sm " 
              
          >
            {item.quantity}
          </span>
          </div>
         ))}
      </div>
      <div>
        {OrderDetails.map(item =>(
          <div className=' font-medium flex flex-col space-y-2 text-sm '>
            <div className='flex items-center justify-between gap-10'>
            <p className='text-gray-500 font-semibold'>Order code:</p>
            {item.code}
          </div>
          <div className='flex items-center justify-between gap-10'>
            <p className='text-gray-500 font-semibold'>Date:</p>
            {item.Date}
          </div>
          <div className='flex items-center justify-between gap-10'>
            <p className='text-gray-500 font-semibold'>Total:</p>
            {item.Total}
          </div>
          <div className='flex items-center justify-between gap-10'>
            <p className='text-gray-500 font-semibold'>Payment method:</p>
            {item.Paymentmethod}
          </div>
          </div>
        ))}
      </div>
      <Link to={'/'} className='py-3 mt-5 px-6 text-white bg-template-primary'>
        Back to Home
      </Link>
    </div>
    </div>
  )
}

export default Order