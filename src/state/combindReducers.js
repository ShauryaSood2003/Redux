import { combineReducers } from "@reduxjs/toolkit";

import { balanceReducer } from "./reducers/balance";
import { notificationReducer } from "./reducers/notification";

export const rootReducer=combineReducers({
    balance:balanceReducer,
    notification:notificationReducer
})