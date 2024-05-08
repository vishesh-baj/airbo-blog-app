import useCreatePost from "../hooks/useCreatePost";
const CreatePostPage = () => {
  const { errors, handleSubmit, onSubmit, register } = useCreatePost();
  return (
    <div className="bg-base-200 rounded-xl p-4 mt-4">
      <h1 className="text-2xl">Create Post</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            {...register("title")}
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="input input-bordered"
          />
          <p className="text-rose-500 mt-2 ml-1">{errors.title?.message}</p>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Content</span>
          </label>
          <textarea
            {...register("content")}
            rows={10}
            className="textarea textarea-bordered"
            placeholder="Content"
            name="content"
            id="content"
          />
          <p className="text-rose-500 mt-2 ml-1">{errors.content?.message}</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create Post</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostPage;
