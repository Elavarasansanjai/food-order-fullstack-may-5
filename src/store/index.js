import { createSlice, configureStore } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { cart: [], totalQuantity: 0, totalAmount: 0 },
  reducers: {
    addItem(state, action) {
      state.totalQuantity++;
      const newItem = state.cart.find((item) => item.id === action.payload.id);
      if (!newItem) {
        state.cart.push({
          name: action.payload.name,
          id: action.payload.id,
          about: action.payload.about,
          price: action.payload.price,
          totalprice: action.payload.price,
          image: action.payload.image,
          delivery: action.payload.delivery,
          quantity: 1,
        });
      } else {
        newItem.quantity++;

        newItem.totalprice = newItem.totalprice + action.payload.price;
        console.log(action.payload.price);
      }
      state.totalAmount = state.cart
        .map((item) => item.totalprice)
        .reduce((totl, curen) => totl + curen);
    },
    removeItem(state, action) {
      state.totalQuantity--;
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== existingItem.id);
        console.log(state.cart);
      } else {
        existingItem.quantity--;
        existingItem.totalprice =
          existingItem.totalprice - action.payload.price;
      }
      state.totalAmount = state.cart
        .map((item) => item.totalprice)
        .reduce((totl, curen) => totl + curen, 0);
    },
  },
});

export const store = configureStore({ reducer: { cart: cartSlice.reducer } });

export const { addItem, removeItem } = cartSlice.actions;
