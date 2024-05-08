import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { postSchema } from "../validations";
import { useMutation } from "@tanstack/react-query";
import API_INSTANCE from "../api";
import toast from "react-hot-toast";

const CreatePostPage = () => {
  type createPostFormData = {
    title: string;
    content: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(postSchema) });

  const postMutation = useMutation({
    mutationKey: ["create-post"],
    mutationFn: (data: createPostFormData) =>
      API_INSTANCE.post("/post/create-post", data),
    onSuccess: (data) => toast.success(data.data.message),
  });

  const onSubmit = (data: createPostFormData) => {
    postMutation.mutate(data);
  };

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
            placeholder="name"
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
