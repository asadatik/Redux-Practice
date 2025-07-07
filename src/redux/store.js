import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/feature/counter/counterSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
});
