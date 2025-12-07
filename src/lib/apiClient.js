
import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://store.salesive.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    "x-shop-id": import.meta.env.VITE_SALESIVE_SHOP_ID, 
  },
});

export default apiClient;
