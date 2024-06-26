import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";
import useRegister from "../hooks/useRegister";

const RegisterPage = () => {
  const { errors, handleSubmit, onSubmit, register } = useRegister();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Create an account to access all features. Provident cupiditate
            voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id
            nisi.
          </p>
        </div>
        <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                {...register("username")}
                type="text"
                placeholder="username"
                name="username"
                className="input input-bordered"
              />
              <p className="text-rose-500 pl-1 mt-2">
                {errors.username?.message}
              </p>
            </div>
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
              <p className="text-rose-500 pl-1 mt-2">{errors.email?.message}</p>
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
              <p className="text-rose-500 pl-1 mt-2">
                {errors.password?.message}
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                {...register("confirmPassword")}
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                className="input input-bordered"
              />
              <p className="text-rose-500 pl-1 mt-2">
                {errors.confirmPassword?.message}
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
              <p className="text-center pt-4">
                Already have an account? |{" "}
                <Link to={PATHS.login} className="link link-hover link-primary">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
