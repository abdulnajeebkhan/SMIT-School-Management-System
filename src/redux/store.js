import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./features/StudentSlice";
import TeacherReducer from "./features/TeacherSlice";


const store = configureStore({
    reducer: {
        StudentReducer,
        TeacherReducer,
    }
})

export default store;