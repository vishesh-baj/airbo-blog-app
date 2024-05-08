import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validations";
import { useMutation } from "@tanstack/react-query";
import API_INSTANCE from "../api";

type loginFormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
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

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
              <p className="mt-2  pl-1 text-rose-500">
                {errors.email?.message}
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <p className="mt-2  pl-1 text-rose-500">
                {errors.password?.message}
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <p className="text-center pt-4">
                Don't have an account? |{" "}
                <Link
                  to={PATHS.register}
                  className="link link-hover link-primary "
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
