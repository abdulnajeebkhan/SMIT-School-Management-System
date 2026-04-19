import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('students')) || [];

const StudentSlice = createSlice({
    name: 'StudentSlice',
    initialState,
    reducers: {
        addStudent: (state, { payload }) => {
            state.push(payload);
            localStorage.setItem('students', JSON.stringify(state));
        },
    }
})
export const { addStudent, } = StudentSlice.actions;
export default StudentSlice.reducer;