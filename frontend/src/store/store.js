import { configureStore } from "@reduxjs/toolkit";
import auth from "../auth/authSlice.js";
import products from "../product/productSlice.js";
import cart from "../cart/CartSlice.js";
import post from "../posts/postSlice.js";

const store = configureStore({
  reducer: { auth, products, cart, post },
});

export default store;
