import { HeroPostProps } from "../types";

const HeroPosts = (props: HeroPostProps) => {
  const { id, author, content, title } = props;
  return (
    <div
      className="card bg-base-300 shadow-sm shadow-primary hover:shadow-lg hover:bg-base-100 hover:shadow-primary transition duration-150 ease-in-out mx-1 md:mx-4"
      key={id}
    >
      <div className="card-body ">
        <h1 className=" text-md md:text-2xl text-primary">{title}</h1>
        <p>{content}</p>
        <p>
          <span className="text-secondary">Author ID: </span> {author}
        </p>
      </div>
    </div>
  );
};

export default HeroPosts;
