import { createSlice } from "@reduxjs/toolkit";

//addToCart, removeFromCart, increaseItem, decreaseItem, clearCart
const cart = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    addToCart(state, action) {
      //check if item already exists in the cart
      const product = action.payload;
      const findItem = state.cart.find((item) => item._id === product._id);
      if (findItem) {
        findItem.quantity += (findItem.quantity || 0) + (product.quantity || 1);
      } else {
        state.cart.push({ ...product, quantity: product.quantity || 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    increaseItem(state, action) {
      let product = state.cart.find((item) => item._id === action.payload);
      if (product) {
        product.quantity++;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    decreaseItem(state, action) {
      let product = state.cart.find((item) => item._id === action.payload);
      if (product) {
        if (!product.quantity || product.quantity <= 1) {
          state.cart = state.cart.filter((item) => item._id !== product._id);
        } else {
          product.quantity--;
        }
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    removeItem(state, action) {
      const product = state.cart.find((item) => item._id === action.payload);
      if (product) {
        state.cart = state.cart.filter((item) => item._id === product._id);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },

    clearCart(state) {
      state.cart = [];
      localStorage.removeItem("cart");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItem,
  decreaseItem,
  removeItem,
  clearCart,
} = cart.actions;
export default cart.reducer;

export const getTotalItemsInCart = (state) => {
  return state.cart.cart.reducer((acc, item) => (acc += item.quantity), 0);
};

export const getTotalPrice = (state) => {
  return state.cart.cart.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0
  );
};
