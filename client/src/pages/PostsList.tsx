import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/queries";
import { Loader, PostCard } from "../components";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux/posts/postSlice";
import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";
type PostData = {
  _id: string;
  title: string;
  content: string;
  author: string;
  likes: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
const PostsList = () => {
  const dispatch = useDispatch();
  const { data, status } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (status === "pending") {
    return (
      <div className="flex justify-center my-4">
        <Loader />
      </div>
    );
  }

  if (status === "error") {
    toast.error("No posts found");
  }
  if (status === "success") {
    dispatch(fetchPosts(data?.data.posts));
  }

  return (
    <div className="bg-base-200 rounded-xl p-4 mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">User's Posts</h1>
        <Link to={PATHS.createPost} className="btn btn-primary">
          create posts
        </Link>
      </div>
      <div className="mt-4">
        {data?.data.posts.map((post: PostData) => {
          return (
            <PostCard
              key={post._id}
              id={post._id}
              title={post.title}
              content={post.content}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PostsList;
