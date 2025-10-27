import React from 'react'
import CheckoutForm from './CheckOutForm';
import OrderSummary from './OrderSummary';

const CheckoutDetails = () => {
  return (
    <div className='flex w-full max-md:flex-col gap-3 justify-between mt-15'>
      <CheckoutForm />
      <OrderSummary />
    </div>
  )
}

export default CheckoutDetails