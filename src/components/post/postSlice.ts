import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../../services";

export type Comments = {
    _id: string,
    userId: string
    text: string,
    createdAt: Date,
    updatedAt: Date,
}

export type Posts = {
    _id: string
    userId: string
    desc: string,
    likes: {
        likedBy: Array<string>,
        likeCount: number
    },
    image: string,
    comments: Comments[],
    scheduledTime: Date,
    sharedTo: Array<string>,
    createdAt: Date,
    updatedAt: Date,
}

type PostState = {
    posts: Posts[],
    postStaus: "idle" | "pending" | "fulfilled" | "rejected";
    error: string | null
}

const initialState: PostState = {
    posts: [],
    postStaus: "idle",
    error: null
};

export const getAllPosts = createAsyncThunk(
    "posts/getPostsData",
    async () => {
        const response = await getPosts();
        console.log(response?.data)
        return (await response.data) as Posts
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
        [`${getAllPosts.pending}`]: (state) => {
            state.postStaus = "pending";
        },
        [`${getAllPosts.fulfilled}`]: (state, action: PayloadAction<PostState>) => {
            state.postStaus = "fulfilled";
            state.posts = action.payload.posts;
        },
        [`${getAllPosts.rejected}`]: (state, action: PayloadAction<PostState>) => {
            state.postStaus = "rejected";
            state.error = action.payload.error
        }
    }
})


export default postsSlice.reducer;