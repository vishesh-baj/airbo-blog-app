import { useParams } from "react-router-dom";
import { getPostById } from "../api/queries";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
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
const PostDetailsPage = () => {
  const params = useParams();
  const postId = params?.id;
  console.log(postId);
  const { data, status } = useQuery({
    queryKey: ["get-post-by-id", postId],
    queryFn: () => getPostById(postId),
  });

  if (status === "success") {
    const fetchedPost: PostData = data?.data.post;
    return (
      <div className="bg-base-200 rounded-xl p-4 mt-4">
        <div className="flex justify-between">
          <h1 className="text-2xl">Post Details</h1>
          <div className="flex gap-4">
            <button className="btn btn-error btn-outline ">
              <AiOutlineDelete />
            </button>
            <button className="btn btn-accent btn-outline ">
              <FiEdit2 />
            </button>
          </div>
        </div>
        <div className="bg-base-300 card mt-4 ">
          <div className="card-body">
            <h1>
              <span className="text-primary text-2xl">Title:</span>{" "}
              {fetchedPost.title}
            </h1>
            <h1>
              <span className="text-primary text-2xl">Content:</span>{" "}
              {fetchedPost.content}{" "}
            </h1>
          </div>
        </div>
      </div>
    );
  }
};

export default PostDetailsPage;
