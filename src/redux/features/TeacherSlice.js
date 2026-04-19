import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('teachers')) || [];

const TeacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {
        AddToTeacher: (state, {payload}) => {
            state.push(payload)
            localStorage.setItem('teachers', JSON.stringify(state));
        }
    }
})

export const { AddToTeacher } = TeacherSlice.actions;
export default TeacherSlice.reducer;