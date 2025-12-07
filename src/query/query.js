import { authenticateUser, createGhostUser, resendOtp } from "@/api/SalesiveAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { auth, cart, orders, coupon, products, wishlist } from "salesive-api-axios";



export function useGhostUser() {
  return useQuery({
    queryKey: ["ghostUser"],
    queryFn: createGhostUser,
    staleTime: 1000 * 60 * 30, 
    enabled: !localStorage.getItem("salesive_token"),
    onSuccess: (res) => {
      const token = res.data?.data?.token;

      if (token) {
        localStorage.setItem("salesive_token", token);
      }
    }
  });
}


export function useAuthenticate() {
  return useMutation({
    mutationFn: authenticateUser,
  });
}

export function useResendOtp() {
  return useMutation({
    mutationFn: resendOtp,
  });
}









