import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import newPostModalReducer from "../components/newPostBox/newPostSlice";
import userReducer from "../features/profilePage/userSlice";
import postsReducer from "../components/post/postSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        newPostModal: newPostModalReducer,
        users: userReducer,
        posts: postsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;