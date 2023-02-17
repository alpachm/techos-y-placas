import { configureStore } from "@reduxjs/toolkit";
import formData from "./slices/formData";

export default configureStore({
    reducer: {
        formData
    }
})