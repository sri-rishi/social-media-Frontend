import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUsersData } from "../../services";
import { User } from "../auth/authSlice.types";

type UserState = {
    users: User[] | [],
    error: string | null;
    usersStatus: "idle" | "pending" | "fulfilled" | "rejected"
}

const initialState: UserState = {
    users: [],
    error: null,
    usersStatus: "idle"
}

export const getUsers = createAsyncThunk(
    "users/getUsersData",
    async () => {
        const response = await getUsersData();
        console.log(response.data);
        return response.data;
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [`${getUsers.pending}`]: (state) => {
            state.usersStatus = "pending";
        },
        [`${getUsers.fulfilled}`]: (state, action: PayloadAction<UserState>) => {
            state.usersStatus = "fulfilled";
            state.users = action.payload.users;
        },
        [`${getUsers.rejected}`]: (state, action: PayloadAction<UserState>) => {
            state.usersStatus = "rejected";
            state.error = action.payload.error;
        }
    }
});

export default usersSlice.reducer;