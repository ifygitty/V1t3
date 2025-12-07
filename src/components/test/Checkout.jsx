import React, { useState } from "react";

import {
  useCreateGhost,
  useAddToCart,
  useCart,
  useAuthenticate,
  useVerifyOtp,
  useCreateOrderFromCart,
  useApplyCoupon,
} from "../hooks/salesiveHooks";

export default function CheckoutDemo() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const createGhost = useCreateGhost();
  const addToCart = useAddToCart();
  const cartQuery = useCart();
  const authenticate = useAuthenticate();
  const verifyOtp = useVerifyOtp();
  const createOrder = useCreateOrderFromCart();
  const applyCoupon = useApplyCoupon();

  return (
    <div>
      <h3>Demo checkout</h3>

      <button onClick={() => createGhost.mutate()} disabled={createGhost.isLoading}>
        {createGhost.isLoading ? "Creating ghost..." : "Create Ghost Shopper"}
      </button>

      <div style={{ marginTop: 12 }}>
        <button
          onClick={() =>
            addToCart.mutate({ productId: "prod_123", quantity: 1 })
          }
        >
          Add prod_123 to cart
        </button>

        <button
          onClick={() =>
            addToCart.mutate({
              productId: "prod_456",
              variantId: "variant_blue",
              quantity: 2,
            })
          }
        >
          Add variant prod_456
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        <strong>Cart snapshot:</strong>
        <pre>{JSON.stringify(cartQuery.data, null, 2)}</pre>
      </div>

      <div style={{ marginTop: 12 }}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <button onClick={() => authenticate.mutate({ email })}>
          Send OTP
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="otp"
        />
        <button onClick={() => verifyOtp.mutate({ email, otp })}>
          Verify OTP
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        <button onClick={() => createOrder.mutate()}>
          Create Order From Cart
        </button>
      </div>

      <div style={{ marginTop: 12 }}>
        <input id="coupon" placeholder="SUMMER20" />
        <button
          onClick={() => {
            const orderId = createOrder.data?.data?.id;
            const couponCode = document.getElementById("coupon").value;

            if (orderId) {
              applyCoupon.mutate({
                orderId,
                code: couponCode,
              });
            } else {
              alert("Create order first");
            }
          }}
        >
          Apply Coupon
        </button>
      </div>
    </div>
  );
}
