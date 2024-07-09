import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./combindReducers";

const store=configureStore({
    reducer:rootReducer
})
export default store;