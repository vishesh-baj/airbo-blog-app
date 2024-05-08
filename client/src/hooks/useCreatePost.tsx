import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { postSchema } from "../validations";
import { useMutation } from "@tanstack/react-query";
import API_INSTANCE from "../api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/posts/postSlice";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { createPostFormData } from "../types";

const useCreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(postSchema) });

  const postMutation = useMutation({
    mutationKey: ["create-post"],
    mutationFn: (data: createPostFormData) =>
      API_INSTANCE.post("/post/create-post", data),
    onSuccess: (data) => {
      dispatch(addPost(data?.data?.savedPost));
      toast.success(data?.data?.message);
      navigate(PATHS.postsList);
    },
  });

  const onSubmit = (data: createPostFormData) => {
    postMutation.mutate(data);
    reset();
  };
  return { register, handleSubmit, errors, onSubmit };
};

export default useCreatePost;
