import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PostState {
  _id: string;
  title: string;
  content: string;
  author: string;
  likes: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

const initialState: PostState[] = [];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    fetchPosts: (state, action: PayloadAction<PostState[]>) => {
      state.length = 0;
      state.push(...action.payload);
    },

    addPost: (state, action: PayloadAction<PostState>) => {
      state.push(action.payload);
    },
  },
});

export const { fetchPosts, addPost } = postSlice.actions;

export default postSlice.reducer;
