import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/queries";
import { useDispatch } from "react-redux";

const usePostList = () => {
  const dispatch = useDispatch();
  const { data, status, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  return { dispatch, data, status, refetch };
};

export default usePostList;
