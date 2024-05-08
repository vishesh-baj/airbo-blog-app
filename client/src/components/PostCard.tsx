import { Link } from "react-router-dom";

type Props = {
  id: string;
  title: string;
  content: string;
};

const PostCard = (props: Props) => {
  return (
    <Link
      to={`/post-details/${props.id}`}
      className="card mt-4 bg-base-300 cursor-pointer hover:scale-[101%] hover:bg-base-100 transition ease-in-out duration-100"
    >
      <div className="card-body">
        <h1 className="text-2xl text-base-content">
          {props.title.toUpperCase()}
        </h1>
        <p className="text-base">{props.content}</p>
      </div>
    </Link>
  );
};

export default PostCard;
