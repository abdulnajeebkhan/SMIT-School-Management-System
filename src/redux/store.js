import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./features/StudentSlice";


const store = configureStore({
    reducer: {
        StudentReducer,
    }
})

export default store;