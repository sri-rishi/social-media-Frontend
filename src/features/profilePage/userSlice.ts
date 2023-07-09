import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getUsersData, followUser, unFollowUser } from "../../services";
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
        // console.log(response.data);
        return (await response.data) as UserState
    }
);

type FollowUnfollowType = {
    targetUserId: string,
    userId: string,
    isFollowed: boolean
}

export const followUnFollowUser = createAsyncThunk(
    "user/followUnFollow",
    async ({ targetUserId, userId, isFollowed }: FollowUnfollowType) => {
        const token = localStorage.getItem("token") || "{}";
        const response =
            isFollowed ?
                await unFollowUser(targetUserId, userId, token)
                : await followUser(targetUserId, userId, token);
        console.log(response);
        return (await response.data) as UserState
    }
);


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
        },
        [`${followUnFollowUser.pending}`]: (state) => {
            state.usersStatus = "pending";
        },
        [`${followUnFollowUser.fulfilled}`]: (state, action: PayloadAction<UserState>) => {
            state.usersStatus = "fulfilled";
            state.users = action.payload.users;
        },
        [`${followUnFollowUser.rejected}`]: (state, action: PayloadAction<UserState>) => {
            state.usersStatus = "rejected";
            state.error = action.payload.error;
        }
    }
});

export default usersSlice.reducer;