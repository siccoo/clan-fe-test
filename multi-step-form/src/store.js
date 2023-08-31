import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./services/nameSlice";
import emailReducer from "./services/emailSlice";
import phoneReducer from "./services/phoneSlice";
import addOnsReducer from "./services/addOnsSlice";
import billingOptionReducer from "./services/billingOptionSlice";
import billingTypeReducer from "./services/billingTypeSlice";

export const store = configureStore({
    reducer: {
        name: nameReducer,
        email: emailReducer,
        phone: phoneReducer,
        billingOption: billingOptionReducer,
        billingType: billingTypeReducer,
        addOns: addOnsReducer
    }
})