import { Loader, PostCard } from "../components";
import toast from "react-hot-toast";
import { fetchPosts } from "../redux/posts/postSlice";
import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";
import usePostList from "../hooks/usePostList";
import { PostData } from "../types";
const PostsList = () => {
  const { data, dispatch, status } = usePostList();

  if (status === "error") {
    toast.error("No posts found");
  }
  if (status === "pending") {
    return (
      <div className="flex justify-center my-4">
        <Loader />
      </div>
    );
  }
  if (status === "success") {
    dispatch(fetchPosts(data?.data.posts));
  }

  return (
    <div className="bg-base-200 rounded-xl p-4 mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Your Posts</h1>
        <Link to={PATHS.createPost} className="btn btn-primary">
          create posts
        </Link>
      </div>
      <div className="mt-4">
        {data?.data.posts.length > 0 ? (
          data?.data.posts.map((post: PostData) => {
            return (
              <PostCard
                key={post._id}
                id={post._id}
                title={post.title}
                content={post.content}
              />
            );
          })
        ) : (
          <p className="text-center ">No Posts Found</p>
        )}
      </div>
    </div>
  );
};

export default PostsList;
