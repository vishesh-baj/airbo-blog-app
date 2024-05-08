import { useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../api/queries";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { convertDateToString } from "../utils";
import { Loader } from "../components";
import API_INSTANCE from "../api";
import toast from "react-hot-toast";
import { PATHS } from "../routes/paths";
import { deletePost } from "../redux/posts/postSlice";
import { useDispatch } from "react-redux";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postId = params.id;

  const { data, status } = useQuery({
    queryKey: ["get-post-by-id", postId],
    queryFn: () => getPostById(postId),
  });

  const deleteMutation = useMutation({
    mutationKey: ["delete-post"],
    mutationFn: (postId: string) =>
      API_INSTANCE.delete(`/post/delete-post/${postId}`),
    onSuccess: (data) => {
      toast.success(data.data.message);
      navigate(PATHS.postsList);
    },
  });

  const handleDeletePost = () => {
    deleteMutation.mutate(postId);
    dispatch(deletePost(postId));
    document.getElementById("my_modal_1").closeModal();
  };

  if (status === "pending") {
    return <Loader />;
  }

  if (status === "success") {
    const fetchedPost: PostData = data?.data.post;
    return (
      <>
        <div className="bg-base-200 rounded-xl p-4 mt-4">
          <div className="flex justify-between">
            <h1 className="text-2xl">Post Details</h1>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  const modal = document.getElementById("my_modal_1");
                  if (modal) {
                    modal.showModal();
                  } else {
                    console.error("Modal element not found!");
                  }
                }}
                className="btn btn-error btn-outline"
              >
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
              <h1>
                <span className="text-primary text-2xl">Author ID:</span>{" "}
                {fetchedPost.author}{" "}
              </h1>
              <h1>
                <span className="text-primary text-2xl">Created At:</span>{" "}
                {convertDateToString(fetchedPost.createdAt)}
              </h1>
            </div>
          </div>
        </div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-primary">Warning!</h3>
            <p className="py-4">Are you sure you want to delete this post?</p>
            <div className="modal-action">
              <div className="flex gap-4">
                <button onClick={handleDeletePost} className="btn btn-error">
                  Delete
                </button>
                <button className="btn btn-primary">Close</button>
              </div>
            </div>
          </div>
        </dialog>
      </>
    );
  }
};

export default PostDetailsPage;
