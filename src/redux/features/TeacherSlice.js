import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const TeacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {
        AddToTeacher: (state, {payload}) => {
            state.push(payload)
        }
    }
})

export const { AddToTeacher } = TeacherSlice.actions;
export default TeacherSlice.reducer;