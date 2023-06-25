import { createSlice } from "@reduxjs/toolkit"

interface NewPostModalState {
    newPostModalStatus: boolean;
  }
  
const initialState: NewPostModalState = {
    newPostModalStatus: false,
};

const newPostModalSlice = createSlice({
    name: "mewPostModal",
    initialState,
    reducers: {
        openNewPostModal: (state) => {
            state.newPostModalStatus = true;
        },
        closeNewPostModal: (state) => {
            state.newPostModalStatus = false;
        }
    }
})

export const {openNewPostModal, closeNewPostModal} = newPostModalSlice.actions;

export default newPostModalSlice.reducer;