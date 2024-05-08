import API_INSTANCE from ".";

export const getPosts = async () =>
  await API_INSTANCE.get("/post/get-all-posts");
