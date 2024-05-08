import API_INSTANCE from ".";

export const getPosts = async () =>
  await API_INSTANCE.get("/post/get-all-posts");

export const getPostById = async (id: string) =>
  await API_INSTANCE.get(`/post/get-post-by-id/${id}`);
