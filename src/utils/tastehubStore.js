import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const tastehubStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default tastehubStore;