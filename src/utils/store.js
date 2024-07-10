import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        users: userSlice
            
    }
})
export default store;