import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice/CartSlice";
import TaskReducer from "./slice/TaskSlice";

export const store = configureStore({
    reducer:{
        cart:CartReducer,
        task:TaskReducer
        
    }
})