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

    deletePost: (state, action: PayloadAction<string>) => {
      const postIdToDelete = action.payload;
      const index = state.findIndex((post) => post._id === postIdToDelete);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { fetchPosts, addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
