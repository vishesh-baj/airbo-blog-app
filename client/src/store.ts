import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./redux/theme/themeSlice";
import postReducer from "./redux/posts/postSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    posts: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
