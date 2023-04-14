import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import { loginUserService } from "../../services/authServices";

export type User = {
    _id: string,
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    followers: Array<string>,
    following: Array<string>,
    createdAt: Date,
    updatedAt: Date,
}

export type AuthResponse = {
    user: User | null,
    token: string | null
}

interface AuthState {
    user: User | null;
    token: string | null;
    error: string | null;
    authStatus: "idle" | "pending" | "fulfilled" | "error";
}

const initialState: AuthState = {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("userValue") || "{}") || null,
    error: null,
    authStatus: "idle"
}

type Loginuser = {
    username: string,
    password: string
}

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async({username, password}: Loginuser) => {
        const response = await loginUserService(username, password);
        console.log(response)

        return (await response.data) as AuthResponse;
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [`${loginUser.pending}`]: (state) => {
            state.authStatus = "pending";
        },
        [`${loginUser.fulfilled}`]: (state, action: PayloadAction<AuthState>) => {
            state.authStatus = "fulfilled";
            state.token = action.payload.token;
            state.user = action.payload.user;
            if(state.token !== null) {
                localStorage.setItem("token", state.token);
            }
            if(state.user !== null) {
                localStorage.setItem("userValue", JSON.stringify(state.user));
            }            
        },
        [`${loginUser.rejected}`]: (state, action: PayloadAction<AuthState>) => {
            state.authStatus = "error";
            state.error = action.payload.error;
        },
    }
})

export default authSlice.reducer;