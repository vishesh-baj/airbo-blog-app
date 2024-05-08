import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/queries";
import { useDispatch } from "react-redux";

const usePostList = () => {
  const dispatch = useDispatch();
  const { data, status } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  return { dispatch, data, status };
};

export default usePostList;
