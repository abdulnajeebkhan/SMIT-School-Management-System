import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const StudentSlice = createSlice({
    name: 'StudentSlice',
    initialState,
    reducers: {
        addStudent: (state, { payload }) => {
            state.push(payload);
        },
    }
})
export const { addStudent, } = StudentSlice.actions;
export default StudentSlice.reducer;