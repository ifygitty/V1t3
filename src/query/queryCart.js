import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCartItems } from "../services/cart"; 
import { addToCart } from "@/api/cart";

export const useAddToCart = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (productId) => addToCart(productId),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart-items'] })
    },

    onError: (error) => {
      console.error("Add to cart failed:", error.message)
    }
  })
}

export const useCartItems = () => {
  return useQuery({
    queryKey: ["cart-items"],
    queryFn: getCartItems,
  });
};