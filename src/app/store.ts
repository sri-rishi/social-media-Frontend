import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../pages/auth/authSlice";
import newPostModalReducer from "../components/newPostBox/newPostSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        newPostModal: newPostModalReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;