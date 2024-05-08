import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { useQuery } from "@tanstack/react-query";
import { getAllUsersPost } from "../api/queries";
import HeroPosts from "./HeroPosts";
import { PostData } from "../types";

const Hero = () => {
  const { data, status } = useQuery({
    queryKey: ["get-all-user-post"],
    queryFn: getAllUsersPost,
  });

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="w-full md:flex md:flex-row flex-col items-center">
        {/* left */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <div className="p-4">
            <h1 className="text-5xl ">
              Welcome to{" "}
              <span className="animate-pulse bg-gradient-to-r font-bold from-primary via-accent to-secondary inline-block text-transparent bg-clip-text">
                Airbow
              </span>{" "}
              Blog
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
        {/* right */}
        <div className="w-full md:w-1/2 h-screen md:overflow-y-auto">
          <div className="flex flex-col gap-4 items-center justify-center mt-4 md:pr-4">
            {data?.data.posts.map(
              ({ _id, title, content, author }: PostData) => {
                return (
                  <HeroPosts
                    id={_id}
                    title={title}
                    content={content}
                    author={author}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
