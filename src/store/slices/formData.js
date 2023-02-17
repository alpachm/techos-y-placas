import { createSlice } from "@reduxjs/toolkit";

const formData = createSlice({
    name: 'formData',
    initialState: '',
    reducers: {
        infoData: (state, action) => action.payload
    }
})

export const { infoData } = formData.actions
export default formData.reducer