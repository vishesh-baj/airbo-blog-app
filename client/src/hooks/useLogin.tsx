import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations";
import { useMutation } from "@tanstack/react-query";
import API_INSTANCE from "../api";
import { PATHS } from "../routes/paths";
import { loginFormData } from "../types";

const useLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({ resolver: yupResolver(loginSchema) });

  const loginMutation = useMutation({
    mutationFn: (data: loginFormData) => API_INSTANCE.post("/auth/login", data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.data?.token);
      navigate(PATHS.postsList);
    },
  });

  const onSubmit = (data: loginFormData) => {
    loginMutation.mutate(data);
  };
  return { register, handleSubmit, errors, onSubmit };
};

export default useLogin;
