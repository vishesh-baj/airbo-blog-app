import API_INSTANCE from "../api";
import toast from "react-hot-toast";
import { PATHS } from "../routes/paths";
import { deletePost, updatePost } from "../redux/posts/postSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById } from "../api/queries";
import { useMutation, useQuery } from "@tanstack/react-query";
import { convertDateToString } from "../utils";
import { EditedPostData } from "../types";

const usePostDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const postId = params.id;

  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const { data, status, refetch } = useQuery({
    queryKey: ["get-post-by-id", postId],
    queryFn: () => getPostById(postId),
  });

  const deletePostMutation = useMutation({
    mutationKey: ["delete-post"],
    mutationFn: (postId: string) =>
      API_INSTANCE.delete(`/post/delete-post/${postId}`),
    onSuccess: (data) => {
      toast.success(data.data.message);
      navigate(PATHS.postsList);
    },
  });

  const updatePostMutation = useMutation({
    mutationKey: ["update-post"],
    mutationFn: (editedPostObject: EditedPostData) =>
      API_INSTANCE.put(`/post/update-post/${postId}`, editedPostObject),
    onSuccess: () => {
      toast.success("Post updated successfully");
      refetch();
      const modal = document.getElementById("edit_modal");
      if (modal) {
        modal.close();
      } else {
        console.error("Modal element not found!");
      }
    },
  });

  const handleDeletePost = () => {
    deletePostMutation.mutate(postId);
    dispatch(deletePost(postId));
  };
  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const editedPayloadObject = {
      title: editedTitle,
      content: editedContent,
    };
    updatePostMutation.mutate(editedPayloadObject);
    dispatch(updatePost({ id: postId, updatedPost: editedPayloadObject }));
  };

  return {
    setEditedContent,
    setEditedTitle,
    handleDeletePost,
    handleEditSubmit,
    convertDateToString,
    data,
    status,
  };
};

export default usePostDetails;
