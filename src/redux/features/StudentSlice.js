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
        updateStudent: (state, { payload }) => {
            const idx = state.findIndex(el => el.id === payload)
            if (idx) {
                state[idx] = payload;
            }
            localStorage.setItem('students', JSON.stringify(state))
        },
        deleteStudent: (state, { payload }) => {
            const idx = state.findIndex(el => el.id === payload)
            if (idx) {
                state.splice(idx, 1)
            }
            localStorage.setItem('students', JSON.stringify(state))
        },
    }
})
export const { addStudent, updateStudent, deleteStudent } = StudentSlice.actions;
export default StudentSlice.reducer;