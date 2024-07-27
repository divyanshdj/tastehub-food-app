// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: []
//     },
//     reducers: {
//         addItems: (state, actions) => { 
//             state.items.push(actions.payload);
//         },
//         removeItems: (state) => {
//             state.items.pop();
//         },
//         clearCart: (state) => {
//             state.items.length = 0;
//         }
//     }
// })

// export const { addItems, removeItems, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.card.info.id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.card.info.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.card.info.id !== action.payload);
    }
  }
})

export const { addItems, removeItems, clearCart, increaseQuantity, decreaseQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
