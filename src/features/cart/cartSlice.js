import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzaId: 1,
      name: "paparoni",
      quantity: 22,
      unitPrice: 21,
      totalPrice: 33,
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      pizza.quantity++;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
    },
    decreaseItemQuantity(state, action) {
      const pizza = state.cart.find((item) => item.pizzaId === action.payload);
      pizza.quantity--;
      pizza.totalPrice = pizza.unitPrice * pizza.quantity;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;
