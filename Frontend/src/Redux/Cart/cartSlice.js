import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const alreadyInCart = state.cartItems.find((item) => {
        return item.product._id === action.payload._id;
      });
      if (!alreadyInCart) {
        state.cartItems.push({ product: action.payload, qty: 1 });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    deleteToCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.product._id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    incrementCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        if (action.payload === item.product._id) {
          if (item.product.quantity > item.qty) return (item.qty += 1);
          else return item;
        } else {
          return item;
        }
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decrementCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => {
        if (action.payload === item.product._id) {
          if (item.qty > 1) {
            item.qty -= 1;
            return item;
          } else return item;
        } else {
          return item;
        }
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state, action) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  deleteToCart,
  incrementCartItem,
  decrementCartItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
