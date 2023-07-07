import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { loginUserService, registerUserService } from "../../services";
import { AuthResponse, AuthState, Loginuser, RegisterUser } from "./authSlice.types";


const initialState: AuthState = {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("userValue") || "{}") || null,
    error: null,
    authStatus: "idle"
}



export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ username, password }: Loginuser) => {
        const response = await loginUserService(username, password);
        console.log(response)

        return (await response.data) as AuthResponse;
    }
)



export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async ({ username, password, firstname, lastname }: RegisterUser) => {
        const response = await registerUserService(username, password, firstname, lastname);
        console.log(response)

        return (await response.data) as AuthResponse;
    }
)


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutUser: (): AuthState => {
            localStorage.removeItem("token");
            localStorage.removeItem("userValue");
            return {
                token: null,
                user: null,
                error: null,
                authStatus: "fulfilled"
            }
        }
    },
    extraReducers: {
        [`${loginUser.pending}`]: (state) => {
            state.authStatus = "pending";
        },
        [`${loginUser.fulfilled}`]: (state, action: PayloadAction<AuthState>) => {
            state.authStatus = "fulfilled";
            state.token = action.payload.token;
            state.user = action.payload.user;
            if (state.token !== null) {
                localStorage.setItem("token", state.token);
            }
            if (state.user !== null) {
                localStorage.setItem("userValue", JSON.stringify(state.user));
            }
        },
        [`${loginUser.rejected}`]: (state, action: PayloadAction<AuthState>) => {
            state.authStatus = "rejected";
            state.error = action.payload.error;
        },
        [`${registerUser.pending}`]: (state) => {
            state.authStatus = "pending";
        },
        [`${registerUser.fulfilled}`]: (state, action: PayloadAction<AuthState>) => {
            state.authStatus = "fulfilled";
            state.token = action.payload.token;
            state.user = action.payload.user;
            if (state.token !== null) {
                localStorage.setItem("token", state.token);
            }
            if (state.user !== null) {
                localStorage.setItem("userValue", JSON.stringify(state.user));
            }
        },
        [`${registerUser.rejected}`]: (state, action: PayloadAction<AuthState>) => {
            state.authStatus = "rejected";
            state.error = action.payload.error;
        }
    }
})

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;