import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../redux/slices/categorySlice";

export default configureStore({
    reducer: {
        categoryReducer,
    }
});