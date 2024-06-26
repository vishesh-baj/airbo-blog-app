import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";

const PageNotFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            <span className="text-primary">404</span> Page not found
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to={PATHS.login} className="btn btn-primary">
            Go back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
