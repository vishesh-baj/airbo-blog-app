import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content  text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Welcome to <span className="text-primary">Airbow</span> Blog
          </h1>
          <p className="py-6">
            Explore insightful articles, tips, and stories written by our team
            of passionate bloggers. Whether you're looking for inspiration,
            guidance, or just a good read, we've got you covered.
          </p>
          <Link to={PATHS.login} className="btn btn-primary">
            Start Reading
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
