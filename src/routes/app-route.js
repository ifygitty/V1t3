import { createBrowserRouter as Router } from "react-router";
import Root from "@/pages/Root";
import HomeRoute from "@/pages/home/Page";
import ShopRoute from "@/pages/shop/Page";
import ProductDetailRoute from "@/pages/product-detail/Page";
import AboutUsRoute from "@/pages/about/Page";
import CartRoute from "@/pages/cart/Page";
import ShoppingCart from "@/components/template/ui/ShoppingCart";
import CheckoutDetails from "@/components/template/ui/CheckoutDetails";
import Order from "@/components/template/ui/Order";
import BlogPage from "@/pages/blog/Page";

const router = Router([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: HomeRoute
            },
            {
                path: "about",
                Component: AboutUsRoute
            },
            {
                path: "shop",
                Component: ShopRoute
            },
            {
                path: "blog",
                Component: BlogPage
            },
            {
                path: "/product-detail/:id",
                Component: ProductDetailRoute
            },
            {
                path: "cart",
                Component: CartRoute,
                children: [
                    {
                      index: true, 
                      Component: ShoppingCart,
                    },
                    {
                      path: "checkout", 
                      Component: CheckoutDetails,
                    },
                    {
                      path: "order", 
                      Component: Order,
                    },
                ],
            }
        ]
    }
]);

export default router;