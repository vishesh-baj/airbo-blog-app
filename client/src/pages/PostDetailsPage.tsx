import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { Loader } from "../components";
import usePostDetails from "../hooks/usePostDetails";
import { PostData } from "../types";

const PostDetailsPage = () => {
  const {
    data,
    handleDeletePost,
    handleEditSubmit,
    setEditedContent,
    setEditedTitle,
    convertDateToString,
    status,
  } = usePostDetails();

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
                  const modal = document.getElementById("delete-modal");
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
              <button
                onClick={() =>
                  document.getElementById("edit_modal").showModal()
                }
                className="btn btn-accent btn-outline"
              >
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

        {/* delete modal */}
        <dialog id="delete-modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-primary">Warning!</h3>
            <p className="py-4">Are you sure you want to delete this post?</p>
            <div className="modal-action">
              <div className="flex gap-4">
                <button onClick={handleDeletePost} className="btn btn-error">
                  Delete
                </button>
                <form method="dialog">
                  <button className="btn btn-primary">Close</button>
                </form>
              </div>
            </div>
          </div>
        </dialog>

        {/* edit modal */}
        <dialog id="edit_modal" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit Post</h3>
            <form onSubmit={handleEditSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Edit Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered"
                  defaultValue={fetchedPost.title}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Edit Content</span>
                </label>
                <textarea
                  rows={10}
                  className="textarea textarea-bordered"
                  defaultValue={fetchedPost.content}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
              </div>
              <div className="modal-action">
                <button className="btn btn-accent">Update Post</button>
                <form method="dialog">
                  <button className="btn btn-primary">Close</button>
                </form>
              </div>
            </form>
          </div>
        </dialog>
      </>
    );
  }
};

export default PostDetailsPage;
