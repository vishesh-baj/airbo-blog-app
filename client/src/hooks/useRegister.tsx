import { useForm } from "react-hook-form";
import { registerSchema } from "../validations";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import API_INSTANCE from "../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { RegisterApiData, RegisterFormData } from "../types";

const useRegister = () => {
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: yupResolver(registerSchema) });

  const registerMutation = useMutation({
    mutationFn: (data: RegisterApiData) =>
      API_INSTANCE.post("/auth/register", data),
    onSuccess: (data) => {
      console.log(data);
      toast.success(data.data?.message);
      navigate(PATHS.login);
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    const registerPayload = {
      username: data.username,
      email: data.email,
      password: data.confirmPassword,
    };
    registerMutation.mutate(registerPayload);
    reset();
  };
  return { register, handleSubmit, errors, onSubmit };
};

export default useRegister;
