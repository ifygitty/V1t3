
import React from "react";
import { useForm } from "react-hook-form";
import { BsCreditCard2Front } from 'react-icons/bs';

const countries = [
  {country: "Country", value:""},
  {country: "United States", value:"us"},
  {country: "United Kingdom", value:"uk"},
  {country: "Nigeria", value:"ng"}
]

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      payment: "card",
      country: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Form submitted:", data)
  }

  const paymentMethod = watch("payment")

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8  w-[60%] max-sm:mb-10 max-md:w-full"
    >
      {/* Contact Information */}
      <div className="border border-gray-300 rounded-md py-10 px-7 space-y-4 max-sm:px-4">
        <h2 className="text-lg font-semibold">Contact Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-500/90 font-bold text-sm">FIRST NAME</label>
            <input
              {...register("firstName", { required: "First name is required" })}
              placeholder="First name"
              className="w-full border font-medium border-gray-300 rounded px-3 py-2"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-1 text-gray-500/90 font-bold text-sm">LAST NAME</label>
            <input
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last name"
              className="w-full border font-medium border-gray-300 rounded px-3 py-2"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <label className="block mb-1 text-gray-500/90 font-bold text-sm">PHONE NUMBER</label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            placeholder="Phone number"
            className="w-full border font-medium border-gray-300 rounded px-3 py-2"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-gray-500/90 font-bold text-sm">EMAIL ADDRESS</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Your Email"
            className="w-full border font-medium border-gray-300 rounded px-3 py-2"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Shipping Address */}
      <div className="border border-gray-300 rounded-md py-10 px-7 space-y-4 max-sm:px-4">
        <h2 className="text-lg font-semibold">Shipping Address</h2>
        <div>
          <label className="block mb-1 text-gray-500/90 font-bold text-sm">STREET ADDRESS *</label>
          <input
            {...register("street", { required: "Street address is required" })}
            placeholder="Street Address"
            className="w-full border font-medium border-gray-300 rounded px-3 py-2"
          />
          {errors.street && (
            <p className="text-red-500 text-sm">{errors.street.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-1 text-gray-500/90 font-bold text-sm">COUNTRY *</label>
          <select
            {...register("country", { required: "Country is required" })}
            className="w-full border font-medium text-gray-500/90  border-gray-300 rounded px-3 py-2"
          >
            {countries.map(countries => (
              <option key={countries.value} value={countries.value}>{countries.country}</option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country.message}</p>
          )}
        </div>
        <div>
            <label className="block mb-1 text-gray-500/90 font-bold text-sm ">TOWN / CITY *</label>
            <input
              {...register("city", { required: "City is required" })}
              placeholder="Town / City"
              className="w-full border font-medium border-gray-300 rounded px-3 py-2"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
        <div className="grid grid-cols-2 gap-4">
          
          <div>
            <label className="block mb-1 text-gray-500/90 font-bold text-sm">STATE</label>
            <input
              {...register("state")}
              placeholder="State"
              className="w-full border font-medium border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
          <label className="block mb-1 text-gray-500/90 font-bold text-sm">ZIP CODE</label>
          <input
            {...register("zip")}
            placeholder="Zip Code"
            className="w-full border font-medium border-gray-300 rounded px-3 py-2"
          />
        </div>
        </div>
        
        <div className="flex items-center gap-4 text-gray-600 ">
          <input className="scale-195 p-10" type="checkbox" {...register("billingDifferent")} />
          <label>Use a different billing address (optional)</label>
        </div>
      </div>

      {/* Payment Method */}
      <div className="border border-gray-300 rounded-md py-10 px-7 space-y-4 max-sm:px-4">
        <h2 className="text-lg font-semibold">Payment Method</h2>
        <div>
          <div className={`flex border border-gray-200 justify-between items-center mb-3 p-4 rounded-sm cursor-pointer transition-colors duration-200
          ${watch("payment") === "card" && "bg-gray-100 border-none"}`}>
            <label className="font-medium flex hover:cursor-pointer items-center gap-4   text-sm">
            <input type="radio" value="card"  className="hover:cursor-pointer scale-175 accent-black" {...register("payment")} />
            Pay by Card Credit
          </label>
          <BsCreditCard2Front className="text-2xl"/>
          </div>
          
          <div className={`flex border border-gray-200 justify-between items-center mb-3 p-4 rounded-sm cursor-pointer transition-colors duration-200
          ${watch("payment") === "paypal" && "bg-gray-100 border-none"}`}>
          <label className="flex items-center gap-4 font-medium  text-sm">
            <input type="radio" value="paypal" className="hover:cursor-pointer scale-175 accent-black" {...register("payment")} />
            Paypal
          </label>
           </div>
        </div>

        {paymentMethod === "card" && (
          <>
          
            <div>
              <label className="block mb-1 text-gray-500/90 font-bold text-sm">CARD NUMBER</label>
              <input
                {...register("cardNumber", { required: "Card number is required" })}
                placeholder="1234 1234 1234"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
              {errors.cardNumber && (
                <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-gray-500/90 font-bold text-sm">EXPIRATION DATE</label>
                <input
                  {...register("expiry", { required: "Expiry is required" })}
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
                {errors.expiry && (
                  <p className="text-red-500 text-sm">{errors.expiry.message}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-gray-500/90 font-bold">CVC</label>
                <input
                  {...register("cvc", { required: "CVC is required" })}
                  placeholder="CVC code"
                  className="w-full border border-gray-300  rounded px-3 py-2"
                />
                {errors.cvc && (
                  <p className="text-red-500 text-sm">{errors.cvc.message}</p>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-template-primary hover:bg-template-secondary text-white px-4 py-4 rounded"
      >
        Place Order
      </button>
    </form>
  )
}
