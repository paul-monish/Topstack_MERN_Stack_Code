import React, { useContext } from "react";
import { addPosts } from "../services/posts-service";
import { useNavigate } from "react-router-dom";
import { PostsContext } from "../store/PostsProvider";
import { useDispatch } from "react-redux";
import { addPost } from "../store/redux/postsSlice";

const Form = () => {
  // const {addPost}=useContext(PostsContext);
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const fd = Object.fromEntries(formData);
    try {
      const response = await addPosts(fd);
      dispatch(addPost(fd));
      navigate("/posts");
    } catch (error) {
      alert(error);
      return;
    }

    
  };
  return (
    <form method="post" onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input type="text" name="title" />
      <input type="text" name="author" />
      <button>Submit</button>
    </form>
  );
};

export default Form;
